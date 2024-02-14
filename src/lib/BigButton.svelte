<script>
	export let gray = false;
	export let subtitle = '';

  let backClass = gray ? 'bg-gray-400 hover:bg-gray-500' : 'bg-green-300 hover:bg-green-400';
</script>

<button class="w-full rounded-lg flex {gray}">
	<div
		class="w-full rounded-lg h-[calc(100%-.5rem)] p-5 flex flex-col justify-center {backClass}"
	>
		<div class="font-bold text-2xl"><slot>Button</slot></div>
		{#if subtitle}
			<div class="text-sm">{subtitle}</div>
		{/if}
	</div>
</button>
