/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: "Noman Ahmed",
    description: "A super-fast site using GatsbyJS",
    author: "Noman Ahmed",
    twitterUsername: "@TheNomanAhmed",
    image: "/yellow-metal-design-decoration.jpg",
    siteUrl: "https://barcadia.netlify.com",
  },
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "svftya3r2n46",
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: "JgGaApKoWAZ-UYqVNv0JdeoeEr4QOIsak5_pTQP2SKg",
      },
    },
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        host: "https://barcadia.netlify.com",
        sitemap: "https://barcadia.netlify.com/sitemap.xml",
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-playground`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-transition-link`,
  ],
}
