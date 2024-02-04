<script>
	import { showApps } from '$lib/utils/store';

	import absoluteapps from '$lib/utils/config/apps.json';

	import Icon from '$lib/components/icon.svelte';

	const favorites = absoluteapps.apps.filter(({ id }) => absoluteapps.favorites.includes(id));
</script>

<nav id="nav">
	<div id="favorites">
		{#each favorites as app, key}
			<Icon
				id={app.id}
				index={key}
				name={app.name}
				bgColor={app.color}
				iconImg={app.icon}
				iconClip={app['icon-clip']}
			/>
		{/each}
	</div>
	<hr />
	<Icon
		id="main"
		index={-1}
		name={absoluteapps['btn-menu'].name}
		iconImg={absoluteapps['btn-menu'].icon}
		action={() => {
			$showApps = !$showApps;
		}}
	/>
</nav>

<style lang="less">
	nav#nav {
		display: inline-flex;

		margin-bottom: 3mm;
		border-radius: 6mm;
		padding: 4.2mm;

		background-color: hsla(0, 0%, 27%, 0.36);

		> div#favorites {
			display: contents;
		}

		> hr {
			margin-inline: 6mm;
			height: auto;
			width: 0.3mm;
			background-color: rgba(255, 255, 255, 0.42);
		}
	}
</style>
