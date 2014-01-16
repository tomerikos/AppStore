var appStoreControllers = angular.module('appStoreControllers', []);

/* Controllers */ 

appStoreControllers.controller('AppDetailCtrl', ['$scope', '$routeParams', '$location','Apps',
function($scope, $routeParams, $location, Apps) {
  
  $scope.app = Apps.get({appId:$routeParams.appId});
    $scope.cancel = function() {$location.path('/applications')};

  }]);



appStoreControllers.controller('AppEditCtrl', ['$scope', '$routeParams', '$location','Apps',
  function($scope, $routeParams, $location, Apps) {

    $scope.app = Apps.get({appId:$routeParams.appId});

    $scope.SaveApp = function () {
      $scope.app.$update({appId:$scope.app.id});
      alert('Successfuly Updated!');
      $location.path('/applications');
    }
  }]);



appStoreControllers.controller('AppCreationCtrl', ['$scope', '$location','Apps',
  function($scope, $location, Apps){

    $scope.category="Social Networking";
    $scope.rating="5";
    $scope.nextId = Apps.query(function(){;
    localStorage.setItem("nextId",$scope.nextId.length);
    $scope.Id = localStorage.getItem("nextId");
});
 

    $scope.InsertApp = function() {

            var newApp = new Apps ({id:$scope.Id, name: $scope.name, rating: $scope.rating, category: $scope.category, description: $scope.description, logo: 'img/applications/mark.jpg', 
        developer: $scope.developer, compatibility: $scope.compatibility, website: $scope.website});

            newApp.$update({appId:$scope.Id});
            alert('Successfuly Inserted!');
            $location.path('/applications');
    }

  }]);


appStoreControllers.controller('AppListCtrl', ['$scope', 'Apps',
  function ($scope, Apps) {

$scope.total = Apps.query();
$scope.appOrder = 'name';

$scope.DeleteApp = function(appName, id) {
  var app = new Apps();
  var removeApp = confirm('Are you absolutely sure you want to delete ' + appName +'?');   
  if (removeApp)
    app.$delete({appId:id});
  }

  }]);