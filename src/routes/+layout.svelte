<script>
		import { sleep } from '$lib/utils/misc';

	import Loading from '$lib/components/loading.svelte';
	import Workspace from '$lib/components/workspace.svelte';
</script>

<svelte:head>
	<meta
		name="description"
		content="Nesse projéto, procurei deixar o mais semelhante com meu ambente de desenvolvimento desktop. Baseado na interface gráfica do Gnome."
	/>
	<title>Carregando - Desktop</title>
</svelte:head>

{#await sleep(3000)}
	<Loading />
{:then}
	<Workspace>
		<slot />
	</Workspace>
{/await}

<style lang="less" global>
	@import '../lib/styles/global.less';
</style>
