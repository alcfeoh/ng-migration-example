angular.module('myapp', [])
  .component('sample', {
    template: "Hello {{$ctrl.name}}! <br> <button ng-click='$ctrl.showSomethingSpecial()'>Show me something</button>",
    controller: function() {
      this.name = "World";
      this.showSomethingSpecial = function () {
        alert("There you go, " + this.name);
      }
    }
  });
