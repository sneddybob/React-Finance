import React, { Component } from 'react';
import GChart from './GChart'
import Company from './Company';
import News from './News';
import Quote from './Quote';
import {NavLink, withRouter} from 'react-router-dom';
import AddToWatch from './AddToWatch';
import { connect } from 'react-redux';


class SymbolDetails extends Component {
    constructor(){
        super();
        this.state = {
            loaded: false
        }
    }

    componentDidMount(){
        if(!this.state.loaded){
            let endpoint = !this.props.showFullDetail ? 'https://api.iextrading.com/1.0/stock/' + this.props.symbol.symbol + '/company' : 'https://api.iextrading.com/1.0/stock/' + this.props.symbol.symbol + '/batch?types=quote,news,chart,company&range=1m&last=10'

            fetch(endpoint)
                .then((response) => {
                    response.json().then((data) => {
                        if(!this.props.showFullDetail){
                            this.setState(state => {return {loaded: true, data: data }});
                        } else{
                            this.setState(state => {return {loaded: true, data: data.company, quote: data.quote, news: data.news, chart: data.chart }});
                        }
                        
                    })
                })
        }
    }



  render() {
    

    return (
        <div className="m-1 p-4 bg-dark text-light" >
        {!this.state.loaded ? <progress></progress> : this.props.showFullDetail ? <div><h5>
            <AddToWatch data={this.state.data} /></h5>
            <div className="row">
              <div className="col">
              
                  <Company data={this.state.data} />
                  <Quote data={this.state.quote} />
                  
              </div>
                  
              <div className="col">
                  <News data={this.state.news} />
              </div>
            </div>
            <div className="row">
              <div className="col">
                  <GChart data={this.state.chart} />
              </div>
            </div>
          </div> : 
          <div>
              <Company data={this.state.data} />
              <NavLink className="btn btn-block btn-primary" style={{whiteSpace:"normal"}} to={"/details/" + this.props.symbol.symbol }>{this.props.symbol.name}</NavLink>
          </div>
      }
      </div>);
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    }
}

export default connect(mapDispatchToProps)(withRouter(SymbolDetails));