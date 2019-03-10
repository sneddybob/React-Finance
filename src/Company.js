import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'
import { watchStocks, removeStocks } from './actions';
//import watchReducer from './reducers/watchReducer'


class Company extends Component {
  
  

  
  render() {

   


    return (
      <div>
      <h1>{this.props.data.companyName}</h1>
      <div className="mx-auto" style={{width:"100%"}}>
     
      </div>
      <p>{this.props.data.description}</p>
      <dl>
          <dt>Industry</dt>
          <dd>{this.props.data.industry}</dd>
          <dt>Sector</dt>
          <dd>{this.props.data.sector}</dd>
          <dt>CEO</dt>
          <dd>{this.props.data.CEO}</dd>
          <dt>Exchange</dt>
          <dd>{this.props.data.exchange}</dd>
          



      </dl></div>
    );
  }
}

export default (Company);

