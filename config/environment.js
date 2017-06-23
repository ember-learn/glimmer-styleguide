'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'glimmer-styleguide',
    environment: environment
  };

  if (environment == 'development') {
    ENV.assetPath = '';
  }

  if (environment == 'production') {
    ENV.assetPath = 'https://glimmer-styleguide.global.ssl.fastly.net/glimmer-styleguide/master';
  }

  return ENV;
};
