import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
      <div>{this.props.data ? 
        <div className="container-fluid">
        
                        
            <div className="card-deck">
            <div className="card bg-primary">
            <div className="card-body">
            <h6 className="card-title">Today's High : </h6>
            <p className="card-text">${this.props.data.high}</p>
            </div>
            </div>
            <div className="card bg-primary">
            <div className="card-body">
            <h6 className="card-title">Today's Low : </h6>
            <p className="card-text">${this.props.data.low}</p>
            </div>
            </div>
            <div className="card bg-primary">
            <div className="card-body">
            <h6 className="card-title">Closing Price : </h6>
            <p className="card-text">${this.props.data.close}</p>
            </div>
            </div>
            <div className="card bg-primary">
            <div className="card-body">
            <h6 className="card-title">52 Week High : </h6>
            <p className="card-text">${this.props.data.week52High}</p>
            </div>
            </div>
            <div className="card bg-primary">
            <div className="card-body">
            <h6 className="card-title">52 Week Low : </h6>
            <p className="card-text">${this.props.data.week52Low}</p>
            </div>
            </div>
            </div>
            

        </div> : ""}</div>
    );
  }
}

export default Quote;