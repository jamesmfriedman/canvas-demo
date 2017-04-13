angular.module('App.components').component('jfCard', {
	bindings: {},
	template: `
		<article>
			<figure>
				<jf-icon class="edit-icon sm">edit</jf-icon>
			</figure>
			<header>
				<h2>Sample Heading</h2>
				<h3 class="color-secondary">Sample Subheading</h3>
			</header>
			<div class="content color-secondary">
				<jf-icon class="arrow-icon">arrow_drop_down</jf-icon>
				<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed q.</p>
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