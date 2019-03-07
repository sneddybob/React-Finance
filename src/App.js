import React, { Component } from 'react';

import Navbar from './navbar';
import Home from './home';
import SymbolDetails from './symboldetails';
import Search from './Search';

import {Switch, Route} from 'react-router-dom'
import Watch from './Watch';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Switch>
        <Route path="/" exact component={Home} />
          <Route path="/search/:term" component={Search} />
          <Route path="/details/:symbol/" render={(routeData) => <SymbolDetails symbol={{symbol: routeData.match.params.symbol}} showFullDetail={true} />} />
          <Route path="/watched" component={Watch}/>
          <Route path="*" render={() => <h1>Page Not Found</h1>} />
        </Switch>
      </div>
    );
  }

}



export default App;
