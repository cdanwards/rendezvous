import Ember from 'ember';
import IdentityMap from '../models/identity-map';

var identityMap = IdentityMap.create();

export default Ember.Service.extend({
  find: function(name, id){

    var cached = identityMap.get(name,id);
    if(cached) { return Ember.RSVP.resolve(cached); }

    //lookup the adapter for the name I'm passing you
    var adapter = this.container.lookup('adapter:' + name);
    return adapter.find(name, id).then(function(record) {
      identityMap.set(name, id, record);
      return record;
    });
  },

  findAll: function(name){
    //lookup the adapter for the name I'm passing you
    var adapter = this.container.lookup('adapter:' + name);
    return adapter.findAll(name).then(function(records) {
      identityMap.clear(name);
      records.forEach(function(r) {
        identityMap.set(name, r.id, r);
      });
      return identityMap.get(name);
    });

  },

  destroy: function(name, record) {
    var adapter = this.container.lookup('adapter:' + name);
    return adapter.destroy(name, record).then(function() {
      identityMap.remove(name, record);
    });
  },

  save: function(name, record) {
    var adapter = this.container.lookup('adapter:' + name);

    return adapter.save(name, record).then(function(recordData) {
      var record = this.createRecord(name, recordData);
      identityMap.set(name, record.id, record);
      return identityMap.get(name, record.id);
    }.bind(this));
  },

  push: function(name, record) {
    return identityMap.set(name, record.id, record);
  },

  createRecord: function(name, properties){
    var klass = this.modelFor(name);
    return klass.create(properties);
  },

  modelFor: function(name) {
    return this.container.lookupFactory('model' + name);
  }
});
