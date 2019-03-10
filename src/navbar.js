import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import { connect } from 'react-redux'
import { exampleAction, loadAllSymbols } from './actions';


class Navbar extends Component {
  constructor(){
    super();
    this.state = {
        matchedSymbols: [],
    }
}
componentDidMount(){
    if(this.props.allSymbols.length === 0){
        fetch('https://api.iextrading.com/1.0/ref-data/symbols')
        .then(response => response.json()
            .then(data => 
                this.props.loadAllSymbols(data)
        ))
    }
}

handleKeyUp = async function(e){
    var searchValue = e.target.value.toLowerCase();

    var matchedSymbols = this.props.allSymbols.filter(function (e) { return e.symbol.toLowerCase() === searchValue || e.name.toLowerCase().indexOf(searchValue) >= 0 }).slice(0, 10);
    this.setState({matchedSymbols, selectVisible: true})
}


searchOnSubmit = async function (e) {
    e.preventDefault();
    var searchValue = document.getElementsByName('search')[0].value.toLowerCase();
    this.props.exampleAction(searchValue);
    this.props.history.push('/search/' + searchValue);
}
   
  
    render() {
         
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">React-Finance</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search">Stock Symbols</NavLink>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/watched">Watched Symbols</a>
          </li>
          
        </ul>
        <form className="form-inline" onSubmit={e => this.searchOnSubmit(e)}>
      
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" name="search" list="symbols" onKeyUp={e => this.handleKeyUp(e)} />
     
    <datalist id="symbols">
    {this.state.matchedSymbols.map(function (e) { return <option key={e.symbol} value={e.symbol}>{e.name}</option> })}
    </datalist>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      </div>
    </nav>
    
    );
    
  }
  
}
const mapStateToProps = (state) => {
  return {
   example: state.exampleReducer,
   allSymbols: state.allSymbolReducer
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      exampleAction: (change) => {
        dispatch(exampleAction(change))
      },
       
      loadAllSymbols: (symbols) =>{
        dispatch(loadAllSymbols(symbols))
    }
  }
}
//Instead of exporting a component, I export a "connected component"
//Each connected component has functions that explain how the component
//interacts with the store
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
