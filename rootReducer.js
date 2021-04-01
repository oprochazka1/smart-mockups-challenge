import { combineReducers } from "redux"
import * as types from "./constants/types"
import { mockupData } from "./reducers/mockupReducer"

const reducers = {
  mockupData,
}

export default combineReducers(reducers)
