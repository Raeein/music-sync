<script lang="ts">
    import '../styles/global.css'
</script>
<header>
    <p>Hi i am the head</p>
</header>
<main>
    <slot></slot>
</main>


<footer>hi im a footer</footer>

<style>
    header {
        display: flex;
        justify-content: center;
    }
    main {
        max-width: 960px;
        margin: 20px auto;
    }
    footer {
        text-align: center;
    }
</style>
