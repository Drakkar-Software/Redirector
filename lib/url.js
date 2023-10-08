const base = process.env.NEXT_PUBLIC_DESTINATION_URL || "https://www.octobot.cloud"

const getBaseUrl = (route) => {
  if(route && route.length){
    return `${base}/${route}`
  }
  return base
}

const getGuidesUrl = (route) => {
  if(route && route.length){
    return `${base}/guides/${route}`
  }
  return `${base}/guides`
}

const getBlogUrl = (slug) => {
  if(slug && slug.length){
    return `${base}/blog/${slug}`
  }
  return `${base}/blog`
}

module.exports = {getBaseUrl, getGuidesUrl, getBlogUrl}
