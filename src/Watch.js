import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { watchStocks } from './actions';
import { Company } from './Company';
import SymbolDetails from './symboldetails';


class Watch extends Component {
  
  
  render() {

        

        


    return (
      <div>
      ugh
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
     allSymbols: state.allSymbolReducer,
     watch: state.watchReducer 
    }
  }
  
  
  export default connect(mapStateToProps)(withRouter(Watch));
