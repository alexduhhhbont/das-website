/* Determine if contentful is in preview mode by checking local environment variables and also ones set by Netlify
 * https://docs.netlify.com/configure-builds/environment-variables/#build-metadata
 */
const contentfulPreviewMode =
  process.env.GATSBY_CONTENTFUL_PREVIEW === "true" ||
  process.env.CONTEXT === "branch-deploy" ||
  process.env.CONTEXT === "deploy-preview"

// Returns the right Contentful API key depending on preview mode activation
function getContentfulApiKey() {
  const normalApiKey = process.env.CONTENTFUL_API_KEY
  const previewApiKey = process.env.CONTENTFUL_API_KEY_PREVIEW

  return contentfulPreviewMode ? previewApiKey : normalApiKey
}

// Returns the right Contentful host depending on preview mode activation
function getContentfulHost() {
  const normalHost = "cdn.contentful.com"
  const previewHost = "preview.contentful.com"

  return contentfulPreviewMode ? previewHost : normalHost
}

function getContentfulEnvironment() {
  return process.env.CONTENTFUL_ENVIRONMENT || "master"
}

module.exports = {
  resolve: "gatsby-source-contentful",
  options: {
    spaceId: "pz1dz75yzlrc",
    accessToken: getContentfulApiKey(),
    host: getContentfulHost(),
    environment: getContentfulEnvironment(),
  },
}
