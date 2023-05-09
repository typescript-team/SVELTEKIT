/** @type {import('./$types').PageServerLoad} */
import { env } from '$env/dynamic/private';

export async function load({ params }) {
	const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=' + env.RECIPES_API_KEY;
	const recipesRes = await fetch(url);
	// 돌아오는 값이 results에 담겨있음(10개)
	// results : { [object Object],[object Object], ..., [object Object] }
	const { results } = await recipesRes.json();

	return {
		recipes: results
	};
}
