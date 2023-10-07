/** @type {import('next').NextConfig} */


const exchangesOctoBotInfo = "exchanges.octobot.info"

const exchangesOctoBotInfoRedirects = () => {

  return [
    // legacy website redirects
    {
      source: '/',
      destination: '/',
    },
    {
      source: '/community',
      destination: '/#community',
    },
    {
      source: '/local_installation',
      destination: `/guides/octobot-installation/local`,
    },
    {
      source: '/python_installation',
      destination: `/guides/octobot-installation/with-python-only`,
    },
  ]
}

module.exports = {exchangesOctoBotInfo, exchangesOctoBotInfoRedirects}
