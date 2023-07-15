<script>
	export let toggle = false;
</script>

<button id="toggle" class:toggle {...$$props} on:click={() => (toggle = !toggle)} >
	<slot />
</button>
