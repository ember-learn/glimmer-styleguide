/* jshint node: true */
const gitBranchName = process.env['TRAVIS_BRANCH'];

module.exports = function(deployTarget) {
  var ENV = {
    build: {}
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {

    ENV.assetPath = `https://glimmer-styleguide.global.ssl.fastly.net/glimmer-styleguide/${gitBranchName}`;
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
    ENV.s3 = {
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf,html}',
      accessKeyId: process.env['AWS_ACCESS_KEY'],
      secretAccessKey: process.env['AWS_SECRET_KEY'],
      bucket: 'api-docs.emberjs.com',
      prefix: `glimmer-styleguide/${gitBranchName}`,
      region: 'us-east-1'
    }
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
