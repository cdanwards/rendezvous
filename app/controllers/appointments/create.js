import Ember from 'ember';

export default Ember.Controller.extend({
  model: {},

  actions: {
    save: function() {
      this.store.save('appointment', this.get('model'));
      // console.log(this.store.get(session.currentUser.lastName));
    }
  }
});
