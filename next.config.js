/** @type {import('next').NextConfig} */

const { getBaseUrl } = require("./lib/url")
const {octoBotInfo, octoBotInfoRedirects} = require('./configs/octobot.info.redirects')
const {exchangesOctoBotInfo, exchangesOctoBotInfoRedirects} = require('./configs/exchanges.octobot.info.redirects')
const {developerOctoBotInfo, developerOctoBotInfoRedirects} = require('./configs/developer.octobot.info.redirects')
const {proOctoBotInfo, proOctoBotInfoRedirects} = require('./configs/pro.octobot.info.redirects')
const {blogOctoBotOnline, blogOctoBotOnlineRedirects} = require('./configs/blog.octobot.online.redirects')

const getRedirects = () => {
  const redirectConfig = process.env.NEXT_PUBLIC_REDIRECT_CONFIG
  let redirects = []
  console.log(`Using ${redirectConfig} redirect config redirecting to ${getBaseUrl()}`)
  if (redirectConfig == octoBotInfo){
    redirects = octoBotInfoRedirects()
  } else if (redirectConfig == exchangesOctoBotInfo){
    redirects = exchangesOctoBotInfoRedirects()
  } else if (redirectConfig == developerOctoBotInfo){
    redirects = developerOctoBotInfoRedirects()
  } else if (redirectConfig == proOctoBotInfo){
    redirects = proOctoBotInfoRedirects()
  } else if (redirectConfig == blogOctoBotOnline){
    redirects = blogOctoBotOnlineRedirects()
  } else {
    console.log(`ERROR: no redirectConfig associated to ${redirectConfig}`)
  }
  return redirects.map((element) => {
    return {
      source: element.source,
      destination: element.destination,
      permanent: true,
    }
  })
}

const nextConfig = {
  redirects: getRedirects,
}

module.exports = nextConfig
