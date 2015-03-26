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
    var options = {
    weekday: "long", year: "numeric", month: "short",
    day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    return dates.map(function(param){
      var date = param.toLocaleTimeString("en-us", options);
      return {
        display: date.substring(0, date.length - 9),
        slug: dateSlug(param)
      };
    });
  }.property('dateRange')
});
