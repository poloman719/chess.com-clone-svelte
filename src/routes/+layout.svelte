<script>
	import '../app.css';
	import logo from '$lib/logo.png';
	import NavBar from './NavBar.svelte';

	let search = 'Search';
</script>

<div class="flex">
	<div class="h-screen w-40 m-0 flex flex-col bg-gray-100 text-white shadow-lg pt-2">
		<div class="w-full bg-gray-100 h-12 flex items-center hover:bg-gray-50 cursor-pointer p-5">
			<img src={logo} alt="logo" />
		</div>
		<NavBar />
		<div class="p-3 flex items-center justify-center">
			<input
				bind:value={search}
				on:focusin={() => (search = '')}
				on:focusout={() => (search = 'Search')}
				type="text"
				class="bg-gray-400 w-full border border-gray-500 rounded-sm outline-none p-2 text-xs hover:border-gray-600 focus:border-gray-600"
			/>
			<div class="fixed translate-y-7 w-40 h-12 bg-gray-25"></div>
		</div>
	</div>
	<div class="bg-gray-200 flex-grow">
		<slot />
	</div>
</div>
