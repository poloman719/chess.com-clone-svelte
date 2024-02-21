<script>
	export let author = 'author';
	export let img;
	export let title;
</script>

<div class="flex flex-col justify-center items-center hover:opacity-75 transition-all gap-2">
	<img src={img} alt="" />
	<div class="font-bold mt-5"><slot /></div>
	<div class="text-xs text-gray-700">
		{#if title}
			<span class="rounded sm bg-[#7c2929] font-bold text-white text-xs p-0.5">{title}</span>
		{/if}
		{author}
	</div>
</div>
