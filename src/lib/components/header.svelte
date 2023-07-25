<script>
	import { desktopMenu, github } from '$lib/utils/store';

	import Dropdown from './header/dropdown.svelte';
</script>

<nav id="header">
	<Dropdown bind:toggle={$desktopMenu} blur={false}>
		<i class="bi-circle" />
	</Dropdown>
	<Dropdown>
		{$github.profile.name}
		<div slot="content" id="center-menu">
			
		</div>
	</Dropdown>
	<Dropdown align="left">
		<i class="bi-circle-half" />
		<i class="bi-share" style="margin: 0 2mm;" />
		<i class="bi-gear" />
		<div slot="content" id="right-menu">

		</div>
	</Dropdown>
</nav>

<style lang="less">
	nav#header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		height: 100%;
		width: @header[width];
		padding-inline: @header[padding];
		margin-inline: auto;

		background: @header[background];
	}
</style>
