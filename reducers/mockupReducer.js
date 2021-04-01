import { combineReducers } from "redux"
import { Status, mockupSliceTypes } from "../constants/types"
import { createSlice } from "@reduxjs/toolkit"
import { fetchMockupFilter } from "../actions/mockups"

export const mockupFilterSlice = createSlice({
  name: mockupSliceTypes.mockupFilter,
  initialState: { categories: [], mockups: [], status: Status.NOT_LOADED },
  reducers: {},
  extraReducers: {
    [fetchMockupFilter.fulfilled]: (state, action) => {
      const [categories, mockups] = action.payload
      state.categories = categories
      state.mockups = mockups
      state.status = Status.IDLE
    },
    [fetchMockupFilter.pending]: (state, action) => {
      state.status = Status.LOADING
    },
    [fetchMockupFilter.rejected]: (state, action) => {
      state.status = Status.ERROR
    },
  },
})

export const mockupData = mockupFilterSlice.reducer
