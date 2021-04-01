import { client } from "../common/mockupClient"
import { LOADING, mockupAsyncAction } from "../constants/types"
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
  const loading = useSelector((state) => state.mockupData.loading)
  return loading === LOADING
}
