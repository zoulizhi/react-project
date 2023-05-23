import React, { Component } from "react";
import Home from "./home";
import About from "./about";
export default class MyApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Home></Home>
        <About></About>
      </div>
    );
  }
}
