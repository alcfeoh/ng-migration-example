angular.module('myapp', [])
  .controller('sampleController', function($scope){

    $scope.name = "World";

    $scope.showSomethingSpecial = function(){
      alert("There you go, "+ $scope.name);
    }

  });
