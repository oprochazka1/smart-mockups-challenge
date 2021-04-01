import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { client } from "../../common/mockupClient"
import { fetchMockupFilter } from "../mockups"
import { Status } from "./../../constants/types"
import categories from "./category.json"
import mockups from "./mockup.json"

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
client.getCategories = jest.fn()
client.getCategories.mockImplementation(async () => {
  return categories
})

client.getMockups = jest.fn()
client.getMockups.mockImplementation(async () => {
  return mockups
})

const store = mockStore({ mockupData: { categories: [], mockups: [], status: Status.NOT_LOADED } })

describe("mockups async action", () => {
  it("Test filtered categories", async () => {
    const expectedActions = ["mockupFilter/fetchMockupFilter/pending", "mockupFilter/fetchMockupFilter/fulfilled"]
    const result = await store.dispatch(fetchMockupFilter())

    expect(store.getActions().map((a) => a.type)).toEqual(expectedActions)
    expect(result.payload[0].length).toBe(2)
    expect(result.payload[1].length).toBe(2)
  })
})
