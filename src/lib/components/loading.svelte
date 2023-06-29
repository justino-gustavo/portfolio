<script>
	import { fade } from 'svelte/transition';
</script>

<div class="_loading" transition:fade={{ duration: 300 }}>
	<progress value="50" min="0" max="100" />
</div>

<style lang="less">
	._loading {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;

		height: 100vh;
		width: 100vw;

		background-color: @workspaceColor;
	}
</style>
