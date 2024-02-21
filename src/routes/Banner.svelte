<script>
	import BigButton from '$lib/BigButton.svelte';
	import Board from '$lib/Board.svelte';
	import hikaru from '$lib/hikaru.jpg';
	export let boardRight = false;
	export let title = 'Title';
	export let button = 'Button';
	export let quote = 'Quote.';
	export let quotee = 'Quotee';
</script>

<div class="rounded-md bg-gray-100 w-full flex p-10 gap-10" class:flex-row-reverse={boardRight}>
	<div class="w-[40%] flex flex-col justify-center">
		<Board />
	</div>
	<div class="flex flex-col items-center w-[60%] gap-10">
		<div class="text-center font-bold text-3xl pt-5">{title}</div>
		<BigButton>{button}</BigButton>
		<div class="flex w-full text-gray-700">
			<div class="aspect-square flex justify-center items-center w-[50%]">
				<img src={hikaru} alt="" class="rounded-md w-full" />
			</div>
			<div class="p-10 flex flex-col gap-2">
				<q>{quote}</q>
				<span>
					<span class="rounded sm bg-[#7c2929] font-bold text-white text-xs p-1">GM</span>
					<b>{quotee}</b>
				</span>
			</div>
		</div>
	</div>
</div>
