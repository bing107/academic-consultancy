require("dotenv").config({
  path: `.env`,
})

module.exports = {
    siteMetadata: {
      title: `EU Academic Consultancy`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.SPACE_ID,
          accessToken: process.env.ACCESS_TOKEN,
        },
      },
      `gatsby-plugin-image`
    ]
}