import { test, moduleFor } from 'ember-qunit';

import Book from 'appkit/models/book';
import BooksRoute from 'appkit/routes/books';

var route, store;

moduleFor('route:books', "Unit - BooksRoute", {
  setup: function() {
    store = {};
    route = BooksRoute.create({
      store: store
    });
  },
  teardown: function() {}
});

test("it exists", function(){
  ok(route);
});

test("vai", function() {
  var expectedModel = {
      id: 1,
      title: "book",
      isRead: true,
      isStarred: true
  };

  store.find = function(type) {
    equal(type, "book");

    return expectedModel;
  };

  equal(route.model(), expectedModel);
});
