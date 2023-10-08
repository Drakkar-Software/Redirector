const { getGuidesUrl } = require("../lib/url")

const developerOctoBotInfo = "developer.octobot.info"
const developerOctoBotInfoRedirects = () => {
  return [
    {
      source: '/',
      destination:  getGuidesUrl("developers"),
    },
    // installation
    {
      source: '/developer-installation',
      destination: getGuidesUrl('developers'),
    },
    {
      source: '/installation/developer-installation/tentacle-developer-installation',
      destination: getGuidesUrl('octobot-developers-environment/setup-your-environment'),
    },
    {
      source: '/installation/developer-installation/octobot-developer-installation',
      destination: getGuidesUrl('octobot-developers-environment/setup-your-environment'),
    },
    // octobot
    {
      source: '/octobot/octobot-architecture',
      destination: getGuidesUrl('octobot-developers-environment/architecture'),
    },
    {
      source: '/octobot/octobot-repositories',
      destination: getGuidesUrl('octobot-developers-environment/github-repositories'),
    },
    {
      source: '/octobot/contribution',
      destination: getGuidesUrl('developers'),
    },
    // tentacles
    {
      source: '/tentacles/customize-your-octobot',
      destination: getGuidesUrl('octobot-tentacles-development/customize-your-octobot'),
    },
    {
      source: '/tentacles/tentacle-package-development',
      destination: getGuidesUrl('octobot-tentacles-development/create-a-tentacle-package'),
    },
    {
      source: '/tentacles/tentacle-development',
      destination: getGuidesUrl('octobot-tentacles-development/create-a-tentacle'),
    },
    // coding
    {
      source: '/coding/developers-tips',
      destination: getGuidesUrl('octobot-developers-environment/tips'),
    },
    {
      source: '/coding/tests',
      destination: getGuidesUrl('octobot-developers-environment/running-tests'),
    },
    {
      source: '/coding/environment-variables',
      destination: getGuidesUrl('octobot-developers-environment/environment-variables'),
    },
  ]
}

module.exports = {developerOctoBotInfo, developerOctoBotInfoRedirects}
