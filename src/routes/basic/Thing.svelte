<p>Das ist das Item: {item} -> {emoji}</p>

<script lang="ts">
    export let item: string;

    const emojis = {
		apple: '🍎',
		banana: '🍌',
		carrot: '🥕',
		doughnut: '🍩',
		egg: '🥚'
	};

    let emoji = emojis[item];
</script>