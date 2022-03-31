<script>
    import { Request } from "https://deno.land/x/request@1.3.2/mod.ts";

    let SpieleDerSaison = "";
    let promise;
    let promiseSpieltage;
    let AuswahloptionenSpieltage;
    let AusgewaehlterSpieltag = "";
    let hasmatchresult = false;

    promise = getSpielplan();

    async function getSpielplan() {
        let uri = "https://www.openligadb.de/api/getmatchdata/bl1/2021";
        const result = await Request.get(uri);
        SpieleDerSaison = result;
        console.log(SpieleDerSaison)
    }
    

    function getSpieleDesSpieltags(){
        
        AuswahloptionenSpieltage = document.getElementById("SP").value;
        AuswahloptionenSpieltage = parseInt(AuswahloptionenSpieltage);
        alert(AuswahloptionenSpieltage);
        console.log(SpieleDerSaison.GroupOrderID)
        for(let i = 0; i < SpieleDerSaison.length; i++) {
            if (AuswahloptionenSpieltage === SpieleDerSaison[i].GroupOrderID){
                AusgewaehlterSpieltag.push(SpieleDerSaison[i]);
                console.log("bin in methode")
                console.log(SpieleDerSaison[i].GroupOrderID)
            }
            
        }
        
        SpieleDerSaison = AusgewaehlterSpieltag;

    }

    function getSpiele(){
        promiseSpieltage = getSpieleDesSpieltags();
    }


    function checkcount(spielplan){
        console.log("bin in checkcount")
        if(spielplan.MatchResults.length > 0){
            return true
        }
            return false
    }

</script>

<center>
{#await promiseSpieltage};
{:then}
    <div allign="center">
        <h2>&nbsp Welchen Spieltag wollen Sie sehen? &nbsp</h2>
        <input list="Spieltage" id="SP" name="Spieltage" />  
        
        <datalist id="Spieltage">

        {#each Array(34) as _, index (index)}
            <option value= {index + 1}  Spieltag >
        {/each}
        </datalist>

        <button id="getSpielplan" on:click|once={getSpiele} type="getSpielplan">Spieltag anzeigen</button>
        
    </div>
{/await}

{#await promiseSpieltage};
{:then}
    <div allign="center">
        <table border="1">
            <tr>
            <td><h2>&nbsp Spieltag &nbsp</h2></td>
            <td style="background-color:#243D85"><h2>&nbsp Datum &nbsp</h2></td>
            <td><h2>&nbsp Team 1 &nbsp</h2></td>
            <td style="background-color:#243D85"><h2>&nbsp Team 2 &nbsp</h2></td>
            <td><h2>&nbsp Ergebnis &nbsp</h2></td>
            </tr>
            {#each SpieleDerSaison as spielplan}
                
                <tr>
                <td>&nbsp {spielplan.Group.GroupOrderID} &nbsp</td>
                <td style="background-color:#243D85">&nbsp {spielplan.MatchDateTime} &nbsp</td> 
                <td>&nbsp {spielplan.Team1.TeamName} &nbsp</td>
                <td style="background-color:#243D85">&nbsp {spielplan.Team2.TeamName} &nbsp</td>
                {#if checkcount(spielplan)}
                    <td>&nbsp {spielplan.MatchResults[0].PointsTeam1} : {spielplan.MatchResults[0].PointsTeam2} &nbsp</td>
                {:else }
                <td>&nbsp --- : --- &nbsp</td>
                {/if}
                </tr>
            {/each}
        </table>
    
    </div>
{/await}
</center>

<style>
td {
    text-align: center;
    color: white;
    font-family: "Lato", sans-serif;
}

table{
    width: 60%;
}
    
</style>
