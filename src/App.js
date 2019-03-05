import React, { Component } from 'react';
import Home from './home';
import Template from './template';
import Navbar from './navbar';

class App extends Component {
  
  constructor(){
    super();
    this.state = {
       
        matchedSymbols : []
    }
}
  
setMatchedSymbols = (symbols) => {
 this.setState({matchedSymbols : symbols});
}
  render() {
    return (
   
      <div className="App">
      <Navbar matchedSymbols={this.state.matchedSymbols} setMatchedSymbols={this.setMatchedSymbols}/>
      <Home />
       </div>
    );
  }
}

export default App;
