import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    createBookmark: function(){
      this.modelFor('new').save().then(function() {
        this.transitionTo('index');
      }.bind(this));
    }
  }
});
