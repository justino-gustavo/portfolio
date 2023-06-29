<script>
	import { PUBLIC_GH_USER } from '$env/static/public';

	import { github } from '$lib/utils/store';
	import { sleep } from '$lib/utils/misc';

	import Loading from '$lib/components/loading.svelte';
	import Workspace from '$lib/components/workspace.svelte';

	async function apiRequest() {
		const profile = await (await fetch('https://api.github.com/users/' + PUBLIC_GH_USER)).json();
		const repos = await (await fetch(profile.repos_url)).json();

		github.set({ profile, repos });
	}
	async function load(seconds) {
		await sleep(seconds * 1000);
		await apiRequest();
	}
</script>

<svelte:head>
	<meta
		name="description"
		content="Nesse projéto, procurei deixar o mais semelhante com meu ambente de desenvolvimento desktop. Baseado na interface gráfica do Gnome."
	/>
</svelte:head>

{#await load(3)}
	<Loading />
{:then}
	<Workspace>
		<slot />
	</Workspace>
{/await}

<style lang="less" global>
	@import '../lib/styles/global.less';
</style>
