<script>
	import Navbar from './navbar/index.svelte';
</script>

<section class="_workspace">
	<header>
		<slot name="header">
			<Navbar />
		</slot>
	</header>
	<main>
		<slot />
	</main>
</section>

<style lang="less">
	section._workspace {
		display: grid;
		grid-template-rows: @headerHeight calc(100% - @headerHeight);
		grid-template-areas: 'header' 'workspace';

		height: 100vh;
		width: 100vw;

		background-color: @workspaceColor;

		> header {
			grid-area: header;

			height: 100%;
			width: inherit;
		}
		> main {
			grid-area: workspace;

			height: 100%;
			width: inherit;
		}
	}
</style>
