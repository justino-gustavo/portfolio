<script>
	import { PUBLIC_GH_USER } from '$env/static/public';

	import { onMount } from 'svelte';
	import { github } from '$lib/utils/store';

	import Workspace from '$lib/components/workspace.svelte';

	onMount(async () => {
		const profile = await (await fetch('https://api.github.com/users/' + PUBLIC_GH_USER)).json();
		const repos = await (await fetch(profile.repos_url)).json();

		github.set({profile, repos});
	});
</script>

<Workspace>
	<slot />
</Workspace>

<style lang="less" global>
	@import '../lib/styles/global.less';
</style>
