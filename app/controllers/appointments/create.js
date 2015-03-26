import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    save: function() {
      this.get('model').save().then(function(){
        this.transitionToRoute('appointments.thanks');
      }.bind(this));
    }
  }
});
