import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('appointment', { path: '/appointment' });
  this.route('appointments', function() {
    this.route('form');
    this.route('thanks');
  });
});

export default Router;
