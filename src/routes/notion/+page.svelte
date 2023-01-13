<h1>Tools, die ich benutze</h1>

Liste von Tools, die ich benutze

{#await data}
    Daten werden geladen
{:then response}
    <table>
        <tr>
            <th>Name</th>
            <th>Tags</th>
            <th>URL</th>
            <th>Description</th>
        </tr>
    {#each response.data.results as item}
        <tr>
            <th>{item.properties.Name.title[0].plain_text}</th>
            <th>{item.properties.Tags}</th>
            <th>{item.properties.URL.url}</th>
            <th>{item.properties.Description.rich_text[0].plain_text}</th>
        </tr>
 
    {/each}
    </table>
{/await}
<script>
    export let data;
</script>