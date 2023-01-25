<article class="prose  prose-slate max-w-screen-xl">
    {@html result}
</article>

<script lang="ts">
    import markdownIt from "markdown-it";
    import highlightjs from "markdown-it-highlightjs";
    import 'highlight.js/styles/night-owl.css'

    import type { PageData } from './$types';
    export let data: PageData;
    
    // https://nikitagoncharuk.com/blog/my-custom-code-style-for-typography-by-tailwindcss-highlightjs/
    var md = new markdownIt().use(highlightjs,  { inline: true });
    let result = md.render(data.body.post);
</script>

<style>
    .hljs {
        background: #1e2931;
    }
</style>
