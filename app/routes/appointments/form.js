import Ember from 'ember';
import ajax from 'ic-ajax';

export default Ember.Route.extend({
  actions: {
    save: function(){
      this.modelFor('new').save().then(function() {
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
