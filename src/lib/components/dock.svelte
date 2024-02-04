<script>
	import absolutepps from '$lib/utils/config/apps.json';

	import Icon from '$lib/components/apps/icon.svelte';

	const favorites = absolutepps.apps.filter(({id}) => absolutepps.favorites.includes(id));
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
	<Icon id="main" index={-1} name={absolutepps['btn-listAll'].name} iconImg={absolutepps['btn-listAll'].icon} />
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
