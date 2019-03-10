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
          console.log("Fucker!")
        }
        
          
      }
      watchStocksRemove = async function (e) {      
        var removeStock = this.props.data;
       if(this.props.watch.indexOf(removeStock)>-1){
        
        this.props.removeStocks(removeStock);
       }
      }
  
  render() {
    


    return (
        <div>
        {this.props.watch.indexOf(this.props.data) !== -1 ?  <div>
        
        <button id="remove" type="button" className="btn btn-outline-danger btn-sm" onClick={e => this.watchStocksRemove(e)}>
        Remove
        </button> </div> :<div>
        <button id="watch" type="button" className="btn btn-outline-danger btn-sm m-5" onClick={e => this.watchStocksAdd(e)}>
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
