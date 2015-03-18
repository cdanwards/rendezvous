import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');
  this.route('appointment');
  this.route('appointments', function() {
    this.route('form');
    this.route('thanks');
  });
});

export default Router;
