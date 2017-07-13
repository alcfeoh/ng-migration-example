angular.module('myapp')
  .factory('sampleService', function(){
    return {
      showSomethingSpecial: function (name) {
        alert("There you go, " + name);
      }
    }
  });
