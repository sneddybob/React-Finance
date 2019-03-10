import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { watchStocks } from './actions';
import { Company } from './Company';
import SymbolDetails from './symboldetails';
import watchReducer from './reducers/watchReducer';
import {NavLink} from 'react-router-dom';
import Quote from './Quote';

class Watch extends Component {
  
  
  render() {

    
    return (
      <div><h2>Companies being watched:</h2>
      <div className="row">
      {this.props.watch.map(function(e) {  return <div className="col-4"  key={e.symbol}><SymbolDetails symbol={e} /></div> })}
      </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
    
     watch: state.watchReducer 
    }
  }
  
  
  export default connect(mapStateToProps)(withRouter(Watch));
