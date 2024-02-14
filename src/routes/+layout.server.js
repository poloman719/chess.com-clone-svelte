const API_KEY = 'tJgRMjDLu6tBn0z67l2rnA==5DafupZjU83nakro';
const URL = 'https://api.api-ninjas.com/v1/babynames';

export async function load() {
	const res = await fetch(URL, { headers: { 'X-Api-Key': API_KEY } });
	const data = await res.json();
	console.log(data);

	return {
		users: data
	};
}
