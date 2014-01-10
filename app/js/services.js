'use strict';

/* Services */

var appStoreServices = angular.module('appStoreServices', []);
 
appStoreServices.factory('AppService', [
  function(){
    return {
  	  SendToLocalStorage: function(ApplicationName, App) {
       var jsonApp = angular.toJson(App);
      
     if (jsonApp != 'null')
     {
        jsonApp = '['+jsonApp+']';
        localStorage.setItem(ApplicationName, jsonApp);
     }
        
     else
        alert("Invalid JSON");
    },

	  GetFromLocalStorage: function(AppName){
			return JSON.parse(localStorage.getItem(AppName));
		},

	  InitializeStorage: function(){
	          if (localStorage.length == 0)
          {
            localStorage.setItem("WhatsApp",'[{"name":"WhatsApp", "category":"Social Networking", "description": "Some Description", "logo": "img/applications/whatsapp.jpg", "developer":"EA Sports", "compatibility":"asdasdadasdasdasdasdasdsad", "website":"http://www.whatsapp.com", "rating":"5"}]');
            localStorage.setItem("Waze",'[{"name":"Waze", "category":"Navigation", "description": "Blahblahblah", "logo": "img/applications/waze.jpg", "developer":"some developer", "compatibility":"sdfsdfsdfxc", "website": "http://www.waze.com", "rating":"1"}]');
            localStorage.setItem("Instagram",'[{"name":"Instagram", "category":"Photography", "description": "BDFSDfkldsjflksjdflkjsadsasdasd", "logo": "img/applications/instagram.jpg", "developer":"No one", "compatibility":"Shine on you crazy diamond", "website":"http://www.instagram.com", "rating":"3"}]');
          }		
		},

		CreataAppsCollection: function(){
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
		}
 };
}]);