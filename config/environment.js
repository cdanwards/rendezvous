/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'rendezvous',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {

      }
    },

    parseKeys: {
      applicationId: 'A5NCb7Pu9F3z1maktkM3s2BltwN7zBwb4NBx1K0e',
      restApi: 'XFzAuEJD6L2h1SrmDsslQesOuGuZxGmctYNNJOtp'
    },

    'simple-auth': {
      authorizer: 'authorizer:parse',
      crossOriginWhitelist:['https://api.parse.com'],
      routeAfterAuthentication: 'calendar',
    },
    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' fonts.googleapis.com",
      'font-src': "'self' *",
      'connect-src': "'self' https://api.parse.com",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' http://fonts.googleapis.com",
      'media-src': "'self'",
      'report-uri': "'self'"
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.baseURL = '/rendezvous/';
  }

  return ENV;
};
