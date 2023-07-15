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
	<Toggle ref="header-button" bind:toggle>
		<slot />
	</Toggle>
	{#if toggle && $$slots.content}
		<Menu ref="header-menu" class={'align ' + align}>
			<slot name="content" />
		</Menu>
	{/if}
</div>

<style lang="less">
	@buttonSize: calc(@header[height] - @global[spacing]);

	div#dropdown {
		position: relative;
	}

	:global([ref='header-button']) {
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
	:global([ref='header-button'].toggle) {
		background-color: @headerButton[hover];
	}

	:global([ref='header-menu'].align) {
		position: absolute;
		top: calc(100% + @global[spacing]);
	}
	:global([ref='header-menu'].left) {
		right: 0;
	}
	:global([ref='header-menu'].center) {
		right: 50%;
		translate: 50%;
	}

	@media screen and (max-width: @checkPoint[tablet]) {
		:global([ref='header-menu'].align) {
			position: fixed;

			top: calc(@header[height] + (@global[spacing] / 2));
		}
		:global([ref='header-menu'].left) {
			right: 50%;

			translate: 50%;
		}
	}
</style>
