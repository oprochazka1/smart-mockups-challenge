const { PHASE_DEVELOPMENT_SERVER } = require("next/constants")

module.exports = (phase, { defaultConfig }) => {
  return {
    images: {
      domains: ["smartmockups-web-assets.imgix.net"],
    },
  }
}
