<script>

    import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

    let searchTerm = '2021';
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
        let uri = 'https://www.openligadb.de/api/getavailableteams/bl1/2021'
        const result = await Request.get(uri)
        ergebnis = result;
        if (thisSearchTerm == searchTerm) {
            ergebniseins = ergebnis[0];
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
    <a href="Unterseite.svelte"> <img src={ergebniseins.TeamIconUrl} alt = {ergebniseins.ShortName}> </a>
    <img src={ergebniszwei} alt = "">
    <img src={ergebnisdrei} alt = "">
    <img src={ergebnisvier} alt = "">
    <img src={ergebnisfuenf} alt = "">
    <img src={ergebnissechs} alt = "">
    <br>
    <img src={ergebnissieben} alt = "">
    <img src={ergebnisacht} alt = "">
    <img src={ergebnisneun} alt = "">
    <img src={ergebniszehn} alt = "">
    <img src={ergebniself} alt = ""> 
    <img src={ergebniszwoelf} alt = "">
    <br>
    <img src={ergebnisdreizehn} alt = "">
    <img src={ergebnisvierzehn} alt = "">
    <img src={ergebnisfuenfzehn} alt = "">
    <img src={ergebnissechszehn} alt = "">
    <img src={ergebnissiebzehn} alt = "">
    <img src={ergebnisachtzehn} alt = "">

  {/await}

    <style>
    img {
    text-align: center;
    width: 15%;
    height: 15%;
  }

    </style>