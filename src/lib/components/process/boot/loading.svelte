<script>
	import { base } from '$app/paths';

	import { onMount } from 'svelte';

	let progress = 0;

	onMount(() => {
		const timer = setInterval(() => {
			progress += 0.5;
		}, 16);

		if (progress == 100) {
			clearInterval(timer);
		}
	});
</script>

<section id="loading">
	<div>
		<img src="{base}/assets/images/loading_icon.avif" alt="loading screen" />
		<progress max="100" value={progress} />
	</div>
</section>

<style lang="less">
	section#loading {
		height: 100%;
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		> div {
			display: flex;
			flex-direction: column;

			align-items: center;

			> img {
        height: 2cm;

				margin-bottom: 1cm;
			}

      > progress {
        height: 2mm;
        width: 30vb;

        border-radius: 99cm;

        &::-webkit-progress-bar {
          border-radius: 99cm;

          background-color: gray;
        }
        &::-webkit-progress-value {
          border-radius: 99cm;

          background-color: rgb(23, 97, 167);
        }
      }
		}
	}
</style>
