<script>
	import { desktopMenu} from '$lib/utils/store';

	import Dropdown from './header/dropdown.svelte';

	const time = new Date();
</script>

<nav id="header">
	<Dropdown bind:toggle={$desktopMenu} blur={false}>
		<i class="bi-circle" />
	</Dropdown>
	<Dropdown>
		{time.toLocaleDateString('pt-BR', { weekday: 'long', month: 'short', day: '2-digit' })}
		<div slot="content" id="center-menu">
			<p>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam ab, voluptatibus alias sint cum, impedit modi
				dolorum ducimus aspernatur dicta inventore totam cupiditate! Placeat quas quidem porro magni eaque natus.
			</p>
		</div>
	</Dropdown>
	<Dropdown align="left">
		<i class="bi-circle-half" />
		<i class="bi-share" style="margin: 0 2mm;" />
		<i class="bi-gear" />
		<div slot="content" id="right-menu" />
	</Dropdown>
</nav>

<style lang="less">
	nav#header {
		display: flex;
		align-items: center;
		justify-content: space-between;

		height: 100%;
		width: @header[width];
		padding-inline: @header[padding];
		margin-inline: auto;

		background: @header[background];
	}
</style>
