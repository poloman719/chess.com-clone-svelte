<script>
	import '../app.css';
	import SideBarIcon from './SideBarIcon.svelte';
</script>

<div
	class="fixed top-0 left-0 h-screen w-32 m-0 flex flex-col bg-gray-100 text-white shadow-lg"
>
    <SideBarIcon text="banana" />
</div>

<slot />
