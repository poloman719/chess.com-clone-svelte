<script>
	import Square from './Square.svelte';
	const nums = [...Array(8).keys()];
</script>

<div class="aspect-square flex flex-col rounded-md overflow-hidden">
	{#each nums as row}
		<div class="flex-grow flex">
			{#each nums as col}
				<Square white={(row + col) % 2 === 0}/>
			{/each}
		</div>
	{/each}
</div>
