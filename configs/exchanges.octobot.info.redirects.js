const { getGuidesUrl } = require("../lib/url")

const exchangesOctoBotInfo = "exchanges.octobot.info"
const exchangesOctoBotInfoRedirects = () => {
  return [
    {
      source: '/',
      destination:  getGuidesUrl("exchanges"),
    },
    // partners
    {
      source: '/partners/binance',
      destination: getGuidesUrl('octobot-partner-exchanges/binance'),
    },
    {
      source: '/partners/binance/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/binance/account-setup'),
    },
    {
      source: '/partners/okx',
      destination: getGuidesUrl('octobot-partner-exchanges/okx'),
    },
    {
      source: '/partners/okx/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/okx/account-setup'),
    },
    {
      source: '/partners/kucoin',
      destination: getGuidesUrl('octobot-partner-exchanges/kucoin'),
    },
    {
      source: '/partners/kucoin/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/kucoin/account-setup'),
    },
    {
      source: '/partners/bybit',
      destination: getGuidesUrl('octobot-partner-exchanges/bybit'),
    },
    {
      source: '/partners/bybit/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/bybit/account-setup'),
    },
    {
      source: '/partners/cryptocom',
      destination: getGuidesUrl('octobot-partner-exchanges/crypto-com'),
    },
    {
      source: '/partners/cryptocom/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/crypto-com/account-setup'),
    },
    {
      source: '/partners/huobi',
      destination: getGuidesUrl('octobot-partner-exchanges/huobi'),
    },
    {
      source: '/partners/huobi/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/huobi/account-setup'),
    },
    {
      source: '/partners/phemex',
      destination: getGuidesUrl('octobot-partner-exchanges/phemex'),
    },
    {
      source: '/partners/phemex/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/phemex/account-setup'),
    },
    {
      source: '/partners/bitget',
      destination: getGuidesUrl('octobot-partner-exchanges/bitget'),
    },
    {
      source: '/partners/bitget/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/bitget/account-setup'),
    },
    {
      source: '/partners/okcoin',
      destination: getGuidesUrl('octobot-partner-exchanges/okcoin'),
    },
    {
      source: '/partners/okcoin/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/okcoin/account-setup'),
    },
    {
      source: '/partners/hollaex',
      destination: getGuidesUrl('octobot-partner-exchanges/hollaex'),
    },
    {
      source: '/partners/hollaex/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/hollaex/account-setup'),
    },
    {
      source: '/partners/mexc',
      destination: getGuidesUrl('octobot-partner-exchanges/mexc'),
    },
    {
      source: '/partners/mexc/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/mexc/account-setup'),
    },
    {
      source: '/partners/gateio',
      destination: getGuidesUrl('octobot-partner-exchanges/gateio'),
    },
    {
      source: '/partners/gateio/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/gateio/account-setup'),
    },
    {
      source: '/partners/ascendex',
      destination: getGuidesUrl('octobot-partner-exchanges/ascendex'),
    },
    {
      source: '/partners/ascendex/setup',
      destination: getGuidesUrl('octobot-partner-exchanges/ascendex/account-setup'),
    },
    // officially_supported
    {
      source: '/officially_supported/coinbase',
      destination: getGuidesUrl('octobot-supported-exchanges/coinbase'),
    },
    // community_tested
    {
      source: '/officially_supported/kraken',
      destination: getGuidesUrl('octobot-supported-exchanges/kraken'),
    },
    {
      source: '/officially_supported/hitbtc',
      destination: getGuidesUrl('octobot-supported-exchanges/hitbtc'),
    },
    {
      source: '/community_tested/bitfinex',
      destination: getGuidesUrl('octobot-supported-exchanges/bitfinex'),
    },
    {
      source: '/officially_supported/bitstamp',
      destination: getGuidesUrl('octobot-supported-exchanges/bitstamp'),
    },
    {
      source: '/officially_supported/poloniex',
      destination: getGuidesUrl('octobot-supported-exchanges/poloniex'),
    },
    {
      source: '/officially_supported/wavesexchange',
      destination: getGuidesUrl('octobot-supported-exchanges/wavesexchange'),
    },
    {
      source: '/officially_supported/bitvavo',
      destination: getGuidesUrl('octobot-supported-exchanges/bitvavo'),
    },
    {
      source: '/officially_supported/poloniex',
      destination: getGuidesUrl('octobot-supported-exchanges/poloniex'),
    },
  ]
}

module.exports = {exchangesOctoBotInfo, exchangesOctoBotInfoRedirects}
