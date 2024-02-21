<script>
	import Board from '$lib/Board.svelte';
	import BigButton from '../lib/BigButton.svelte';
	import Banner from './Banner.svelte';
	import SmallBanner from './SmallBanner.svelte';
	import sb1 from '$lib/sb1.png'
	import sb2 from '$lib/sb2.png'
	import sb3 from '$lib/sb3.png'
	import sb4 from '$lib/sb4.png'
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
				<span class="text-gray-700">Games Today</span>
			</div>
			<div>
				<span class="font-bold">{playing}</span>
				<span class="text-gray-700">Playing Now</span>
			</div>
		</div>
		<BigButton full subtitle="Play with someone at your level">Play Online</BigButton>
		<BigButton full subtitle="Play vs customizable training bots" gray>Play Computer</BigButton>
	</div>
</div>
<div class="flex flex-col p-10 gap-10 w-full">
	<Banner
		boardRight
		title="Solve Chess Puzzles"
		button="Solve Puzzles"
		quote="Puzzles are the best way to improve pattern recognition, and no site does it better."
		quotee="Hikaru Nakamura"
	/>
	<Banner
		title="Take Chess Lessons"
		button="Start Lessons"
		quote="Chess.com lessons make it easy to learn to play, then challenge you to continue growing."
		quotee="Anna Rudolf"
	/>
	<div class="font-bold text-3xl text-center">Follow what's happening in Chess Today.</div>
	<div class="flex gap-10">
		<div class="flex gap-10 flex-col w-full">
			<SmallBanner author="JackRodgers" title='FM' img={sb1}>Nakamura 'Bebops' To 19th Bullet Brawl Title</SmallBanner>
			<SmallBanner author="Gserper" img={sb2}>Do You Use This Powerful Game Changing Trick?</SmallBanner>
		</div>
		<div class="flex gap-10 flex-col w-full">
			<SmallBanner author="JackRodgers" img={sb3}>Kwan Knocks SlugChamps Out Of The Park</SmallBanner>
			<SmallBanner author="MarkDvoretskyAuthor" title='IM' img={sb4}>Counter Chances Part 1: Calculation With Dvoretsky</SmallBanner>
		</div>
	</div>
	<div class="w-full h-full display flex justify-center">
		<BigButton>Chess Today</BigButton>
	</div>
</div>
