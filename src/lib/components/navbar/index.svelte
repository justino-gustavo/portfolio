<script>
	import { github, desktopMenu } from '$lib/utils/store';

	import Button from './button.svelte';
	import RightMenu from './rightMenu.svelte';
	import CenterMenu from './centerMenu.svelte';
</script>

<nav class="_navbar">
	<Button togglable bind:toggle={$desktopMenu}>
		<svelte:fragment slot="label">
			<span class="bi-circle" />
		</svelte:fragment>
	</Button>
	<Button dropdown>
		<svelte:fragment slot="label">
			{#if $github.profile}
				{$github.profile.name}
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
</nav>

<style lang="less">
	nav._navbar {
		display: inline-flex;
		align-items: center;
		justify-content: space-between;

		width: inherit;
		height: inherit;
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
