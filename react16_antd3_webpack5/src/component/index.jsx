import React, { Component } from "react";
import TsDemo from "../tsDemo.tsx";
import Home from "./home";
import About from "./about";
export default class MyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  addCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };
  render() {
    const { count } = this.state;

    return (
      <div>
        {/* <TsDemo></TsDemo> */}
        <Home></Home>
        <About></About>
      </div>
    );
  }
}
