<script>
  import Home from "@/components/Home.svelte";
  import UserInput from "@/components/UserInput.svelte";
  import { fade } from "svelte/transition";

  let name = "";
</script>

<main transition:fade>
  <Home {name} />

  <p><br /></p>

  <UserInput />
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
