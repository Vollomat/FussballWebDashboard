<script>
  import UserInput from "@/components/UserInput.svelte";
  import { fade } from "svelte/transition";
  import Unterseite from "@/components/Unterseite.svelte"
  let name = "";
  
</script>

<main transition:fade>

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
