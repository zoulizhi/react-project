import {combineReducers} from "redux"

import home from './component/home/rdHome'
import about from './component/about/rdAbout'

export const reducer=combineReducers({
  home,
  about
})