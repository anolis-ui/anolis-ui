module.exports = {
  siteMetadata: {
    title: "Anolis Sketches"
  },
  plugins: [
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        // eslint-disable-next-line node/no-path-concat
        path: `${__dirname}/src/components`,
        ignore: {
          patterns: ["**/!(index.sketch.tsx)"]
        }
      }
    },
    "gatsby-disable-404"
  ]
};
