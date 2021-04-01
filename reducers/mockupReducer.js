import { combineReducers } from "redux"
import { LOADING, mockupSliceTypes } from "../constants/types"
import { createSlice } from "@reduxjs/toolkit"
import { fetchMockupFilter } from "../actions/mockups"

export const mockupFilterSlice = createSlice({
  name: mockupSliceTypes.mockupFilter,
  initialState: { categories: [], mockups: [], loading: "idle" },
  reducers: {},
  extraReducers: {
    [fetchMockupFilter.fulfilled]: (state, action) => {
      const [categories, mockups] = action.payload
      state.categories = categories
      state.mockups = mockups
      state.loading = "idle"
    },
    [fetchMockupFilter.pending]: (state, action) => {
      state.loading = LOADING
    },
  },
})

export const mockupData = mockupFilterSlice.reducer
