import React, { Component } from 'react';

class homecp extends Component {
  render() {
    console.log(this.props,"props")
    return (
      <div>
        <div>home</div>
        <div>当前计数:{this.props.home.count}</div>
        <button onClick={() => this.props.addCount(1)}>+1</button>
        <button onClick={() => this.props.subCount(5)}>-5</button>
      </div>
    );
  }
}

export default homecp;