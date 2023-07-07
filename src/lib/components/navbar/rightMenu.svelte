<script>
	import Button from './button.svelte';

	import { github } from '$lib/utils/store';
	import { PUBLIC_EMAIL } from '$env/static/public';

	const buttonsObj = {
		github: {
			icon: 'bi-github',
			link: `https://github.com/${$github.profile.login}`,
			target: '_blank'
		},
		email: {
			icon: 'bi-envelope',
			link: `mailto:${PUBLIC_EMAIL}`
		}
	};

	const buttons = Object.entries(buttonsObj);
</script>

<menu class="_menu">
	<div>
		<Button>
			<span class="bi-circle-half" slot="label" />
		</Button>
		<Button>
			<span class="bi-share" slot="label" />
		</Button>
		<Button>
			<span class="bi-file-earmark-text" slot="label" />
		</Button>
	</div>
	{#each buttons as button}
		<a href={button[1].link} {...button[1]}>
			<span class={button[1].icon} />
			{button[0]}
		</a>
	{/each}
</menu>

<style lang="less">
	menu._menu {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: @defaultSpacing;
		max-width: @menuMaxWidth;
		min-width: @menuMinWidth;
		border-radius: 5mm;

		padding: @defaultSpacing;

		background-color: darken(@headerColor, 0.5%);

		> div {
			grid-column: 1/3;

			display: inline-flex;
			align-items: center;
			justify-content: space-evenly;
		}
		a {
			display: inline-flex;
			align-items: center;
			justify-content: space-around;

			height: @headerButtonSize;
			min-width: 3cm;
			padding-inline: @defaultSpacing;
			border-radius: @headerButtonRadio;

			background-color: lighten(@headerColor, 1%);
			color: @headerTextColor;

			text-decoration: none;
		}
	}
</style>
