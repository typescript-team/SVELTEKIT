<script lang="ts">
	// $lib 폴더가 에러 발생 ==> npm run check
	// 컴파일러가 사물의 위치를 파악하는데 도움이 된다.
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
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

<Header />
<div class="container mx-auto my-6 max-w-lg">
	<slot />
</div>
<Footer />
