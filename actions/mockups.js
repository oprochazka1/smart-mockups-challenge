import { client } from "../common/mockupClient"
import { mockupActions } from "../constants/types"
import mockupData from "../reducers/mockupReducer"
import { useSelector } from "react-redux"

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

export const fetchMockupFilter = () => async (dispatch) => {
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

  dispatch({ type: mockupActions.FETCH_CATEGORIES, categories: sortedCategories })
  dispatch({ type: mockupActions.FETCH_MOCKUPS, mockups })
}

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
