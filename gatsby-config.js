module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        // find this on manage.sanity.io/projects
        projectId: 'm4hglkf5',
      // probably 'production' or 'development'
        dataset: 'production',
      // create this on the project page on manage.sanity.io unter Settings > API
        token: "skuq4Dd0S9J8gHvDoi1SoEG4skZllZi0h98BhTxJJ2YbhaPDRZPLR46UqJF73XMzR73VUnelkrQ3DaSGiBuGYTg5TE5ApwwGGz8uYlZlbqI4GsaGOeT2W9kakWKHRL7wXKSkwJu6w39g9QDeTUBAhxLoZczkaSp3ycF3lv1e5QBDtqbis3MO",
        watchMode: true,
        overlayDrafts: true,
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
