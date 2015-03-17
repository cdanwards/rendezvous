import Ember from 'ember';

export default Ember.Controller.extend({
  model: function() {
    return{};
  },

  actions: {
    save: function() {
      this.get('model').save();
      }
    }
});
