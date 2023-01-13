<ul>
    <li><a href="/blog/one">Blog Eintrag </a></li>
</ul>

<button on:click={handleClick}>Load</button>


{#await data}
    Loading
{:then response} 
    {#each response as item}
        {item.title}
    {/each}
{/await}


<script>
    let data = getBlogdata();
    
    async function getBlogdata() {
        const response = await fetch('/blog');
        data = await response.json();
        console.log(data)
    }

    function handleClick() {
        data = getBlogdata();
    }
</script>