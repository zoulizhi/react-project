import React, { Component } from 'react';

class homecp extends Component {
  render() {
    return (
      <div>
        <div>about</div>
        <div>当前计数:{this.props.about.count}</div>
        <button onClick={() => this.props.addCount(1)}>+1</button>
        <button onClick={() => this.props.subCount(5)}>-5</button>
      </div>
    );
  }
}

export default homecp;