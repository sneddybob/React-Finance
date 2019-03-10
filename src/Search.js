import React, { Component } from 'react';
import GChart from './GChart'
import Company from './Company';
import News from './News';
import Quote from './Quote';
import {NavLink} from 'react-router-dom';
import SymbolDetails from './symboldetails';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class Search extends Component {
  render() {
    var searchValue = this.props.match.params.term;
    
    var matchedSymbols = [];
    if(searchValue !== ''){
      matchedSymbols = this.props.allSymbols.filter(function (e) { return e.symbol.toLowerCase() === searchValue || e.name.toLowerCase().indexOf(searchValue) >= 0 }).slice(0, 10);
    }

    return (
       <div className="container-fluid">
       {matchedSymbols.length > 0 ?
            <div className="row">
            {matchedSymbols.map(function(e) { return <div className="col-4"  key={e.symbol}><SymbolDetails symbol={e} /></div> })}
            </div> : "No Results" 
        }
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
   allSymbols: state.allSymbolReducer 
  }
}


export default connect(mapStateToProps)(withRouter(Search));