var App;

module('Acceptances - Index', {
  setup: function(){
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test('index renders', function(){
  expect(5);

  visit('/').then(function(){
    var title = find('header>h1');
    var list = find('ul#readinglist li');

    equal(title.text(), 'Reading List');

    ok(list.text().indexOf('Pragmatic Programmer') >= 0);
    ok(list.text().indexOf('Continuous Delivery') >= 0);
    ok(list.text().indexOf('Databases and Agility') >= 0);
    equal(list.length, 3);
  });
});
