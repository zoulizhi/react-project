import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../store/action";
class about extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>about</div>
        <div>当前计数:{this.props.count}</div>
        <button onClick={() => this.props.addCount(1)}>+1</button>
        <button onClick={() => this.props.subCount(5)}>-5</button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(about);
