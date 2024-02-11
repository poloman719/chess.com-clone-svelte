<script>
	import '../app.css';
	import NavItem from './NavItem.svelte';

	let selected = "nothing selected";

	const navItems = [
		{ icon: '♟️', title: 'Play' },
		{ icon: '🧩', title: 'Puzzle' },
		{ icon: '🎓', title: 'Learn' },
		{ icon: '🥽', title: 'Watch' },
		{ icon: '📰', title: 'News' },
		{ icon: '🫂', title: 'Social' },
		{ icon: '😀', title: 'More' }
	];
</script>

<div class="flex">
	<div class="h-screen w-40 m-0 flex flex-col bg-gray-100 text-white shadow-lg">
		{#each navItems as item}
			<NavItem icon={item.icon} title={item.title} />
		{/each}
		<div>{selected}</div>
	</div>
	<div class="bg-gray-25 fixed left-40 w-80 h-screen"></div>
	<div class="bg-gray-200 flex-grow">
		<slot />
	</div>
</div>
