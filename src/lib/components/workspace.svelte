<script>
	import { desktopMenu, showApps } from '$lib/utils/store';
	import { slide, fade } from 'svelte/transition';

	import Header from './header.svelte';
	import Desktop from './desktop.svelte';
	import Dock from './dock.svelte';
	import Menu from './menu.svelte';

	export let header = true,
		desktop = false;
</script>

<section id="workspace">
	{#if header}
		<header>
			<Header />
		</header>
	{/if}

	<main>
		{#if desktop}
			<menu class:toggle={$desktopMenu} class:show-apps={$showApps && $desktopMenu}>
				<Desktop />
			</menu>
			{#if $showApps}
				<nav transition:slide>
					<Menu />
				</nav>
			{/if}
		{:else}
			<slot />
		{/if}
	</main>

	{#if $desktopMenu}
		<footer transition:slide>
			<Dock />
		</footer>
	{/if}
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
			z-index: @screenIndex[priority-1];

			grid-area: h;
		}
		> main {
			z-index: @screenIndex[priority-3];

			grid-area: b;

			> menu {
				height: 100%;
				width: 100%;

				background-image: url('../assets/images/bg.avif');
				background-position: center;
				background-size: cover;

				transition: ease 400ms;

				&.toggle {
					border-radius: @workspace[radius];

					transform: scale(@workspace[scale]);
					translate: 0 -20mm;
					box-shadow: #00000080 0 0 3cm;
				}
				&.show-apps {
					transform: scale(20%);
					translate: 0 -36%;
				}
			}

			> nav {
				z-index: -1;

				position: absolute;
				bottom: 0;
				left: 0;

				width: 100%;
				height: 71vh;
			}
		}

		> footer {
			z-index: @screenIndex[priority-2];

			position: absolute;

			bottom: 0;
			left: 50%;

			translate: -50%;
		}
	}
</style>
