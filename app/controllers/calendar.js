import Ember from 'ember';

function dateSlug(date) {
  return date.getUTCFullYear() + "-" + ("0" + (date.getUTCMonth() + 1)).slice(-2) + "-" + ("0" + date.getUTCDate()).slice(-2);
}

export default Ember.ArrayController.extend({
  dateRange: function(){
    var today = new Date();
    return Array.apply(null, {length: 7}).map(Number.call, Number).map(function(i){
      var date = new Date(today.valueOf());
      date.setDate(date.getDate() + i);
      return date;
    });
  }.property(),

  displayDates: function() {
    var dates = this.get('dateRange');
    return dates.map(function(date){
      return {
        display: date.toString(),
        slug: dateSlug(date)
      }
    });
  }.property('dateRange')
});
