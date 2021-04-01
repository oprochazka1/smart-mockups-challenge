const mockups = "/mockups"
const categories = "/categories"

export const client = async (endpoint, { method, ...customConfig } = {}) => {
  const headers = { "Content-Type": "application/json" }

  const config = {
    method,
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }

  let data
  try {
    const response = await fetch(process.env.mockupServer + endpoint, config)
    data = await response.json()
    if (response.ok) {
      return data
    }
    throw new Error(response.statusText)
  } catch (err) {
    return Promise.reject(err.message ? err.message : data)
  }
}

client.get = (endpoint, customConfig = {}) => {
  return client(endpoint, { ...customConfig, method: "GET" })
}

client.getCategories = () => {
  return client.get(categories)
}

client.getMockups = () => {
  return client.get(mockups)
}
