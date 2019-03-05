import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
        <div className="jumbotron">
        <h1 className="display-4">React-Finance</h1>
        <p className="lead">React-Finance uses React, Redux, and IEX Trading's Web API to show React's capabilities!</p>
        <hr className="my-4"/>
        <p>To get started : search for a symbol or stock name.</p>
        
      </div>
    );
  }
}

export default Home;