const { getGuidesUrl } = require("../lib/url")

const proOctoBotInfo = "pro.octobot.info"
const proOctoBotInfoRedirects = () => {
  return [
    {
      source: '/',
      destination:  getGuidesUrl("octobot-script"),
    },
    // trading-strategies
    {
      source: '/trading-strategies/basis',
      destination: getGuidesUrl('octobot-script-docs/strategies'),
    },
    // trading-keywords
    {
      source: '/trading-keywords/orders',
      destination: getGuidesUrl('octobot-script-docs/creating-trading-orders'),
    },
    // plotting
    {
      source: '/plotting/basis',
      destination: getGuidesUrl('octobot-script-docs/plotting-indicators'),
    },
    // trading-data
    {
      source: '/trading-data/fetching_data',
      destination: getGuidesUrl('octobot-script-docs/fetching-history'),
    },
  ]
}

module.exports = {proOctoBotInfo, proOctoBotInfoRedirects}
