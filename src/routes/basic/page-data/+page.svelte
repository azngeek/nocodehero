<h1>Page Data</h1>

<p>Resource: <a href="https://learn.svelte.dev/tutorial/page-data">Dokumentation</a></p>

<ul>
{#each data.data as {slug, title, content}}
    <li>{slug}: {title} -> {@html content}</li>
{/each}
</ul>

<script>
    export let data;
    console.log(data)
</script>