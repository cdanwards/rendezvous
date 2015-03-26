import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.createRecord('appointment', {
      date: params.date,
      time: params.time,
      createdBy: this.get('session.currentUser')
    });
  },
});
