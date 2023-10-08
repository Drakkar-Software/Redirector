const { getBlogUrl } = require("../lib/url")

const blogOctoBotOnline = "blog.octobot.online"
const blogOctoBotOnlineRedirects = () => {
  return [
    {
      source: '/',
      destination: getBlogUrl(""),
    },
    // articles
    {
      source: '/:slug*',
      destination: getBlogUrl(":slug*"),
    },
  ]
}

module.exports = {blogOctoBotOnline, blogOctoBotOnlineRedirects}
