module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        paths: [
          {
            rootPathPrefix: "~",
            rootPathSuffix: "src",
          },
          {
            rootPathPrefix: "assets",
            rootPathSuffix: "assets",
          },
        ],
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        "babel-plugin-root-import",
        {
          paths: [
            {
              rootPathPrefix: "~",
              rootPathSuffix: "src",
            },
            {
              rootPathPrefix: "assets",
              rootPathSuffix: "assets",
            },
          ],
        },
      ],
    },
  },
};
