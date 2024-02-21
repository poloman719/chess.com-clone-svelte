<script>
	import User from './User.svelte';
	let search = 'Search';
	let focused = false;
	export let users;
	$: searchUsers = users.filter((user) => user.toLowerCase().includes(search.toLowerCase()));
</script>

<div class="p-3 flex items-center justify-center flex-col text-xs">
	<input
		bind:value={search}
		on:focusin={() => {
			if (search == 'Search') search = '';
			focused = true;
		}}
		on:focusout={() => {
			if (search == '') search = 'Search';
			focused = false;
		}}
		type="text"
		class="bg-gray-400 w-full border border-gray-500 rounded-sm outline-none p-2 hover:border-gray-700 focus:border-gray-700"
	/>
	{#if search !== '' && search !== 'Search' && focused}
		<div>
			<div class="fixed top-100% left-3 w-60 bg-gray-100 shadow-md rounded-sm">
				{#each searchUsers as user}
					<User name={user} />
				{/each}
			</div>
		</div>
	{/if}
</div>
