

<article class="prose  prose-slate max-w-screen-xl">

    {@html result}

</article>

<script lang="ts">
    import markdownIt from "markdown-it";
	import { onMount } from "svelte";


    import type { PageData } from './$types';
    export let data: PageData;

    console.log(data);

    var md = new markdownIt();

    let result = md.render(data.body.post);



</script>
