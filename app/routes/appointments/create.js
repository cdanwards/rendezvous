import Ember from 'ember';

export default Ember.Route.extend({
  // model: 
  // // function() {
  // //   return this.store.createRecord('appointment', {
  // //     createdBy: this.get('session.currentUser')
  // //   });
  // },

  actions: {
    save: function(){
      this.modelFor('new').save().then(function() {
        this.transitionTo('appointments');
      }.bind(this));
    }
  }
});
