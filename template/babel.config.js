module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@config': './src/config',
          '@data': './src/data',
          '@domain': './src/domain',
          '@infrastructure': './src/infrastructure',
          '@ui': './src/ui',
        },
      },
    ],
  ],
};
