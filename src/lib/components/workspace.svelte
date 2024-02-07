<script>
	import { base } from '$app/paths';
	import { slide } from 'svelte/transition';

	import { desktopMenu, showApps } from '$lib/utils/store';
	import absoluteapps from '$lib/utils/config/apps.json';

	import Dock from './dock.svelte';
	import Header from './header.svelte';
	import Icon from './icon.svelte';

	export let header = true,
		desktop = false;
</script>

<section id="workspace">
	{#if header}
		<header>
			<Header />
		</header>
	{/if}

	<main class:toggle={$desktopMenu} class:show-apps={$showApps && $desktopMenu} class:desktop>
		<slot />
	</main>

	{#if $showApps && $desktopMenu}
		<ul transition:slide>
			{#each absoluteapps.apps as app, key}
				<li {key}>
					<Icon
						id={app.id}
						name={app.name}
						bgColor={app.color}
						iconImg={app.icon.replace('${path}', base)}
						iconClip={app['icon-clip']}
						size="1.5cm"
					/>
					<span>{app.name}</span>
				</li>
			{/each}
		</ul>
	{/if}

	{#if desktop}
		<footer>
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
			z-index: @screenIndex[priority-2];

			grid-area: b;

			&.desktop {
				background-image: url('../assets/images/bg.avif');
				background-position: center;
				background-size: cover;

				transition: @global[transition];
				&.toggle,
				&.show-apps {
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
		}
		> ul {
			@iconMenuSize: 3cm;

			position: absolute;

			display: grid;
			grid-template-columns: repeat(auto-fill, minmax(@iconMenuSize, 1fr));
			grid-auto-rows: min-content;
			justify-items: center;
			gap: 6mm;

			bottom: 0;
			left: 0;
			right: 0;
			height: 71vh;
			padding: 3mm 3cm;

			list-style: none;

			> li {
				display: inline-flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				width: @iconMenuSize;
				height: @iconMenuSize;
				border-radius: 6mm;

				> span {
					margin-top: 3mm;

					color: white;
				}

				&:hover {
					background-color: #70707023;
				}
			}
		}
		> footer {
			z-index: @screenIndex[priority-3];

			position: absolute;

			bottom: 0;
			left: 50%;

			translate: -50%;
		}
	}
</style>
