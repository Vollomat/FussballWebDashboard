<script>

    import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

    let searchTerm = '';
    let promise;
    let src = '';
    let ergebnis = '';
    let ergebniseins = '';
    let ergebniszwei = '';
    let ergebnisdrei = '';
    let ergebnisvier = '';
    let ergebnisfuenf = '';
    let ergebnissechs = '';
    let ergebnissieben = '';
    let ergebnisacht = '';
    let ergebnisneun = '';
    let ergebniszehn = '';
    let ergebniself = '';
    let ergebniszwoelf = '';
    let ergebnisdreizehn = '';
    let ergebnisvierzehn = '';
    let ergebnisfuenfzehn = '';
    let ergebnissechszehn = '';
    let ergebnissiebzehn = '';
    let ergebnisachtzehn = '';



    $: if (searchTerm != '') {
        
        promise = getPhoto();
    }
  
    async function getPhoto() {
        let thisSearchTerm = searchTerm;
        const result = await Request.get('https://www.openligadb.de/api/getavailableteams/bl1/2021')
        ergebnis = result;
        if (thisSearchTerm == searchTerm) {
            ergebniseins = ergebnis[0].TeamIconUrl;
            ergebniszwei = ergebnis[1].TeamIconUrl;
            ergebnisdrei = ergebnis[2].TeamIconUrl;
            ergebnisvier = ergebnis[3].TeamIconUrl;
            ergebnisfuenf = ergebnis[4].TeamIconUrl;
            ergebnissechs = ergebnis[5].TeamIconUrl;
            ergebnissieben = ergebnis[6].TeamIconUrl;
            ergebnisacht = ergebnis[7].TeamIconUrl;
            ergebnisneun = ergebnis[8].TeamIconUrl;
            ergebniszehn = ergebnis[9].TeamIconUrl;
            ergebniself = ergebnis[10].TeamIconUrl;
            ergebniszwoelf = ergebnis[11].TeamIconUrl;
            ergebnisdreizehn = ergebnis[12].TeamIconUrl;
            ergebnisvierzehn = ergebnis[13].TeamIconUrl;
            ergebnisfuenfzehn = ergebnis[14].TeamIconUrl;
            ergebnissechszehn = ergebnis[15].TeamIconUrl;
            ergebnissiebzehn = ergebnis[16].TeamIconUrl;
            ergebnisachtzehn = ergebnis[17].TeamIconUrl;
        }
    }

</script>
<h1> Fußball Bundesliga Manager</h1>
  <input type="text" placeholder="Für welche Saison?" bind:value={searchTerm} />
  <br>
   {#await promise}
   <img src = "https://www.designtagebuch.de/wp-content/uploads/mediathek//2017/12/bundesliga-logo.png" alt="Loading...">
   {:then}
    <a href="Unterseite.svelte"> <img src={ergebniseins} alt = "Loading ..."> </a>
    <img src={ergebniszwei} alt = "Loading ...">
    <img src={ergebnisdrei} alt = "Loading ...">
    <img src={ergebnisvier} alt = "Loading ...">
    <img src={ergebnisfuenf} alt = "Loading ...">
    <img src={ergebnissechs} alt = "Loading ...">
    <br>
    <img src={ergebnissieben} alt = "Loading ...">
    <img src={ergebnisacht} alt = "Loading ...">
    <img src={ergebnisneun} alt = "Loading ...">
    <img src={ergebniszehn} alt = "Loading ...">
    <img src={ergebniself} alt = "Loading ..."> 
    <img src={ergebniszwoelf} alt = "Loading ...">
    <br>
    <img src={ergebnisdreizehn} alt = "Loading ...">
    <img src={ergebnisvierzehn} alt = "Loading ...">
    <img src={ergebnisfuenfzehn} alt = "Loading ...">
    <img src={ergebnissechszehn} alt = "Loading ...">
    <img src={ergebnissiebzehn} alt = "Loading ...">
    <img src={ergebnisachtzehn} alt = "Loading ...">

  {/await}

    <style>
    img {
    text-align: center;
    width: 15%;
    height: 15%;
  }

    </style>