import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index');
  this.route('appointment');
  this.route('appointments', function() {
    this.route('create', { path: '/create/:time_id' });
    this.route('thanks');
  });
  this.route('calendar');
  this.route('login');
});

export default Router;
