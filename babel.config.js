module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: 'react-native-dotenv',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        [
          'babel-plugin-root-import',
          {
            rootPathPrefix: '~',
            rootPathSuffix: 'src',
          },
        ],
      ],
    },
  },
};
