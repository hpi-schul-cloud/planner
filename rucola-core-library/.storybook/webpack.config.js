module.exports = baseConfig => {
  baseConfig.module.rules = [
    {
      test: /(\.jsx|\.js)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    }
  ];
  return baseConfig;
};
