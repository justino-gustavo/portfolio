<script>
	import Button from './button.svelte';

	import { PUBLIC_EMAIL, PUBLIC_GH_USER } from '$env/static/public';

	const buttonsObj = {
		github: {
			icon: 'bi-github',
			link: `https://github.com/${PUBLIC_GH_USER}`,
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
		width: max-content;
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
			display: flex;
			align-items: center;
			justify-content: space-between;

			height: @headerButtonSize;
			min-width: 3cm;
			padding-inline: @defaultSpacing 5mm;
			border-radius: @headerButtonRadius;

			background-color: lighten(@headerColor, 1%);
			color: @headerTextColor;

			text-decoration: none;
		}
	}
</style>
