angular.module('myapp', [])
 .component('home', {
  template: '<h1>Angular JS component here</h1><p>Hello, {{ $ctrl.user.name }} !</p>',
  controller: function() {
    this.user = {name: 'world'};
  }
});
