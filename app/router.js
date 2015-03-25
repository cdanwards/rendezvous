import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('appointment');
  this.route('appointments', function() {
    this.route('create', { path: '/create/:date/:time' });
    this.route('thanks');
  });
  this.route('calendar');
  this.route('new', { path: '/' });
  this.route('login');
  this.route('edit');
});

export default Router;
