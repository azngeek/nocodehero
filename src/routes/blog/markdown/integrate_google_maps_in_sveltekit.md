---
title: Hello World
description: First Markdown Based Blog Post
updatedAt: 2021-08-22
author: Bojack Horseman
---

# How to integrate Google Maps into SvelteKit

Most applications these days make use of some sort of mapping functionality. When it comes to web applications, the Google Maps API is one of the most popular choices. In this blog post, I'll show you how to integrate the Google Maps API into a SvelteKit application. While the process is fairly straightforward, there are a few things to keep in mind that we'll go over. So let's get started!

1. What is SvelteKit and why you would want to use it
2. How to get started with the Google Maps API
3. How to integrate the Google Maps API into SvelteKit
4. What are some benefits of using the Google Maps API in SvelteKit
5. How to get started with developing with SvelteKit

```ts
<script lang="ts">
	import { onMount } from 'svelte';
	import { Loader } from '@googlemaps/js-api-loader';

	onMount(() => {
		let map: google.maps.Map;

		const loader = new Loader({
			apiKey: 'AIzaSyDTmK_YB6FWixG9BczztAcaV6WtNZgVatY',
			version: 'weekly'
		});

		var grayStyles = [
			{
				featureType: 'all',
				stylers: [{ saturation: -20 }, { lightness: 30 }]
			}
		];

		loader.load().then(() => {
			const loc = { lat: 47.7063905, lng: 11.8763645 };

			map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
				center: loc,
				zoom: 12,
				styles: grayStyles
			});

			const image =
				'./wedding-couple.png';
			const beachMarker = new google.maps.Marker({
				position: loc,
				map,
				icon: image
			});
		});
	});
</script>
```