<script>
    import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

    let VereineDerSaison = '';
    let promise;
    let promiseSpiele;
    let mannschaft_a;
    let mannschaft_b;
    let spiele = '';
    let splitDate;
    promise = getTabelle();

async function getTabelle() {
    let uri = 'https://www.openligadb.de/api/getavailableteams/bl1/2021'
    const result = await Request.get(uri)
     VereineDerSaison = result;
     console.log(VereineDerSaison)
}

function getMatches(){
    promiseSpiele = showMatches();
}

function changeDate(){
    for (let i=0; i < spiele.length; i++) {
        console.log(spieleDerSaison[i].MatchDateTime)
        splitDate = spieleDerSaison[i].MatchDateTime.split("T", 1);
        console.log(splitDate)
        spieleDerSaison[i].MatchDateTime = splitDate;
     } 
}

async function showMatches(){
    mannschaft_a = document.getElementById("MA").value;
    mannschaft_b = document.getElementById("MB").value;
    if(mannschaft_a !== "" && mannschaft_b !== "") {
        let uri = 'https://www.openligadb.de/api/getmatchdata/' + document.getElementsByName(mannschaft_a).item(0).id + '/' + document.getElementsByName(mannschaft_b).item(0).id;
        const result = await Request.get(uri)
        spiele = result;
        console.log(spiele)
    } 
}

function checkcount(spiel){
    
    if(spiel.MatchResults.length > 0){
        return true
    }
    return false
}
</script>

<center> 
{#await promise}
{:then}
    <div allign="center">
        <h2><label for="myBrowser"> Welche Spiele wollen sie sehen?</label></h2>
        <label for="myBrowser">Wähle eine Mannschaft aus:</label>
        <input list="Mannschaft A" id="MA" name="MannschaftA" />  
        <label for="myBrowser">Wähle eine Mannschaft aus:</label>
        <input list="Mannschaft B" id="MB" name="MannschaftB" />
        <datalist id="Mannschaft A">
        {#each VereineDerSaison as Verein}
            <option value= {Verein.ShortName}>
        {/each}
        </datalist>
        <datalist id="Mannschaft B">
        {#each VereineDerSaison as Verein}
             <option value= {Verein.ShortName} name= {Verein.ShortName} id= {Verein.TeamId} >
        {/each}
        </datalist>
        <br />
        <button id="showMatches" on:click={getMatches} type="ShowMatches">Spiele anzeigen</button>
    </div>
{/await}
{#await promiseSpiele}
{:then}
        <div allign="center">
        <table border="1">
            <tr>
            <td style="background-color:#243D85">&nbsp Datum &nbsp </td>
            <td ><h2>Liga</h2></td> 
            <td style="background-color:#243D85">&nbsp Spieltag &nbsp </td>
            <td ><h2>Team 1</h2></td> 
            <td style="background-color:#243D85">&nbsp Tore &nbsp</td>
            <td ><h2>Team 2</h2></td> 
            <td style="background-color:#243D85">&nbsp Tore &nbsp</td>
            </tr>
            {#each spiele as spiel}
                <tr>
                <td style="background-color:#243D85">&nbsp {spiel.MatchDateTime} &nbsp</td>
                <td >&nbsp {spiel.LeagueName} &nbsp</td> 
                <td style="background-color:#243D85">&nbsp {spiel.Group.GroupName} &nbsp</td>
                <td class="linkeSeite" ><img src = {spiel.Team1.TeamIconUrl} alt="Unknown" width="50">&nbsp &nbsp {spiel.Team1.TeamName} </td>
                {#if checkcount(spiel)}
                    <td style="background-color:#243D85">&nbsp {spiel.MatchResults[0].PointsTeam1} &nbsp</td>
                    <td class="linkeSeite" ><img src = {spiel.Team2.TeamIconUrl} alt="Unknown" width="50">&nbsp &nbsp {spiel.Team2.TeamName} </td>     
                    <td style="background-color:#243D85">&nbsp {spiel.MatchResults[0].PointsTeam2} &nbsp</td>
                {:else }
                    <td style="background-color:#243D85">&nbsp ---- &nbsp</td>
                    <td class="linkeSeite" ><img src = {spiel.Team2.TeamIconUrl} alt="Unknown" width="50">&nbsp &nbsp {spiel.Team2.TeamName} </td>          
                    <td style="background-color:#243D85">&nbsp ---- &nbsp</td>
                {/if}
                </tr>
            {/each}
        </table>
    </div>
{/await}
</center>

<style>
td{
  text-align: center;
  color: white;
  font-family: 'Lato', sans-serif;
  height: 50px;
}
.linkeSeite{
    text-align: left;
}
table{
    width: 60%;
}
h2{
    color: white;
}
label{
    color: white;
}

</style>