<script>
	import { PUBLIC_GH_USER } from '$env/static/public';

	import { onMount } from 'svelte';
	import { github } from '$lib/utils/store';

		import Desktop from '$lib/components/desktop.svelte';

	onMount(async () => {
		const profile = await (await fetch('https://api.github.com/users/' + PUBLIC_GH_USER)).json();
		const repos = await (await fetch(profile.repos_url)).json();

		github.profile.set(profile);
		github.repos.set(repos);
	});
</script>

<Desktop>
	<slot />
</Desktop>

<style lang="less" global>
	@import '../lib/styles/global.less';
</style>
