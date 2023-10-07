/** @type {import('next').NextConfig} */

const {octoBotInfo, octoBotInfoRedirects} = require('./configs/octobot.info.redirects')
const {exchangesOctoBotInfo, exchangesOctoBotInfoRedirects} = require('./configs/exchanges.octobot.info.redirects')

const getRedirects = () => {
  const redirectConfig = process.env.NEXT_PUBLIC_REDIRECT_CONFIG
  let redirects = []
  console.log(`Using ${redirectConfig} redirect config`)
  if(redirectConfig == octoBotInfo){
    redirects = octoBotInfoRedirects()
  }
  else if(redirectConfig == exchangesOctoBotInfo){
    redirects = exchangesOctoBotInfoRedirects()
  }else {
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
