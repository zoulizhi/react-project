import { initialState } from './actAbout';
export default function singleReducer(state = initialState, action) {
  if(action.pageType==="ABOUT_PAGE"){
    switch (action.type) {
      case "ADD_COUNT":
        return { ...state, about: { count: state.about.count + action.num } }
      case "SUB_COUNT":
        return { ...state, about: { count: state.about.count - action.num } }
      default:
        return state
    }
  }
  return state
}