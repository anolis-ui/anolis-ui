module.exports = {
  experimental: {
    optimizeFonts: true
  },
  webpack (config, { dir, defaultLoaders }) {
    config.resolve.extensions.push(".svg");
    config.module.rules.push(svgLoaderRule(defaultLoaders, dir));

    return config;
  }
};

const svgLoaderRule = (defaultLoaders, dir) => ({
  test: /\.svg$/,
  include: [dir],
  exclude: /node_modules/,
  use: [
    defaultLoaders.babel,
    {
      loader: "react-svg-loader",
      options: {
        jsx: true
      }
    }
  ]
});
