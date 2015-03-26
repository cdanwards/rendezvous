import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    destroy: function(appointment) {
      appointment.destroy();
    },
  }
});
