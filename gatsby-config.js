const path = require(`path`);

module.exports = {
  siteMetadata: {
    siteTitle: `Dark Lineage Owen Wiki`,
    defaultTitle: `Dark Lineage Owen Wiki`,
    siteTitleShort: `DLO Wiki`,
    siteDescription: `A comprehensive wiki to the Warcraft III Custom RPG, Dark Lineage Owen`,
    siteUrl: `https://darklineagewiki.com`,
    siteAuthor: `@Werfert`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#444444`,
    basePath: `/`,
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
        repositoryUrl: `https://github.com/rocketseat/gatsby-themes`,
        baseDir: `examples/gatsby-theme-docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `YOUR_ANALYTICS_ID`,
    //   },
    // },
    `gatsby-plugin-remove-trailing-slashes`,
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `./src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        // provide the path to your image folder here:
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
};
