<script>
	import Board from '$lib/Board.svelte';
	import BigButton from '../lib/BigButton.svelte';
	let games = Math.floor(Math.random() * 20000000).toLocaleString();
	let playing = Math.floor(Math.random() * 200000).toLocaleString();
</script>

<div class="flex p-10 gap-10 w-full">
	<div class="w-[50%] flex flex-col justify-center">
		<Board />
	</div>
	<div class="w-[50%] text-center pr-10 pl-10 flex flex-col gap-10">
		<div class="text-5xl font-bold leading-tight">Play Chess Online <br /> on the #1 Site!</div>
		<div class="flex justify-between">
			<div>
				<span class="font-bold">{games}</span>
				<span class="text-gray-600">Games Today</span>
			</div>
			<div>
				<span class="font-bold">{playing}</span>
				<span class="text-gray-600">Playing Now</span>
			</div>
		</div>
		<BigButton subtitle='Play with someone at your level'>Play Online</BigButton>
	</div>
</div>
