<script lang="ts">
    import type { PageData } from './$types';
    import StreamingService from '$lib/streaming-service.svelte'
    let name: string = "boo";
    let isAuthenticatedSpotify: boolean = false;
    let isAuthenticatedAppleMusic: boolean = false;
	export let data: PageData;

    async function loginSpotfiy() {
        const response = await fetch('/api/login');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const redirectURL = data.redirectURL;

        console.log('redirect url is ', redirectURL);

        location.href = redirectURL;
    }

</script>
    
<h1>Spotify cookie is: {data.spotifyCode}</h1>

<h1>Welcome to SvelteKit {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if isAuthenticatedSpotify}
   <p>Spotify is Authenticated</p> 
{/if}

<StreamingService svgName="spotify-logo.svg" on:click={loginSpotfiy}></StreamingService>
<StreamingService svgName="apple-music.svg"></StreamingService>
<style>
    h1 {
        background-color: red;
    }
</style>
