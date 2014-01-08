var appStoreControllers = angular.module('appStoreControllers', []);

/* Some local storage functions | should try to put them inside a custom service */

    function SendToLocalStorage (ApplicationName, App)
    {
      var jsonApp = angular.toJson(App);
      
     if (jsonApp != 'null')
     {
        jsonApp = '['+jsonApp+']';
        localStorage.setItem(ApplicationName, jsonApp);
     }
        
     else
        alert("Invalid JSON");
    }

    function GetFromLocalStorage(ApplicationName)
    {
      return JSON.parse(localStorage.getItem(ApplicationName));
    }


        function InitializeStorage()
    {
          if (localStorage.length == 0)
          {
            localStorage.setItem("WhatsApp",'[{"name":"WhatsApp", "category":"Social Networking", "description": "Some Description", "logo": "img/applications/whatsapp.jpg", "developer":"EA Sports", "whatsnew":"nothing", "compatibility":"asdasdadasdasdasdasdasdsad", "website":"http://www.whatsapp.com", "rating":"5"}]');
            localStorage.setItem("Waze",'[{"name":"Waze", "category":"Navigation", "description": "Blahblahblah", "logo": "img/applications/waze.jpg", "developer":"some developer", "whatsnew":"asdasdasdasd", "compatibility":"sdfsdfsdfxc", "website": "http://www.waze.com", "rating":"1"}]');
            localStorage.setItem("Instagram",'[{"name":"Instagram", "category":"Photography", "description": "BDFSDfkldsjflksjdflkjsadsasdasd", "logo": "img/applications/instagram.jpg", "developer":"No one", "whatsnew":"some bug fixes", "compatibility":"Shine on you crazy diamond", "website":"http://www.instagram.com", "rating":"3"}]');
          }
    }

/* Controllers */ 

appStoreControllers.controller('AppDetailCtrl', ['$scope', '$routeParams', '$location',
function($scope, $routeParams, $location) {
    
  $scope.app = GetFromLocalStorage($routeParams.appName)[0]; 
    $scope.cancel = function() {$location.path('/applications')};

  }]);



appStoreControllers.controller('AppEditCtrl', ['$scope', '$routeParams', '$location',
  function($scope, $routeParams, $location) {

    $scope.app = GetFromLocalStorage($routeParams.appName)[0];

    var oldName = $routeParams.appName;

    $scope.SaveApp = function () {
      if (oldName == $scope.app.name)
      {
        SendToLocalStorage($routeParams.appName, $scope.app);
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


appStoreControllers.controller('AppListCtrl', ['$scope',
  function ($scope) {

$scope.appOrder="name";
InitializeStorage();
localStorage.setItem("AppsCollection", "");          

    var i, jsn;

    for (i=0; i<localStorage.length; i++)   
    {
      if (i!=localStorage.length-1)
        jsn +=(localStorage.getItem(localStorage.key(i)).replace(']',',').replace('[',''));
      else
        jsn += (localStorage.getItem(localStorage.key(i)).replace(']','').replace('[',''));
}

    jsn = ('['+jsn.replace('undefined','')+']').replace(',]',']');
    localStorage.setItem("AppsCollection",jsn);
    $scope.total=GetFromLocalStorage("AppsCollection");

      $scope.RemoveFromLocalStorage = function(appName) {
        var removeApp = confirm('Are you absolutely sure you want to delete ' +appName +'?');   
        if (removeApp)
          localStorage.removeItem(appName);
  }

  }]);