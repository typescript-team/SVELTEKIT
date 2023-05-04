<script lang="ts">
</script>

<nav>
	<!--
        data-sveltekit-prefetch
        사용자가 링크 위에 마우스를 올리거나
        모바일 기기에서 링크를 터치하는 순간 해당 페이지를
        렌더링하기 위해 필요한 데이터를 미리 받아오는 것
    -->
	<a data-sveltekit-preload-data href="/">HOME</a>
	<a data-sveltekit-preload-data href="/about">About</a>
	<a data-sveltekit-preload-data href="/spoon">Spoon</a>
</nav>

<header class="layout-header">Header</header>
<div class="container mx-auto my-6 max-w-lg">
	<slot />
</div>
<footer class="layout-footer">Footer</footer>

<style>
	.layout-header {
		background-color: #264653;
		color: #f4a261;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}

	.layout-footer {
		background-color: #264653;
		color: #e9c46a;
		font-size: 30px;
		text-align: center;
		padding: 10px;
	}
</style>
