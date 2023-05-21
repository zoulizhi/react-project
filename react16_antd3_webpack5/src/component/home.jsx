import React, { PureComponent } from "react";
import { store } from "../store/index";
import { addCount, subCount } from "../store/action";

class home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: store.getState().count,
    };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ count: store.getState().count });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  addHandler = (num) => {
    store.dispatch(addCount(num));
  };
  subHandler = (num) => {
    store.dispatch(subCount(num));
  };
  render() {
    return (
      <div>
        <div>home</div>
        <div>当前计数:{this.state.count}</div>
        <button onClick={() => this.addHandler(1)}>+1</button>
        <button onClick={() => this.subHandler(5)}>-5</button>
      </div>
    );
  }
}

export default home;
