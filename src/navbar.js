import React, { Component } from 'react';

class Navbar extends Component {
    constructor(){
        super();
        this.state = {
            allSymbols : [],
            searchValue : "",
            
        }
    }
    componentDidMount(){
        fetch('https://api.iextrading.com/1.0/ref-data/symbols').then((response) => {
            response.json().then((data) =>{
                //Setting state on a component should kick-off the update lifecycle
                this.setState(state => {return {allSymbols: data }});
            })
        })
    }

    searchOnSubmit = function (e) {
        e.preventDefault();
        var searchValue = document.getElementsByName('search')[0].value.toLowerCase();
      
        this.setState(state => {return {searchValue: searchValue }});        
        var matchedSymbols = this.state.allSymbols.filter(function(e) { return e.symbol.toLowerCase() === searchValue || e.name.toLowerCase().indexOf(searchValue) >= 0 });

        if(this.props.hasOwnProperty('setMatchedSymbols')){
          this.props.setMatchedSymbols(matchedSymbols);
      }

        
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
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Stock Symbols</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">Compare Symbols</a>
          </li>
          
        </ul>
        <form className="form-inline" onSubmit={e => this.searchOnSubmit(e)}>
    <input name ="search" list = "symbols" className="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search"/>
     <span className="input-group-text" id="basic-addon1">Number of results : {this.props.matchedSymbols.length}</span>
    <datalist id="symbols">
    {this.props.matchedSymbols.map(function(e){return <option key={e.symbol} value={e.symbol}>{e.name}</option> })}
    </datalist>
    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
      </div>
    </nav>
    
    );
    
  }
}

export default Navbar;