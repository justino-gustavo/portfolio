<script>
	export let bgColor = 'white';
	export let color = 'black';
	export let icon = "bi-app";
</script>

<div class="_application" style:background-color={bgColor} style:color>
	<span class={icon} />
</div>

<style lang="less">
	div._application {
		display: flex;
		align-items: center;
		justify-content: center;

		height: @desktopApplicationSize;
		width: @desktopApplicationSize;
		border-radius: @desktopApplicationRadio;

		font-size: calc(@desktopApplicationSize - (@defaultSpacing * 3));
	}
</style>
