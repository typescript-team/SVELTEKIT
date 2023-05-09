import type { PageLoad } from './$types';
/*
	[ load : 범용 로드 ]
	클라이언트측 라우팅을 위해서 서버와 브라우저 모두에서 실행
*/
export const load = ((loadEvent) => {
	const { fetch } = loadEvent;
	const fetchProducts = async () => {
		// 10개의 상품 데이터를 가져온다.
		const productRes = await fetch('https://dummyjson.com/products?limit=10');
		const productData = await productRes.json();

		// productData를 읽어, 그 중에 몇개만 보내는
		/*
			const products = productData.products
			const productList = products.map((product) => {
				return `${product.title}, ${product.price}`
			})
		*/

		return productData.products;
	};

	return {
		products: fetchProducts()
	};
}) satisfies PageLoad;
