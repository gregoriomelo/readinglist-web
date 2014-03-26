var Book = DS.Model.extend({
  title: DS.attr('string'),
  isRead: DS.attr('boolean'),
  isStarred: DS.attr('boolean')
});

export default Book;
