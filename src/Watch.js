import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

class Watch extends Component {
  render() {

        var watchedStocksArray = [];
        


    return (
      <div>Here lies your component called Watch</div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
     allSymbols: state.allSymbolReducer 
    }
  }
  
  
  export default connect(mapStateToProps)(withRouter(Watch));
