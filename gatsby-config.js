/** @type {import('gatsby').GatsbyConfig} */
module.exports = {
  siteMetadata: {
    title: `#StandWithUkraine`,
    siteUrl: `https://ukraine.uglyunicorn.ca`
  },
  plugins: [{
    resolve: 'gatsby-source-datocms',
    options: {
      "apiToken": "3de0bef702645c3e839131503fb224"
    }
  }, "gatsby-plugin-sass", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  },
  `gatsby-plugin-sass`,
  `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `#StandWithUkraine`,
      short_name: `#StandWithUkraine`,
      start_url: `/`,
      icon: `src/images/icon.png`,
      icon_options: {
        // For all the options available,
        // please see the section "Additional Resources" below.
        purpose: `any maskable`,
      },
    },
  }]
};
