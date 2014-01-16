var appStoreDirectives = angular.module('appStoreDirectives', []);

appStoreDirectives.directive("header", function(){
	return{
		restrict: "E",
		templateUrl: "header.html"
	}
});

appStoreDirectives.directive("appTableRow", function(){
	return{
		restrict: "A",
		templateUrl: "apptablerow.html"
	}
});

appStoreDirectives.directive("rating", ['Apps', 
	function(Apps){
	return{
		restrict: "E",
		templateUrl: 'rating.html',
		link: function ($scope, $element, $attrs) {
			$scope.UpdateRating = function (rating){
				$scope.app.rating = rating;
				var app = new Apps($scope.app);
				app.$update({appId:$scope.app.id});
			}
		}
	}
}]);