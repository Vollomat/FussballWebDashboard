<script>
    import { Request } from "https://deno.land/x/request@1.3.2/mod.ts";
    import { onMount } from "svelte";

    let spieleDerSaison;
    let promise;
    let promiseSpieltage;
    let ausgewaehlterSpieltag = 0;
    let hasmatchresult = false;
    let filteredGames = [];

    onMount(async () => {
        await getSpielplan();
        filteredGames = spieleDerSaison;
    });

    async function getSpielplan() {
        let uri = "https://www.openligadb.de/api/getmatchdata/bl1/2021";
        const result = await Request.get(uri);
        spieleDerSaison = result;
        console.log(spieleDerSaison);
    }

    function getSpieleDesSpieltags() {
        filteredGames = [];
        console.log(spieleDerSaison.GroupOrderID);

        for (const spielDerSaison of spieleDerSaison) {
            console.log(JSON.stringify(spielDerSaison));
            if (ausgewaehlterSpieltag === spielDerSaison.Group.GroupOrderID) {
                filteredGames.push(spielDerSaison);
                console.log("bin in methode");
            }
        }

        filteredGames;
    }

    
    function checkcount(spielplan) {
        console.log("bin in checkcount");
        if (spielplan.MatchResults.length > 0) {
            return true;
        }
        return false;
    }
</script>

<center>
    {#await promiseSpieltage};
    {:then}
        <div allign="center">
            <h2><label for="myBrowser">Welchen Spieltag wollen Sie sehen?</label></h2>
            <input
                bind:value={ausgewaehlterSpieltag}
                list="Spieltage"
                type="number"
                name="Spieltage"
            />

            <datalist id="Spieltage">
                {#each Array(34) as _, index (index)}
                    <option value={index + 1} Spieltag />{/each}
            </datalist>

            <button
                id="getSpielplan"
                on:click={getSpieleDesSpieltags}
                type="getSpielplan">Spieltag anzeigen</button>
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
                {#each filteredGames as filteredGame}
                    <tr>
                        <td>&nbsp {filteredGame.Group.GroupOrderID} &nbsp</td>
                        <td style="background-color:#243D85">&nbsp {filteredGame.MatchDateTime} &nbsp</td>
                        <td>&nbsp {filteredGame.Team1.TeamName} &nbsp</td>
                        <td style="background-color:#243D85">&nbsp {filteredGame.Team2.TeamName} &nbsp</td>
                        {#if checkcount(filteredGame)}
                            <td>&nbsp {filteredGame.MatchResults[0].PointsTeam1} : {filteredGame.MatchResults[0].PointsTeam2} &nbsp</td>
                        {:else}
                            <td>&nbsp --- : --- &nbsp</td>
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
        font-family: "Lato", sans-serif;
    }

    table{
        width: 60%;
    }

    label{
        color: white;
    }
</style>
