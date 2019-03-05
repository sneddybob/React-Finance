import React, { Component } from 'react';

class SymbolDetails extends Component {
    constructor(){
        super();
        this.state = {
            loaded: false
        }
    }

    componentDidMount(){
        if(!this.state.loaded){
            fetch('https://api.iextrading.com/1.0/stock/' + this.props.symbol.symbol + '/company')
                .then((response) => {
                    response.json().then((data) => {
                        this.setState(state => {return {loaded: true, data: data }});
                    })
                })
        }
    }



  render() {
    

    return (
      <div className="m-1 p-4 bg-dark text-light" >
      {!this.state.loaded ? <progress></progress> : <div>
          <h1>{this.state.data.companyName}</h1>
          <a className="btn btn-block btn-primary"style={{whiteSpace:"normal"}} href={"/details/" + this.props.symbol.symbol }>{this.props.symbol.name}</a>
          <p>{this.state.data.description}</p>
          <dl>
              <dt>Industry</dt>
              <dd>{this.state.data.industry}</dd>
              <dt>Sector</dt>
              <dd>{this.state.data.sector}</dd>
              <dt>CEO</dt>
              <dd>{this.state.data.CEO}</dd>
              <dt>Exchange</dt>
              <dd>{this.state.data.exchange}</dd>
          </dl>
      </div>}
      
      </div>
    );
  }
}

export default SymbolDetails;