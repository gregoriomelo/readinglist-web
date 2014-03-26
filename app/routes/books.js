console.log('books.js maldito');
export default Ember.Route.extend({
  model: function() {
    return ['Pragmatic Programmer', 'TDD by Example', 'The universe in a nutshell'];
  }
});
