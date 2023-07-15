<script>
	import { desktopMenu } from '$lib/utils/store';

	import Header from './header.svelte';
	import Dock from './dock.svelte';
</script>

<section id="workspace">
	<header>
		<Header />
	</header>
	<main class:toggle={$desktopMenu}>
		<slot />
	</main>
	<footer>
		<Dock />
	</footer>
</section>

<style lang="less">
	section#workspace {
		display: grid;
		grid-template-rows: @header[height] auto;
		grid-template-columns: auto;
		grid-template-areas: 'h' 'b';

		height: 100vb;
		width: 100vi;

		background: @workspace[background];

		> header {
			grid-area: h;
		}
		> main {
			grid-area: b;

			background-image: url("../assets/images/bg.jpg");
			background-position: center;
			background-size: cover;

			transition: @global[transition];
			&.toggle {
				border-radius: @workspace[radius];

				transform: scale(@workspace[scale]);
				box-shadow: #00000080 0 0 3cm;
			}
		}
		> footer {
			position: absolute;

			bottom: 0;
			left: 50%;

			translate: -50%;
		}
	}
</style>
