<script lang="ts">
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';

	const handleClick = () => {
		console.log('Placing your order');
		goto('/products');
	};
	beforeNavigate((navigation) => {
		console.log({ before: navigation });
	});
	afterNavigate((navigation) => {
		console.log({ after: navigation });
	});
</script>

<h1>Welcome Home</h1>

<button on:click={handleClick}>Place Order : Products</button>
