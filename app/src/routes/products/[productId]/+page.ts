import type { PageLoad } from './$types';

export const load = (({ fetch, params }) => {
	const fetchProduct = async (id: string) => {
		const res = await fetch(`https://dummyjson.com/products/${id}`);
		const data = await res.json();
		return data;
	};

	return {
		// import { page } from '$app/stores
		// const productId = $page.params.productId
		product: fetchProduct(params.productId)
	};
}) satisfies PageLoad;
