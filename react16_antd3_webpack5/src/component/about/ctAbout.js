import React, { Component } from 'react';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from './actAbout';
import About from './cpAbout'

const App = connect(mapStateToProps, mapDispatchToProps)(About)

class Container extends Component {
  render() {
    return (
      <App></App>
    );
  }
}

export default Container;