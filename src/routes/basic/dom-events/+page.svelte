<h1>Dom Events</h1>

<p>Resource: <a href="https://learn.svelte.dev/tutorial/dom-events>">Dokumentation</a></p>

<div on:mousemove={handleMouseEvent}>Deine Maus-Position: {pos.x} x {pos.y}</div>

<script>

    let pos = {
        x : 0,
        y : 0
    };
    let m = { x: 0, y: 0 };
	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}

    function handleMouseEvent(event) {
        console.log(event);
        pos.x = event.clientX;
        pos.y = event.clientY;
    }
</script>

<style>

html,body{
 height:100%;
 padding: 0;
}

    div {
        width: 100vw;
        height: 100vw;
        background-color: antiquewhite;
    }
</style>