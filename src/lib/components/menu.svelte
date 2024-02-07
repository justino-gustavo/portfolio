<script>
	import { base } from '$app/paths';
	import { slide } from 'svelte/transition';

	import absoluteapps from '$lib/utils/config/apps.json';

	import Icon from './icon.svelte';

	let columns = 6,
		currentPage = 1,
		appsPerPage = columns * 3,
		totalPages = Math.ceil(absoluteapps.apps.length / appsPerPage);

	function paginate(array, page_size, page_number) {
		return array.slice((page_number - 1) * page_size, page_number * page_size);
	}
</script>

<ul id="menu" style="--app_colunms: {columns};" transition:slide>
	{#each paginate(absoluteapps.apps, appsPerPage, currentPage) as app, key}
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

<style lang="less">
	ul#menu {
		@iconMenuSize: 3cm;

		overflow: scroll;

		display: grid;
		// grid-template-columns: repeat(var(--app_colunms), minmax(@iconMenuSize, 1fr));
		grid-template-columns: repeat(auto-fill, minmax(@iconMenuSize, 1fr));
		grid-auto-rows: min-content;
		justify-items: center;
		gap: 6mm;

		bottom: @iconMenuSize;
		left: 0;
		right: 0;
		height: calc(71vh - @iconMenuSize);
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

		@media screen and (max-width: @checkPoint[tablet]) {
			padding: 3px;
		}
	}
</style>
