<script lang="ts">
    import "./global.postcss"
    import TutorialLink from "@components/TutorialLink.svelte"

    export let name: string
</script>

<main>
    <h1 class="text-red-700">Hello {name}!</h1>
    <p>
        Visit the <TutorialLink /> to learn how to build Svelte apps.
    </p>
</main>

<style lang="postcss">
    main {
        @apply text-center p-1;
        max-width: 240px;
    }

    h1 {
        text-transform: uppercase;
        font-size: 4em;
        font-weight: 100;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
