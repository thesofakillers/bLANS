module.exports = {
  siteMetadata: {
    siteUrl: "https://giuliostarace.com/bLANS",
    title: "bLANS: better LaTeX on ANS",
    description: "Convert sane LaTeX to ANS-flavoured LaTeX",
    image: "/images/logo.png",
  },
  pathPrefix: "/bLANS",
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
