module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.daseindhoven.nl',
    siteTitle: {
      long: "De Ambitieuze Student Eindhoven",
      short: "DAS Eindhoven",
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        accessToken: 'TMEMBwXfCJByaZsQruHGxdDFQA42hlwEiYFasHIeZsA',
        spaceId: 'pz1dz75yzlrc',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-image',
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-1LS1G3EZ04", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
  ],
};