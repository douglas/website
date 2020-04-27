module.exports = {
  siteMetadata: {
    title: 'fav.sh',
    description: 'Fav bookmark manager',
    author: 'Sunny Golovine',
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
  ],
}
