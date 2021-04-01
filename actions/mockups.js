import { client } from "../common/mockupClient"
import { Status, mockupAsyncAction } from "../constants/types"
import { useSelector } from "react-redux"
import { createAsyncThunk } from "@reduxjs/toolkit"

const flatCategories = (categories) => {
  return categories
    .map((category) => [
      ...flatCategories(category.children),
      {
        title: category.title,
        slug: category.slug,
      },
    ])
    .flat()
}

export const fetchMockupFilter = createAsyncThunk(mockupAsyncAction.mockupFilter, async (thunkAPI) => {
  const [categories, mockups] = await Promise.all([client.getCategories(), client.getMockups()])
  const usedCategories = [...new Set(mockups.map((mockup) => mockup.category).flat())]
  const flattenCategories = flatCategories(categories)
  const filledCategories = flattenCategories.filter((category) => usedCategories.includes(category.slug))
  const uniqueCategories = filledCategories.reduce(
    (acc, category) =>
      acc.some((unique) => unique.title.toUpperCase() === category.title.toUpperCase()) ? acc : [...acc, category],
    []
  )
  const sortedCategories = uniqueCategories.sort((category, category2) => category.title.localeCompare(category2.title))

  return [sortedCategories, mockups]
})

export const useCategories = () => {
  const categories = useSelector((state) => state.mockupData.categories)

  return categories
}

export const useFilteredMockups = (slug) => {
  const mockups = useSelector((state) => state.mockupData.mockups)
  if (!slug) {
    return mockups
  }
  return mockups.filter((mockup) => mockup.category.includes(slug))
}

export const useIsMockupDataLoading = () => {
  const status = useSelector((state) => state.mockupData.status)
  return status === Status.LOADING || status === Status.NOT_LOADED
}

export const useIsMockupDataError = () => {
  const status = useSelector((state) => state.mockupData.status)
  return status === Status.ERROR
}

export const useMockupDataErrorMsg = () => {
  return useSelector((state) => state.mockupData.error)
}
