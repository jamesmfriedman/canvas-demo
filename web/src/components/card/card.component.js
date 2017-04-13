angular.module('App.components').component('jfCard', {
	bindings: {
		course: '<'
	},
	template: `
		<article>
			<figure>
				<div class="cover-img" ng-style="{'background-image': 'url(' + vm.course.imageUrl + ')'}">
					<img ng-src="{{ vm.course.imageUrl }}" alt="Course Image"/>
				</div>
				<jf-icon class="edit-icon sm">edit</jf-icon>
			</figure>
			<header>
				<h2>{{ vm.course.name}} </h2>
				<h3 class="color-secondary">{{ vm.course.code }}</h3>
			</header>
			<div class="content color-secondary">
				<jf-icon class="arrow-icon">arrow_drop_down</jf-icon>
				<p>{{ vm.course.description }}</p>
			</div>
			<footer>
				<jf-icon class="sm">insert_drive_file</jf-icon>
				<jf-icon class="sm">rss_feed</jf-icon>
				<jf-icon class="sm">chat_bubble</jf-icon>
				<jf-icon class="sm">folder</jf-icon>
			</footer>
		</article>
	`, 
	controllerAs: 'vm',
	controller: function() {
		const vm = this;
		vm.$onInit = ngOnInit;

		function ngOnInit() {
			// Monkey patch this until we get a real image url
			vm.course.imageUrl = 'img/jurassic-park.jpg';
			
		}
	}
});