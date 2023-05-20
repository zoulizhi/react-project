import React, { Component } from "react";
import TsDemo from "./tsDemo.tsx";
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
        <TsDemo></TsDemo>
        <div onClick={this.addCount}>加一</div>
        <div>结果：{count}</div>
      </div>
    );
  }
}
