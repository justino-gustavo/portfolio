<script>
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

	<main class:toggle={$desktopMenu} class:show-apps={$showApps} class:desktop>
		<slot />
	</main>

	{#if $showApps}
		<ul>
			{#each absoluteapps.apps as app, key}
				<ul {key}>
					<Icon
						id={app.id}
						index={key}
						name={app.name}
						bgColor={app.color}
						iconImg={app.icon}
						iconClip={app['icon-clip']}
					/>
				</ul>
			{/each}
		</ul>
	{/if}

	{#if desktop && !$showApps}
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
				&.toggle, &.show-apps {
					border-radius: @workspace[radius];

					transform: scale(@workspace[scale]) translate(0, -20mm);
					box-shadow: #00000080 0 0 3cm;
				}
				&.show-apps {
					transform: scale(0.2) translate(0, -20mm);

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
