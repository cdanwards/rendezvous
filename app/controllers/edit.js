import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveIndex: function(){
      this.get('session.currentUser').save();
      this.transitionToRoute('appointments');
    }
  }
});
