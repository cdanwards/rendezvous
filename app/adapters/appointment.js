import ajax from 'ic-ajax';
import Ember from 'ember';



export default Ember.Object.extend({
  find: function(name, id){
  /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/appointment/" + id).then(function(appointment){
      appointment.id = appointment.objectId;
      delete appointment.objectId;
      return appointment;
    });
  },

  findAll: function(name) {
    /* jshint unused: false */
    var currentUser = this.get('session.currentUser.id');
    return ajax("https://api.parse.com/1/classes/appointment", {
      data: {
        include: "createdBy",
        where: JSON.stringify({
          "createdBy": {
            "__type": "Pointer",
            "className": "_User",
            "objectId": currentUser
          }
        })
      }
    }).then(function(response){
      return response.results.map(function(appointment) {
        appointment.id = appointment.objectId;
        delete appointment.objectId;
        return appointment;
      });
    });
  },

  findQuery: function(name, query) {
    /* jshint unused: false */
    return ajax("https://api.parse.com/1/classes/appointment", {
      data: Ember.$.param({
        where: JSON.stringify(query)
      })
    }).then(function(response){
      return response.results.map(function(appointment) {
        appointment.id = appointment.objectId;
        delete appointment.objectId;
        return appointment;
      });
    });
  },

  // destroy: function(name, record) {
  //   return ajax({
  //     url: "https://api.parse.com/1/classes/appointment/" + record.id,
  //     type: "DELETE"
  //   });
  // },

  // appointment: function(params) {
  //   console.log('this works');
  //   return ajax("https://api.parse.com/1/functions/appointment", {
  //     type: "POST",
  //     contentType: 'application/json',
  //     data: JSON.stringify(params)
  //   });
  // },

  save: function(name, record) {
    console.log('start');
    // console.log(JSON.stringify(record));
    if (record.id) {
      return ajax({
        url: "https://api.parse.com/1/classes/appointment" + record.id,
        type: "PUT",
        data: JSON.stringify(record.toJSON())
      }).then(function(response) {
        record.updatedAt = response.updatedAt;
        return record;
      });
    } else {
    return ajax({
      url: "https://api.parse.com/1/classes/appointment",
      type: "POST",
      data: JSON.stringify(record)
    }).then(function(response) {
      record.updatedAt = response.updatedAt;
      return record;
    }.bind(this));
    }
  }
});
