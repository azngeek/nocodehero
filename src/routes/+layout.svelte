<div class="container max-w-screen-lg h-screen mx-auto">
	<Navbar />
    <!-- bg-red-200-->
	<div class="mt-20 p-4">
        <slot />
	</div>
</div>

<nav>
    <ul>
        {#each data.data.children as children1}
           <li><a href="/{children1.url}">{children1.title}</a></li>
           <ul>
           {#each children1.children as children2}
            <li><a href="/{children2.url}">{children2.title}</a></li>
            <ul>
                {#each children2.children as children3}
                 <li><a href="/{children2.url}/{children3.url}">{children3.title}</a></li>
                {/each}
                 </ul>
           {/each}
            </ul>
        {/each}
        </ul>
</nav>


<script>
	import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";
    export let data;
</script>