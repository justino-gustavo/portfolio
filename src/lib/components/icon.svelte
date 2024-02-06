<script>
	export let bgColor = 'transparent',
		iconImg = '',
		iconClip = false,
		name = '',
		key,
		id = '',
		size = "1cm",
		action;

	const bgSize = iconClip ? 'cover' : 'contain';
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	id="icon-{id}"
	{key}
	title={name}
	style=" --icon_img: url({iconImg}); --icon_bg_color: {bgColor}; --icon_bg_size: {bgSize}; --app_size: {size};"
	on:click={action}
/>

<style lang="less">
	@appSize: var(--app_size);

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
