<script>
	import NavItem from './NavItem.svelte';
	import SmallNavItem from './SmallNavItem.svelte';

	let selected = '';

	const navItems = [
		{
			icon: '♟️',
			title: 'Play',
			items: ['Play', 'Computer', 'Tournaments', '4 Player & Variants']
		},
		{
			icon: '🧩',
			title: 'Puzzle',
			items: ['Puzzle Rush', 'Puzzle Battle', 'Daily Puzzle', 'Custom Puzzles']
		},
		{
			icon: '🎓',
			title: 'Learn',
			items: [
				'Lessons',
				'Analysis',
				'Chessable Courses',
				'Aimchess Training',
				'Insights',
				'Classroom',
				'Openings',
				'Endgames',
				'Practice'
			]
		},
		{ icon: '🥽', title: 'Watch', items: ['ChessTV'] },
		{
			icon: '📰',
			title: 'News',
			items: ['Chess Today', 'News', 'Articles', 'Top Players', 'Chess Rankings']
		},
		{ icon: '🫂', title: 'Social', items: ['Clubs', 'Forums', 'Members', 'Blogs', 'Coaches'] },
		{
			icon: '😀',
			title: 'More',
			items: [
				'Library',
				'Explorer',
				'Solo Chess',
				'Vision',
				'Vote Chess',
				'Mobile Apps',
				'ChessKid',
				'Videos',
				'Games Database',
				'Chess Terms',
				'Rules',
				'Tools',
				'Shop',
				'Gift',
				'Merch',
				'Computer Championship'
			]
		}
	];

	const mouseLeaveHandler = (e) => {
		if (!e.relatedTarget || !e.relatedTarget.className?.split(' ').includes('menu')) selected = '';
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:mouseleave={mouseLeaveHandler}>
	{#each navItems as item}
		<NavItem icon={item.icon} title={item.title} bind:group={selected} />
	{/each}
</div>
{#if selected}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div class="menu bg-gray-25 fixed left-40 top-0 w-80 h-screen" on:mouseleave={() => (selected = '')}>
		{#each navItems.filter((item) => item.title === selected)[0].items as title}
			<SmallNavItem {title} />
		{/each}
	</div>
{/if}
