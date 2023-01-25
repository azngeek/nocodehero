{#each data.body as item }
    <a href="/blog/{item.path}">{item.path}</a>
{/each}


<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
    console.log(data);

</script>