var appStoreApp = angular.module('appStoreApp', [
  'ngRoute',
  'appStoreControllers'
]);

appStoreApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/applications', {templateUrl: 'partials/app-list.html', controller: 'AppListCtrl'});
        $routeProvider.when('/applications/:appName', {templateUrl: 'partials/app-detail.html', controller: 'AppDetailCtrl'});
        $routeProvider.when('/applications/:appName/edit', {templateUrl: 'partials/app-edit.html', controller: 'AppEditCtrl'});
        $routeProvider.otherwise({redirectTo: '/applications'});
    }]);