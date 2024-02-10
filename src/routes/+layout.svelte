<script>
	import '../app.css';
	import NavItem from './NavItem.svelte';
</script>

<div class="flex">
	<div class="h-screen w-40 m-0 flex flex-col bg-gray-100 text-white shadow-lg">
		<NavItem icon="♟️" title="Play"/>
		<NavItem icon="🧩" title="Puzzles"/>
		<NavItem icon="🎓" title="Learn"/>
		<NavItem icon="🥽" title="Watch"/>
		<NavItem icon="📰" title="News"/>
		<NavItem icon="🫂" title="Social"/>
		<NavItem icon="😀" title="More"/>
	</div>
	<div class="bg-gray-200 flex-grow">
		<slot />
	</div>
</div>
