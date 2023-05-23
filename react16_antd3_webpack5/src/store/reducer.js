const initialState = {
  count: 0,
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.num };
    case "DECREMENT":
      return { ...state, count: state.count - action.num };
    case "ADD_NUMBER":
      return { ...state, count: state.count + action.num };
    case "SUB_NUMBER":
      return { ...state, count: state.count - action.num };
    default:
      return state;
  }
}
