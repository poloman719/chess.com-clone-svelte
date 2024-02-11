<script>
	export let icon = '⛔';
	export let title = 'title';
	export let group;
</script>

<button
	class="w-full bg-gray-100 h-12 flex items-center hover:bg-gray-50 cursor-pointer"
	on:mouseenter={() => (group = title)}
>
	<div class="pl-5">{icon}</div>
	<div class="pl-5 font-bold">{title}</div>
</button>