import React, { Component } from 'react';
import Home from './home';
import Template from './template';
import Navbar from './navbar';
import SymbolDetails from './symboldetails';

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
      <Navbar matchedSymbols={this.state.matchedSymbols} setMatchedSymbols={this.setMatchedSymbols} />
      {this.state.matchedSymbols.length === 0 ? <Home /> : <div className="container-fluid">
    <div className="row">
      {this.state.matchedSymbols.map(function(e) { return <div className="card-deck col-4">
      <SymbolDetails key={e.symbol} symbol={e} /></div> })}
    </div>
    </div>  
      }
      </div>
  );
}
}

export default App;
