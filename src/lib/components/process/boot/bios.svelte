<script>
	import { base } from '$app/paths';
</script>

<section id="bios">
	<img src="{base}/favicon.ico" alt="boot screen" />

	<span>Pressione [ESC] para acessar o menu.</span>
</section>

<style lang="less">
	section#bios {
		height: 100%;
		width: 100%;

    cursor: progress;

		> img {
			position: absolute;

			top: 50%;
			left: 50%;

			translate: -50% -50%;
		}

		> span {
			position: absolute;

			bottom: 3px;
			left: 3px;
		}
	}
</style>
