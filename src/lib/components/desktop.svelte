<script>
	import {desktopMenu} from "$lib/utils/store"

	import Navbar from './navbar/index.svelte';
</script>

<section class="_desktop">
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
	section._desktop {
		display: grid;
		grid-template-rows: @headerHeight calc(100% - @headerHeight);
		grid-template-areas: "header" "workspace";

		height: 100vh;
		width: 100vw;

		background-color: @desktopColor;

		> header {
			grid-area: header;

			height: 100%;
			width: 100%;
		}
		> main {
			grid-area: workspace;

			display: grid;
			grid-template-columns: repeat(20, 1fr);
			grid-template-rows: repeat(10, 1fr);
			gap: @defaultSpacing;

			padding: @defaultSpacing;

			background-image: url('$lib/images/bg.jpg');
			background-size: cover;
			background-position: center;
			background-clip: border-box;
		}
	}
</style>
