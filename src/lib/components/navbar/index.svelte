<script>
	// @ts-nocheck

	import { github } from '$lib/utils/store';

	import Button from './button.svelte';
	import RightMenu from './rightMenu.svelte';
	import CenterMenu from './centerMenu.svelte';

	let stored;

	github.profile.subscribe((data) => (stored = data));
</script>

<header class="_header">
	<Button>
		<svelte:fragment slot="label">
			<span class="bi-circle" />
		</svelte:fragment>
	</Button>
	<Button dropdown>
		<svelte:fragment slot="label">
			{#if stored}
				{stored.name}
			{:else}
				...
			{/if}
		</svelte:fragment>
		<svelte:fragment slot="content">
			<CenterMenu />
		</svelte:fragment>
	</Button>
	<Button dropdown direction="right">
		<svelte:fragment slot="label">
			<span class="bi-github" />
			<span class="bi-file-earmark-text" />
			<span class="bi-gear" />
		</svelte:fragment>
		<svelte:fragment slot="content">
			<RightMenu />
		</svelte:fragment>
	</Button>
</header>

<style lang="less">
	header._header {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;

		width: 100%;
		height: @headerHeight;
		padding-inline: 2mm;

		background-color: @headerColor;
	}
	span {
		margin-inline: 1.5mm;

		color: @headerTextColor;

		&:first-child {
			margin-inline-start: 0;
		}
		&:only-child {
			margin: 0;
		}
		&:last-child {
			margin-inline-end: 0;
		}
	}
</style>
