<script>
	export let gray = false;
	export let subtitle = '';
	export let full = false;

  let backClass = gray ? 'bg-gray-300 hover:bg-gray-350' : 'bg-green-200 hover:bg-green-250';
	let frontClass = gray ? 'bg-gray-500 group-hover:bg-gray-600 text-gray-700 group-hover:text-white' : 'bg-green-300 group-hover:bg-green-400';
</script>

<button class="group rounded-lg flex {backClass} transition-colors" class:w-full={full}>
	<div
		class="w-full rounded-lg h-[calc(100%-.4rem)] p-5 flex flex-col justify-center {frontClass} transition-colors"
	>
		<div class="font-bold text-2xl"><slot>Button</slot></div>
		{#if subtitle}
			<div class="text-sm">{subtitle}</div>
		{/if}
	</div>
</button>
