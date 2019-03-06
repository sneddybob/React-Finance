import React, { Component } from 'react';
import Home from './home';
import Template from './template';
import Navbar from './navbar';
import SymbolDetails from './symboldetails';
import {Switch, Route, Redirect} from "react-router-dom";
import Search from './Search';


class App extends Component {
  
  constructor(){
    super();
    this.state = {
       
        matchedSymbols : []
    }
}
  
render() {
  return (
    <div className="App">
    <Navbar matchedSymbols={this.state.matchedSymbols} setMatchedSymbols={this.setMatchedSymbols} />
    <Switch>
    <Route path="/" exact render={() => this.state.matchedSymbols.length > 0 ? <Redirect to='/search' /> : <Home /> } />
          <Route path="/search" render={() => this.state.matchedSymbols.length === 0 ? <Redirect to='/' /> : <Search data={this.state.matchedSymbols} />} />
          <Route path="/details/:symbol/" render={(routeData) => <SymbolDetails symbol={{symbol: routeData.match.params.symbol}} showFullDetail={true} />} />
          <Route path="*" render={() => <h1>Page Not Found</h1>} />
    </Switch>
    </div>
  );
}


setMatchedSymbols = (symbols) => {
  this.setState({matchedSymbols: symbols});
}

}

export default App;