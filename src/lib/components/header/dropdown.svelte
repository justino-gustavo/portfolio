<script>
	import Toggle from '../misc/toggle.svelte';
	import Menu from './menu.svelte';

	let container;

	export let toggle,
		blur = true,
		align = 'center';

	function onWindowClick(e) {
		blur && container.contains(e.target) == false ? (toggle = false) : void 0;
	}
</script>

<svelte:window on:click={onWindowClick} />

<div id="dropdown" bind:this={container}>
	<Toggle data-ref="header-button" bind:toggle>
		<slot />
	</Toggle>
	{#if toggle && $$slots.content}
		<Menu data-ref="header-menu" class={align}>
			<slot name="content" />
		</Menu>
	{/if}
</div>

<style lang="less">
	@buttonSize: calc(@header[height] - @global[spacing]);

	div#dropdown {
		position: relative;
	}

	:global([data-ref='header-button']) {
		cursor: pointer;

		display: inline-flex;
		align-items: center;
		justify-content: center;

		min-height: @buttonSize;
		min-width: @buttonSize;
		padding: 0 @global[spacing];
		border-radius: @headerButton[radius];

		color: @header[color];
		background-color: @headerButton[color];

		transition: @global[transition];

		&:hover {
			background-color: @headerButton[hover];
		}
	}
	:global([data-ref='header-button'].toggle) {
		background-color: @headerButton[hover];
	}

	:global([data-ref='header-menu']) {
		position: absolute;
		top: calc(100% + @global[spacing]);
	}
	:global([data-ref='header-menu'].left) {
		right: 0;
	}
	:global([data-ref='header-menu'].center) {
		right: 50%;
		translate: 50%;
	}

	@media screen and (max-width: @checkPoint[tablet]) {
		:global([data-ref='header-menu']) {
			position: fixed;

			top: calc(@header[height] + (@global[spacing] / 2));
		}
		:global([data-ref='header-menu'].left) {
			right: 50%;

			translate: 50%;
		}
	}
</style>
