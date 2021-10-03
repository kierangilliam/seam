<script context="module" lang="ts">
	export const ssr = false
</script>

<script lang='ts'>
	import Counter from '$lib/Counter.svelte'
	import { greeting, do_thing } from './abc.gleam'

	console.log({ 
		result: do_thing("test"), result2: do_thing("yooter"), result3: do_thing('yater') 
	})
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<section>
	<p>
		{greeting()}
	</p>

	<Counter />
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	p {
		white-space: pre-line;
	}
</style>
