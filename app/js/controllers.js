var appStoreControllers = angular.module('appStoreControllers', []);

/* Controllers */ 

appStoreControllers.controller('AppDetailCtrl', ['$scope', '$routeParams', '$location','AppService',
function($scope, $routeParams, $location, AppService) {
  
  $scope.app = AppService.GetFromLocalStorage($routeParams.appName)[0]; 
    $scope.cancel = function() {$location.path('/applications')};

  }]);



appStoreControllers.controller('AppEditCtrl', ['$scope', '$routeParams', '$location', 'AppService',
  function($scope, $routeParams, $location, AppService) {

    $scope.app = AppService.GetFromLocalStorage($routeParams.appName)[0];

    var oldName = $routeParams.appName;

    $scope.SaveApp = function () {
      if (oldName == $scope.app.name)
      {
        AppService.SendToLocalStorage($routeParams.appName, $scope.app);
        alert('Successfuly Updated!');
        $location.path('/applications');
      }
      else
      {
        localStorage.removeItem(oldName);
        var AppVar = '[{"name":"' + $scope.app.name + '","rating":"' + $scope.app.rating + '","category":"' + $scope.app.category + '","description":"' + $scope.app.description + 
        '","logo":"' +$scope.app.logo + '","developer":"' + $scope.app.developer + '","compatibility":"' + $scope.app.compatibility + '","website":"' + $scope.app.website + '"}]';
        localStorage.setItem($scope.app.name, AppVar);
        alert('Successfuly Updated!');
        $location.path('/applications');
      }
    }

  }]);



appStoreControllers.controller('AppCreationCtrl', ['$scope', '$location',
  function($scope, $location){

    $scope.category="Social Networking";
    $scope.rating="5";
    $scope.InsertApp = function() {
    if (localStorage.getItem($scope.name) == null)
    {
      var AppVar = '[{"name":"' + $scope.name + '","rating":"' + $scope.rating + '","category":"' + $scope.category + '","description":"' + $scope.description + 
      '","logo":"img/applications/mark.jpg' + '","developer":"' + $scope.developer + '","compatibility":"' + $scope.compatibility + '","website":"' + $scope.website + '"}]';
      localStorage.setItem($scope.name, AppVar);
      alert('Successfuly Inserted!');
      $location.path('/applications');
    }
      else
        alert('Application already exists!');
    }
  }]);


appStoreControllers.controller('AppListCtrl', ['$scope', 'AppService',
  function ($scope,AppService) {

$scope.appOrder="name";
AppService.InitializeStorage();
AppService.CreataAppsCollection();
$scope.total = AppService.GetFromLocalStorage("AppsCollection");

$scope.RemoveFromLocalStorage = function(appName) {
  var removeApp = confirm('Are you absolutely sure you want to delete ' +appName +'?');   
  if (removeApp)
  localStorage.removeItem(appName);
  }

  }]);