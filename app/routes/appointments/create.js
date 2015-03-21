import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) { console.log(params.time);},

  actions: {
    save: function(){
      this.modelFor('new').save().then(function() {
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
