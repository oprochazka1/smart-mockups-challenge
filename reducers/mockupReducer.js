import { combineReducers } from "redux"
import { mockupActions } from "../constants/types"

const mockups = (state = [], { type, mockups }) => {
  switch (type) {
    case mockupActions.FETCH_MOCKUPS:
      return mockups
    default:
      return state
  }
}

const categories = (state = [], { type, categories }) => {
  switch (type) {
    case mockupActions.FETCH_CATEGORIES:
      return categories
    default:
      return state
  }
}

export default combineReducers({
  categories,
  mockups,
})
