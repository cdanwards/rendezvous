import Ember from 'ember';

export default Ember.Object.extend({
  destroy: function(){
    return this.store.destroy('appointment', this);
  },

  save: function(){
    return this.store.save('appointment', this);
  }

});
