<script>
  import { fade } from "svelte/transition";
  import Tabelle from "@/components/MiddlePart/Tabelle.svelte";
  
  let name = "";
  
</script>

<main transition:fade>

  Hier kommt der Header hin

  <Tabelle />


  Hier Kommt der Footer hin
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
