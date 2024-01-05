<script lang="ts">
    import StreamingService from '/src/lib/streaming-service.svelte'
    let name: string = "boo";
    let isAuthenticatedSpotify: boolean = false;
    let isAuthenticatedAppleMusic: boolean = false;

    const handleClick = () => {
        name = "jason";
    }
</script>

<h1  on:click={handleClick}>Welcome to SvelteKit {name}</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{#if isAuthenticatedSpotify}
   <p>Spotify is Authenticated</p> 
{/if}

<StreamingService svgName="spotify-logo.svg"></StreamingService>
<StreamingService svgName="apple-music.svg"></StreamingService>
<style>
    h1 {
        background-color: red;
    }
</style>
