<script>
	import pfp from '$lib/pfp.gif';
	import flag from '$lib/flag.webp';
  export let name = 'Name';
</script>

<a class="p-2 flex gap-2 items-center hover:bg-gray-400 w-full" href="https://www.google.com/">
	<img src={pfp} alt="pfp" width="20" />
	<div>{name}</div>
	<img src={flag} alt="flag" width="20" />
</a>
