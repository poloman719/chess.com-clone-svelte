<script>
	import '../app.css';
	import logo from '$lib/logo.png';
	import NavBar from './NavBar.svelte';
	import SearchInput from './SearchInput.svelte';
	export let data;
</script>

<div class="flex">
	<div class="h-screen w-40 m-0 flex flex-col bg-gray-100 text-white shadow-lg pt-2">
		<div class="w-full bg-gray-100 h-12 flex items-center hover:bg-gray-50 cursor-pointer p-5">
			<img src={logo} alt="logo" />
		</div>
		<NavBar />
		<SearchInput users={data.users} />
		<div class="p-3 flex flex-col gap-3">
			<button class="bg-gray-400 w-full p-2 rounded-md hover:bg-gray-500">Sign Up</button>
			<button class="bg-green-300 w-full p-2 rounded-md hover:bg-green-400">Log In</button>
		</div>
		<button class="flex items-center justify-center p-2 text-xs text-gray-600 hover:bg-gray-50 hover:text-white">English</button>
		<button class="flex items-center justify-center p-2 text-xs text-gray-600 hover:bg-gray-50 hover:text-white">Help</button>
	</div>
	<div class="bg-gray-200 flex-grow">
		<slot />
	</div>
</div>
