<script>
	import { blur } from 'svelte/transition';

	export let toggle = false;
	export let dropdown = false;
	export let togglable = dropdown;
	export let direction = 'center';

	// @ts-ignore
	const handleDropdownBlur = ({ relatedTarget, currentTarget }) => {
		if (relatedTarget && currentTarget.contains(relatedTarget)) return;
		toggle = false;
	};
</script>

<div on:focusout={dropdown ? handleDropdownBlur : null} class="_button">
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<button on:click={() => (togglable ? (toggle = !toggle) : null)} class:toggle>
		<slot name="label" />
	</button>
	{#if dropdown && toggle}
		<div class={direction} transition:blur>
			<slot name="content" />
		</div>
	{/if}
</div>

<style lang="less">
	div._button {
		position: relative;

		padding: 1mm 1.5mm;
		border-radius: @headerButtonRadio;

		> button {
			all: unset;

			display: inline-flex;
			align-items: center;
			justify-content: center;

			height: @headerButtonSize;
			min-width: @headerButtonSize;
			padding-inline: @defaultSpacing;
			border-radius: @headerButtonRadio;

			background-color: @headerButtonColor;
			color: @headerTextColor;
			transition: cubic-bezier(0.86, 0, 0.07, 1) 300ms;

			cursor: pointer;

			&:hover,
			&.toggle {
				background-color: @headerButtonHoverColor;
			}

			&:has(> span:only-child) {
				padding-inline: 0;
			}
		}
		> div {
			position: absolute;
			top: calc(100% + @defaultSpacing);

			&.left {
				left: @defaultSpacing;
			}
			&.center {
				left: 50%;
				translate: -50%;
			}
			&.right {
				right: @defaultSpacing;
			}

			@media screen and (max-width: @checkPoint[mobile]) {
				position: fixed;
				top: calc(@headerHeight + @defaultSpacing);

				&.left,
				&.cente,
				&.right {
					left: 50%;
					right: unset;
					translate: -50%;
				}
			}
		}
	}
</style>
