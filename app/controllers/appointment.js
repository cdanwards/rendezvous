import Ember from 'ember';

export default Ember.Controller.extend({
  model: function() {
    return{};
  },

  actions: {
    save: function() {
      var self = this;
      this.store.save('appointment', this.modelFor('new')).then(function(){
        self.transitionTo('index');
      });
    }
  }
});
