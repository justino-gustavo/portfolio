<script>
	import { desktopMenu } from '$lib/utils/store';

	import Application from '$lib/components/application.svelte';
</script>

<div class="_desktop" data-menu={$desktopMenu}>
	{#if !$desktopMenu}
		<Application icon="bi-question-circle" color="white" bgColor="#e59a19" />
		<Application icon="bi-folder" color="white" bgColor="#19e2e5" />
		<Application icon="bi-code-slash" color="white" bgColor="#2e214f" />
		<Application icon="bi-bell" color="white" bgColor="#3ac43f" />
	{/if}
</div>

<style lang="less">
	div._desktop {
		display: grid;
		grid-auto-flow: column;
		grid-template-columns: repeat(auto-fit, @desktopApplicationSize);
		grid-template-rows: repeat(auto-fit, @desktopApplicationSize);
		gap: @defaultSpacing;

		height: 100%;
		width: 100%;
		padding: @defaultSpacing;

		background-image: url(../lib/images/bg.jpg);
		background-size: cover;
		background-position: center;

		transition: ease 0.1s;

		&[data-menu='true'] {
			border-radius: @desktopApplicationRadio;

			transform: scale(0.6);
		}
	}
</style>
