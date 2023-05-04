<script lang="ts">
	import { page } from '$app/stores';

	const { lang } = $page.params;

	interface ICountry {
		country: string;
		word: string;
	}
	const greetings: ICountry[] = [
		{ country: 'en', word: 'Hello!' },
		{ country: 'es', word: 'Hola!' },
		{ country: 'fr', word: 'Bonjour!' }
	];

	let greeting = 'Hello!';
	greetings.forEach((value) => {
		if (value.country === lang) greeting = value.word;
	});
</script>

<h1>{greeting}</h1>
