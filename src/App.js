import React, { Component } from 'react';
import { connect } from 'react-redux';
import Employee from './employee.js';
import './App.css';

class App extends Component {

  render() {
    const { city } = this.props;
    return (
      <div className="App">
        {/*<span>{this.props.City}</span>*/}
        <Employee></Employee>
      </div>
    );
  }

}

const mapStateToProps = function(state){
  return {
    City: state.City,
  }
}

export default connect(mapStateToProps)(App)
