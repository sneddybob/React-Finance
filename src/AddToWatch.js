import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { watchStocks, removeStocks } from './actions';
import { Company } from './Company';
import SymbolDetails from './symboldetails';
import watchReducer from './reducers/watchReducer'

class addtoWatch extends Component {
    
    watchStocksAdd = async function (e) {      
        var addStock = this.props.data;
        if(this.props.watch.indexOf(addStock) === -1){
        this.props.watchStocks(addStock);}
        else if(this.props.watch.indexOf(addStock) > -1){
          this.props.removeStocks(addStock);
        }
        //console.log(this.props.watch[0].symbol);
        //console.log(this.props.data.symbol);
        
          
      }
      watchStocksRemove = async function (e) {      
        var removeStock = this.props.data;
       if(this.props.watch[0].symbol === this.props.data.symbol){
        
        this.props.removeStocks(removeStock);
       }
      }
  
  render() {
    


    return (
        <div>
        {this.props.watch.length > 0 && this.props.watch[0].symbol === this.props.data.symbol ?  <div>
        
        <button id="remove" type="button" className="btn btn-outline-danger btn-sm m-2" onClick={e => this.watchStocksRemove(e)}>
        Remove
        </button> </div> :<div>
        <button id="watch" type="button" className="btn btn-outline-danger btn-sm m-2" onClick={e => this.watchStocksAdd(e)}>
        Watch
        </button>
        </div>}</div>
        
    );
  
}
}
const mapStateToProps = (state) => {
    return {
     
     watch: state.watchReducer 
    }
  }
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
              
        watchStocks: (watch) =>{
          dispatch(watchStocks(watch))
      },
      removeStocks: (slice) =>{
        dispatch(removeStocks(slice))
    }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(addtoWatch));
