/** @type {import('next').NextConfig} */

const { getGuidesUrl } = require("../lib/url")


const octoBotInfo = "octobot.info"

const octoBotInfoRedirects = () => {

  return [
    {
      source: '/',
      destination: getGuidesUrl("")
    },
    // installation
    {
      source: '/installation/with-octobot-cloud',
      destination: getGuidesUrl("octobot-installation/with-octobot-cloud")
    },
    {
      source: '/installation/local-installation',
      destination: getGuidesUrl("octobot-installation/local")
    },
    {
      source: '/installation/with-binary',
      destination: getGuidesUrl("/octobot-installation/with-binary")
    },
    {
      source: '/installation/with-docker',
      destination: getGuidesUrl("/octobot-installation/with-docker")
    },
    {
      source: '/installation/with-python-only',
      destination: getGuidesUrl("/octobot-installation/with-python-and-git")
    },
    {
      source: '/installation/with-pip',
      destination: getGuidesUrl("/octobot-installation/with-pip")
    },
    {
      source: '/installation/installation-troubleshoot',
      destination: getGuidesUrl("/octobot-installation/troubleshoot")
    },
    // configuration
    {
      source: '/configuration/profiles',
      destination: getGuidesUrl("/octobot-configuration/profiles")
    },
    {
      source: '/configuration/profile-configuration',
      destination: getGuidesUrl("/octobot-configuration/profile-configuration")
    },
    {
      source: '/configuration/profile-configuration',
      destination: getGuidesUrl("/octobot-configuration/profile-configuration")
    },
    {
      source: '/configuration/accounts',
      destination: getGuidesUrl("/octobot-configuration/accounts")
    },
    {
      source: '/configuration/custom-profile',
      destination: getGuidesUrl("/octobot-configuration/custom-profile")
    },
    {
      source: '/configuration/exchanges',
      destination: getGuidesUrl("/octobot-configuration/exchanges")
    },
    // usage
    {
      source: '/usage/simulator',
      destination: getGuidesUrl("/octobot-usage/simulator")
    },
    {
      source: '/usage/understanding-profitability',
      destination: getGuidesUrl("/octobot-usage/understanding-profitability")
    },
    {
      source: '/usage/frequently-asked-questions-faq',
      destination: getGuidesUrl("/octobot-usage/frequently-asked-questions-faq")
    },
    // interfaces
    {
      source: '/interfaces/web-interface',
      destination: getGuidesUrl("/octobot-interfaces/web")
    },
    {
      source: '/interfaces/reddit-interface',
      destination: getGuidesUrl("/octobot-interfaces/reddit")
    },
    {
      source: '/interfaces/telegram-interface',
      destination: getGuidesUrl("/octobot-interfaces/telegram")
    },
    {
      source: '/interfaces/telegram-interface/telegram-api',
      destination: getGuidesUrl("/octobot-interfaces/telegram/telegram-api")
    },
    {
      source: '/interfaces/chatgpt-interface',
      destination: getGuidesUrl("/octobot-interfaces/chatgpt")
    },
    // advanced usage
    {
      source: '/advanced_usage/tentacle-manager',
      destination: getGuidesUrl("/octobot-advanced-usage/tentacle-manager")
    },
    {
      source: '/advanced_usage/backtesting-and-strategy-optimization',
      destination: getGuidesUrl("/octobot-advanced-usage/backtesting-and-strategy-optimization")
    },
    {
      source: '/advanced_usage/beta-program',
      destination: getGuidesUrl("/octobot-advanced-usage/beta-program")
    },
    // webhooks
    {
      source: '/webhooks/tradingview-webhook',
      destination: getGuidesUrl("/octobot-interfaces/tradingview")
    },
    {
      source: '/webhooks/using-a-webhook-with-octobot',
      destination: getGuidesUrl("/octobot-interfaces/tradingview/using-a-webhook")
    },
    
  ]
}

module.exports = {octoBotInfo, octoBotInfoRedirects}
