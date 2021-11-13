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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-182893521-1',
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
