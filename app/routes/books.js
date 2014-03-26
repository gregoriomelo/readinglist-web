import Book from 'appkit/models/book';

export default Ember.Route.extend({
  model: function() {
    return Book.FIXTURES;
  }
});
