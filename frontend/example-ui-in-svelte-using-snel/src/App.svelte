<script>
  import { fade } from "svelte/transition";
  import Tabelle from "@/components/MiddlePart/Tabelle.svelte";
  import Footer from "@/components/Footers/Footer.svelte";
  import Header from "@/components/Headers/Header.svelte";
  import Vereine from "@/components/MiddlePart/Vereine.svelte";
  import Torschuetzen from "@/components/MiddlePart/Torschuetzen.svelte";
  import Spielplan from "@/components/MiddlePart/Spielplan.svelte";
  
  let name = "";
  let StatusDerSeite = "Startseite";
  
</script>

<main transition:fade>
  <body>
  <Header />

  {#if StatusDerSeite = "Startsseite"}
    <Vereine />
    <Tabelle />
    <Torschuetzen />
  {:else if StatusDerSeite = "Vereine"}
    <Spielplan />
  {/if}
  
  <Footer />

</body>
</main>

<style>
@import url("https://fonts.googleapis.com/css2?family=Urbanist:wght@200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
@import url("https://fonts.googleapis.com/css?family=Lato&display=swap");

/*FARBEN: rot: rgb(88, 21, 32); grau: rgb(37, 36, 36), hellgrau: rgb(46, 45, 45)*/
  body{
    background-color: rgb(3, 21, 32);
  }

  main {
    background-color: rgb(3, 21, 32);
    text-align: center;
    font-family: 'Lato', sans-serif;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
