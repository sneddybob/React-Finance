import React, { Component } from 'react';
import GChart from './GChart'
import Company from './Company';
import News from './News';
import Quote from './Quote';
import {NavLink} from 'react-router-dom';
import SymbolDetails from './symboldetails';


class Search extends Component {
  render() {
    return (
      <div>  <div className="container-fluid">
      {this.props.data && this.props.data.length > 0 ?
           <div className="row">
           {this.props.data.map(function(e) { return <div className="col-4"  key={e.symbol}><SymbolDetails symbol={e} /></div> })}
           </div> : "No Results" 
       }
     </div></div>
    );
  }
}

export default Search;