var appStoreApp = angular.module('appStoreApp', [
  'ngRoute',
  'appStoreAnimations',
  'appStoreControllers',
  'appStoreServices'
]);

appStoreApp.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/applications', {templateUrl: 'partials/app-list.html', controller: 'AppListCtrl'});
        $routeProvider.when('/applications/:appId', {templateUrl: 'partials/app-detail.html', controller: 'AppDetailCtrl'});
        $routeProvider.when('/applications/:appId/edit', {templateUrl: 'partials/app-edit.html', controller: 'AppEditCtrl'});
        $routeProvider.when('/create', {templateUrl: 'partials/new-app.html', controller: 'AppCreationCtrl'});
        $routeProvider.otherwise({redirectTo: '/applications'});
    }]);