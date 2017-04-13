angular.module('App.components').component('jfApp', {
	bindings: {},
	template: require('./app.component.html'), 
	controllerAs: 'vm',
	controller: function(canvasApi) {
		const vm = this;
		vm.courses = [];

		vm.$onInit = ngOnInit;

		function ngOnInit() {
			canvasApi.Course.query(resp => {vm.courses = resp; console.log(vm.courses)});
		}

	}
});