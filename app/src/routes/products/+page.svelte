<script lang="ts">
	export let data;
	const { products } = data;
</script>

<h1 class="text-[50px]">Products List</h1>

{#each products as product}
	<h2>
		<a href="/products/{product.id}" data-sveltekit-preload-data>
			{product.title}
		</a>
	</h2>
	<p>{product.description}</p>
{/each}