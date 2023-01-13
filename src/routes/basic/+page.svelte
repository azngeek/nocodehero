<h1>{site}</h1>

<p>Enthält Zusammenfassungen aus <a href="https://learn.svelte.dev/tutorial/your-first-component">der Dokumentation</a></p>

<h2>Einfaches iterieren mit each</h2>
<p>
Die Liste wird mit each iteriert.
</p>
<ul>
 {#each resources as resource}
    <li><a href="{resource.url}">{resource.title}</a></li>
 {/each}
</ul>

<h2>Einfaches iterieren mit each und Index</h2>
<p>
Die Liste wird mit each iteriert.
</p>
<ul>
 {#each resources as resource, i}
    <li><a href="{resource.url}">{resource.title}</a>. Index: {i}</li>
 {/each}
</ul>

<h2>Liste mit Destructuring</h2>
<p>
Die folgende Liste wird mit <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment?retiredLocale=de">Destructuring assignment
</a> durchgeführt. Das hat den Vorteil, dass wir bei komplexen Listen direkt auf die Properties zugreifen können.
</p>


<ul>
 {#each resources as {url, title}}
    <li><a href="{url}">{title}</a></li>
 {/each}
</ul>

<h2>keyed-each-blocks</h2>

<p>Ohne den Einsatz von einer ID wird an dieser Stelle der letzter Eintrag entfernt.</p>
<a href="https://stackoverflow.com/questions/62499335/further-explanation-of-sveltes-keyed-each-block">Explanation</a>

{#each things as thing, index (index)}
    <Thing item={thing.name} />
{/each}
<button on:click={handleClick}>Remove Element</button>


<script>
	import Thing from "./Thing.svelte";

    let site = "Einfache Übungen!"
    let resources = [
        {
            url: "https://learn.svelte.dev/tutorial/welcome-to-svelte",
            title: "Welcome to svelte" 
        },
        {
            url: "https://learn.svelte.dev/tutorial/your-first-component",
            title: "Your first component" 
        },
         {
            url: "https://learn.svelte.dev/tutorial/keyed-each-blocks",
            title: "Keyed each blocks" 
        },
    ];

    let things = [
        {
            id: 1,
            name: 'apple'
        },
        {
            id: 2,
            name: 'banana'
        }
    ];

    function handleClick() {
        things = things.slice(1);
    }
</script>