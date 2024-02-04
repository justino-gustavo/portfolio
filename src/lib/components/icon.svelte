<script>
	export let bgColor = 'transparent',
		iconImg = '',
		iconClip = false,
		name = '',
		index = 0,
		id = '',
		action;

	const bgSize = iconClip ? 'cover' : 'contain';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id="icon-{id}"
	data-index={index}
	title={name}
	style=" --icon_img: url({iconImg}); --icon_bg_color: {bgColor}; --icon_bg_size: {bgSize};"
	on:click={action}
/>

<style lang="less">
	@appSize: 1cm;

	div[id^='icon'] {
		cursor: pointer;

		height: @appSize;
		width: @appSize;

		border-radius: 3mm;

		background-image: var(--icon_img);
		background-position: center;
		background-size: var(--icon_bg_size);
		background-position: center;
		background-color: var(--icon_bg_color);

		&:not(:last-of-type) {
			margin-right: 6mm;
		}
	}
</style>
