var app = angular.module('App', [
	'ngAnimate',
	'ngSanitize',
	'ngResource',

	'App.common',
	'App.directives',
	'App.components'
]);

app.config(function($locationProvider, $resourceProvider){
	$locationProvider.html5Mode(true);	
	$resourceProvider.defaults.stripTrailingSlashes = false;
});

app.run(function($rootScope){
	$rootScope.hello = 'Hello World!';
});

angular.element(document).ready(function() {
	const initInjector = angular.injector(['ng']);
	const $http = initInjector.get('$http');

	$http.post('http://canvas-api.herokuapp.com/api/v1/tokens').then(resp => {
		app.constant('CANVAS_API_TOKEN', resp.data.token);
		angular.bootstrap(document, ['App']);
	});
});