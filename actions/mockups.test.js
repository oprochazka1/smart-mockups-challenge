import configureMockStore from "redux-mock-store"
import { LOADING, mockupAsyncAction } from "../constants/types"
import thunk from "redux-thunk"
import fetchMock from "fetch-mock"
import { client } from "../common/mockupClient"
import { fetchMockupFilter, useCategories, useFilteredMockups, useIsMockupDataLoading } from "./mockups"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
client.getCategories = jest.fn()
client.getCategories.mockImplementation(async () => {
  return [
    {
      title: "Technology",
      slug: "digital",
      children: [
        { title: "Smartphone", slug: "smartphone", children: [] },
        { title: "Smartphone", slug: "smart-phone", children: [] },
      ],
    },
  ]
})

client.getMockups = jest.fn()
client.getMockups.mockImplementation(async () => {
  return [{ id: "sdf", title: "test", category: ["digital"], thumb: "test" }]
})

const store = mockStore({ mockupData: { categories: [], mockups: [], loading: "idle" } })

describe("mockups async action", () => {
  it("Test filtered categories", async () => {
    const expectedActions = ["mockupFilter/fetchMockupFilter/pending", "mockupFilter/fetchMockupFilter/fulfilled"]

    const result = await store.dispatch(fetchMockupFilter())
    expect(store.getActions().map((a) => a.type)).toEqual(expectedActions)
    expect(result.payload[0].length).toBe(1)
    expect(result.payload[1].length).toBe(1)
  })
})
