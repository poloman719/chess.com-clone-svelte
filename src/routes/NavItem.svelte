<script>
	export let icon = '⛔';
	export let title = 'title';
	export let group;
</script>

<button
	class="w-full bg-gray-100 h-11 flex items-center hover:bg-gray-50 cursor-pointer"
	on:mouseenter={() => (group = title)}
>
	<div class="pl-3">{icon}</div>
	<div class="pl-3 font-bold">{title}</div>
</button>