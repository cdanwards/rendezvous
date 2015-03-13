import Ember from 'ember';

export function initialize(/* container, application */) {
  Ember.$.ajaxSetup ({
    headers: {
      "X-Parse-Application-Id": 'A5NCb7Pu9F3z1maktkM3s2BltwN7zBwb4NBx1K0e',
      "X-Parse-REST-API-Key": 'XFzAuEJD6L2h1SrmDsslQesOuGuZxGmctYNNJOtp'
    }
  });
}

export default {
  name: 'parse',
  initialize: initialize
};
