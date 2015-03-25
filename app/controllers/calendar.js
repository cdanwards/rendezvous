import Ember from 'ember';

export default Ember.ArrayController.extend({
  dateRange: function(){
  var today = new Date();
    return Array.apply(null, {length: 7}).map(Number.call, Number).map(function(i){
      var date = new Date(today.valueOf());
      date.setDate(date.getDate() + i);
      return date.toString();
    });
  }.property()
});
