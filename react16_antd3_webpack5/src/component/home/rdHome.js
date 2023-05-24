import { initialState } from './actHome';
export default function singleReducer(state = initialState, action) {
  if(action.pageType==="HOME_PAGE"){
    switch (action.type) {
      case "ADD_COUNT":
        return { ...state, home: { count: state.home.count + action.num } }
      case "SUB_COUNT":
        return { ...state, home: { count: state.home.count - action.num } }
      default:
        return state
    }
  }
  return state
  
}