import Model from 'ember-magic-man/model';

export default Model.extend({
  toJSON: function(){
    var data = this._super();
    var creatorId = this.get('createdBy.id');
    if(creatorId) {
      data.set('createdBy', {
        __type: 'Pointer',
        className: '_User',
        objectId: creatorId
      });
    }
    return data;
  }
});
