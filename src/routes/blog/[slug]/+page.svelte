<article class="prose  prose-slate max-w-screen-xl">
    {@html result}
</article>

<script lang="ts">
    import markdownIt from "markdown-it";
    import type { PageData } from './$types';
    export let data: PageData;
    
    var md = new markdownIt();
    let result = md.render(data.body.post);
</script>
