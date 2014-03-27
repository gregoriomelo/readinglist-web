import { test, moduleFor, moduleForModel } from 'ember-qunit';
import Book from 'appkit/models/book';

moduleForModel('book', 'Book model');

test("Book is a valid ember-data model", function() {
  var book = this.subject({title: "TDD by Example", isRead: false});
  ok(book);
  ok(book instanceof DS.Model);
  ok(book instanceof Book);
});
