<script>
	export let background = 'white';
	export let color = 'black';
	export let icon = 'bi-app';
</script>

<button class="_application" style:background style:color>
	<span class={icon} />
</button>

<style lang="less">
	button._application {
		display: flex;
		align-items: center;
		justify-content: center;

		height: @desktopApplicationSize;
		width: @desktopApplicationSize;
		border-radius: @desktopApplicationRadio;

		font-size: calc(@desktopApplicationSize - (@defaultSpacing * 3));

		cursor: pointer;
	}
</style>
