<script>
	import { booting } from '$lib/utils/store';

	import Bios from './bios.svelte';
	import Menu from './menu.svelte';
	import Loading from './loading.svelte';

	const wait = (delay) => new Promise((res) => setTimeout(res, delay));

	wait(8000).then(() => ($booting = false));
</script>

<main id="boot">
	{#await wait(1500)}
		<Bios />
	{:then}
		{#await wait(3000)}
			<Menu />
		{:then}
			<Loading />
		{/await}
	{/await}
</main>

<style lang="less">
	main#boot {
		height: 100vb;
		width: 100vi;

		background-color: rgb(10, 10, 10);

		color: white;
	}
</style>
