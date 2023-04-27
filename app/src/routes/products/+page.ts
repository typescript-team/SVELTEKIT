import type { PageLoad } from './$types';

export const load = (({ fetch }) => {
	const fetchProducts = async () => {
		// 10개의 상품 데이터를 가져온다.
		const productRes = await fetch('https://dummyjson.com/products?limit=10');
		const productData = await productRes.json();

		return productData.products;
	};

	return {
		products: fetchProducts()
	};
}) satisfies PageLoad;
