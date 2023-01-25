<div class="container max-w-screen-lg h-screen mx-auto">
	<Navbar />
	<div class="mt-20 p-4">
        <slot />
	</div>
</div>


<script>
	import Navbar from "$lib/components/Navbar.svelte";
    import "../app.css";
    export let data;
</script>