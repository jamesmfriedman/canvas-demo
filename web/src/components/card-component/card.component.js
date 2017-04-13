angular.module('App.components').component('jfCard', {
	bindings: {},
	template: `
		<article>
			<figure>
				<jf-icon class="edit-icon">edit</jf-icon>
			</figure>
			<header>
				<h2 class="color-inherit">Sample Heading</h2>
				<h3 class="color-secondary">Sample Subheading</h3>
			</header>
			<div class="content">
				<p class="color-secondary">Sample Content</p>
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

	}
});