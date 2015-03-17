import Ember from 'ember';
import IdentityMap from '../models/identity-map';

var identityMap = IdentityMap.create();

export default Ember.Service.extend({
  find: function(name,id){

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
    var adapter = this.container.lookup('adapter:' + type);
    var serialized = record.toJSON();

    return adapter.save(type, serialized).then(function(recordData) {
      var record = this.createRecord(type, recordData);
      identityMap.set(type, record.id, record);
      return identityMap.get(type, record.id);
    }.bind(this));
  },

  push: function(type, record) {
    return identityMap.set(type, record.id, record);
  },

  createRecord: function(type, properties){
    var klass = this.modelFor(type);
    return klass.create(properties);
  },

  modelFor: function(type) {
    return this.container.lookupFactory('model' + type);
  }
});
