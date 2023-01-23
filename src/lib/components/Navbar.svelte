<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';
	onMount(() => {
		
	});
	async function redirectToLogin() {
		await goto('/login');
	}

	function logout() {
		alert('logout');
	}

	let visibility = false;
	async function toggleMenu() {
		visibility = !visibility;
	}

	async function goTo(location: string) {
		await goto('/' + location);
		toggleMenu();
	}
	/*

    import * as typeformEmbed from '@typeform/embed';
    import '@typeform/embed/build/css/popup.css'

    let { toggle } = typeformEmbed.createPopup('BtSly3JE', {
			medium: 'demo-test',
			hidden: { foo: 'foo value', bar: 'bar value' }
		});

    async function rsvp() 
    {
        await toggleMenu();
		toggle();	
    }*/
</script>

<div class="md:mt-6 sticky top-0 bg-white  ">
	<div class="hidden md:flex flex-row-reverse h-6">
		<select name="cars" id="cars">
			<option value="de">DE</option>
			<option value="fr">FR</option>
			<option value="en">EN</option>
		</select>
	</div>
	<div class="divide-y divide-dotted">
		<div class="text-center text-2xl lg:text-3xl h-12 flex">
			<div class="flex-auto text-left md:text-center font-serif p-2">no code hero</div>
			<div class="md:hidden text-right flex-auto mr-6 py-1">
				<button on:click={toggleMenu}>☰</button>
			</div>
		</div>
		<div class="md:mt-6">
			<ul class="hidden md:flex justify-center h-12 font-serif">
				<li class="flex-initial w-32 h-12 text-center pt-4">
                    <a href="/location">Articles</a>
                </li>
				<li class="flex-initial w-32 h-12 text-center pt-4">Cheatsheets</li>
				<li class="flex-initial w-32 h-12 text-center pt-4">
                    <a href="/notion">Tools i use</a>
                </li>
			</ul>
		</div>
	</div>
</div>

{#if visibility}
	<div
		class="md:hidden fixed top-0 bg-green-200 text-black z-10 overflow-auto text-2xl h-full w-full"
	>
		<div class="md:hidden text-right flex-auto text-white mr-6 p-2">
			<button value="b" class="text-white" on:click={toggleMenu}>X</button>
		</div>
		<div class="container mx-auto content-center pt-20 py-3 px-4">
			<div class="text-center mt-2">
				<button on:click={() => goTo('notion')}>Articles</button>
			</div>
            <div class="text-center mt-2">
				<button on:click={() => goTo('notion')}>Cheatsheet</button>
			</div>
			<div class="text-center mt-2">
                <button on:click={() => goTo('notion')}>Timeline (done)</button>
            </div>
		</div>
	</div>
{/if}

<style>
	.hideMenuNav {
		display: none;
	}
	.showMenuNav {
		display: block;
		position: absolute;
		width: 100%;
		height: 100vh;
		top: 0;
		left: 0;
		background: white;
		z-index: 10;
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		align-items: center;
	}
</style>
