<script>
	import { booting } from '$lib/utils/store';

	import Boot from '$lib/components/process/boot/boot.svelte';
	import Workspace from '$lib/components/process/system/workspace.svelte';
</script>

<svelte:head>
	<meta
		name="description"
		content="Baseado na interface gráfica do Gnome, venho mostrar minhas habilidades na area de desenvolvimento e design!"
	/>
</svelte:head>

{#if $booting}
	<Boot />
{:else}
	<Workspace desktop>
		<slot />
	</Workspace>
{/if}

<style lang="less" global>
	@import '../lib/styles/global.less';
</style>
