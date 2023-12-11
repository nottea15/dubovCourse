module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['./src'], // you configuration might be different
          alias: {
            // add your aliases here
            '@components': './src/components',
            '@assets': './src/assets',
            '@constants': './src/constants',
            '@utils': './src/utils',
          },
        },
      ],
    ],
  };
};
