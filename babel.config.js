module.exports = function(api){
  api.cache(true);
  return{
    presets: ['babel-preset-expo'],
    'plugins': [
      [
        'module:react-native-dotenv',{
          envName: 'GOOGLE_MAPS_KEY_GILBERT',
          moduleName: '@env',
          path: '.env',
        }
      ]
    ]
  }
}


/*
api.cache(true)
module.exports = {
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'GOOGLE_MAPS_KEY_GILBERT',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        blacklist: null, // DEPRECATED
        whitelist: null, // DEPRECATED
        safe: false,
        allowUndefined: true,
        verbose: false,
      },
    ],
  ],
};


/*module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module: react-native-dotenv',{
          'moduleName': '@env',
          'path':'.env',
          'blacklist': null,
          'whitelist' : null,
          'safe': false,
          'allowUndefined': true
        }
      ]
    ]
  };
};
*/