module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.js',
            '.jsx',
            '.json',
            '.ts',
            '.tsx',
          ],
          root: ['.'],
          alias: {
            '@': './',
            '@/component': './src/component',
            '@/screens': './src/screens',
            '@/utils': './src/utils',
            '@/Assets': './src/Assets',
            '@/feature': './src/feature',
            '@/src': './src',
            '@/navigation': './src/navigation',
          },
        },
      ],
      ['react-native-reanimated/plugin'],
    ],
  };
};
