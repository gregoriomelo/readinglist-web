var Book = DS.Model.extend({
  title: DS.attr('string'),
  isRead: DS.attr('boolean'),
  isStarred: DS.attr('boolean')
});

Book.reopenClass({
  FIXTURES: [
    {
      id: 1,
      title: "Pragmatic Programmer",
      isRead: true,
      isStarred: false
    },
    {
      id: 2,
      title: "Continuous Delivery",
      isRead: false,
      isStarred: false
    },
    {
      id: 3,
      title: "Databases and Agility",
      isRead: false,
      isStarred: false
    }
  ]
});

export default Book;
