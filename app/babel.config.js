module.exports = function (api) {
  api.cache(false);

  const presets = ["babel-preset-expo"];
  const plugins = [
    "module:react-native-dotenv",
    "@babel/plugin-proposal-export-namespace-from",
    "react-native-reanimated/plugin",
  ];

  return {
    presets,
    plugins,
  };
};
