import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return Ember.$.getJSON('/appointments/'+params.time_id);
  },

  actions: {
    save: function(){
      this.modelFor('new').save().then(function() {
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
