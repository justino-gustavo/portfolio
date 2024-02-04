<menu id="menu" {...$$props}>
	<slot />
</menu>

<style lang="less">
	menu#menu {
		@minSize: {
			height: 2cm;
			width: 5cm;
		}
		
		min-height: @minSize[height];
		min-width: @minSize[width];
		padding: @global[spacing];
		border-radius: calc(3 * @global[spacing]);

		background: @header[background];
		color: @header[color];
	}
</style>
