import React, { Component } from 'react';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './actHome';
import Home from './cpHome'

const App = connect(mapStateToProps, mapDispatchToProps)(Home)

class Container extends Component {
  render() {
    return (
      <App></App>
    );
  }
}

export default Container;