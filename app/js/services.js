'use strict';

/* Services */

var appStoreServices = angular.module('appStoreServices', ['ngResource']);
 
appStoreServices.factory('Apps', ['$resource',
  function($resource){
    return $resource('https://tomer.firebaseio.com//:appId.json', {}, 
    {
      query: {method:'GET', params:{appId:''}, isArray:true},
      update: {method: 'PUT', params:{appId:''}}
    });
  }]);