import React, { PureComponent } from "react";
import { mapStateToProps,mapDispatchToProps } from "../store/action";

class home extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div>home</div>
        <div>当前计数:{this.props.count}</div>
        <button onClick={() => this.props.addCount(1)}>+1</button>
        <button onClick={() => this.props.subCount(5)}>-5</button>
      </div>
    );
  }
}

import { connect } from "../utils/connect";

export default connect(mapStateToProps,mapDispatchToProps)(home);
