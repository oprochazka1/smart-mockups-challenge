const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase, { defaultConfig }) => {
  return {
    images: {
      domains: ["smartmockups-web-assets.imgix.net"],
    },
    env: {
      mockupServer: "https://5lt31zvq40.execute-api.us-east-1.amazonaws.com/dev",
    },
  }
}
