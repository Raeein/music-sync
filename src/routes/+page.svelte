<script lang="ts">
    import StreamingService from '$lib/streaming-service.svelte'
    let name: string = "boo";
    let isAuthenticatedSpotify: boolean = false;
    let isAuthenticatedAppleMusic: boolean = false;

    async function loginSpotfiy() {
        const response = await fetch('/api/login');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const redirectURL = data.redirectURL;

        location.href = redirectURL;
    }

</script>

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
