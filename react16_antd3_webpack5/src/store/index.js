import { createStore } from "redux";
import reducer from "./reducer";
import { addCount, subCount } from "./action";

export const store = createStore(reducer);
store.subscribe(() => {
  console.log("执行了");
  console.log("count:", store.getState());
});
store.dispatch(addCount(5));
store.dispatch(addCount(5));
store.dispatch(subCount(1));
store.dispatch(subCount(1));
