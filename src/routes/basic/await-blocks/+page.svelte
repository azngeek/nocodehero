<h1>Await blocks</h1>

<p>Resource: <a href="https://learn.svelte.dev/tutorial/await-blocks>">Dokumentation</a></p>

<p>An dieser Stelle wird <code>await</code> benutzt, um deklarativ auf ein Ergebnis zu warten. Es gibt hierzu zwei unterschiedliche Implementierungen</p>

<h2>Implementierung mit einem warten-dialog</h2>
<div>
    {#await promise}
    <p>Laden</p>
    {:then response}
    <p>Das Ergebnis: {response.answer}</p>
    {:catch error}
    <p>Fehler {error}</p>
    {/await}
</div>

<h2>Implementierung ohne Dialog. Es wird nur das Ergebnis gezeigt.</h2>
<div>
    {#await promise then response}
    <p>Das Ergebnis: {response.answer}</p>
    {/await}
</div>

<button on:click={handleClick}>Ja oder Nein?</button>


<script lang="ts">
 
    async function getYesorNo() {
        const response = await fetch('https://yesno.wtf/api');
        const data = await response.json();

        //console.log(data);
        if (response.ok) {
            return data;
        } else {
            throw new Error(data);
        }
    }

    let promise = getYesorNo();

    function handleClick() {
        promise = getYesorNo();
    }

</script>