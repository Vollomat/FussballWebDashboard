<script>
    import { Request } from "https://deno.land/x/request@1.3.2/mod.ts";

    let spiele = "";
    let promise;

    promise = getSpielplan();

    async function getSpielplan() {
        let uri = "https://www.openligadb.de/api/getmatchdata/bl1/2021";
        const result = await Request.get(uri);
        spiele = result;
    }
</script>

<center>
{#await promise};
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
            {#each spiele as spielplan}
            <tr>
            <td>&nbsp {spielplan.Group.GroupOrderID} &nbsp</td>
            <td style="background-color:#243D85">&nbsp {spielplan.MatchDateTime} &nbsp</td> 
            <td>&nbsp {spielplan.Team1.TeamName} &nbsp</td>
            <td style="background-color:#243D85">&nbsp {spielplan.Team2.TeamName} &nbsp</td>
            <td>&nbsp {spielplan.MatchResults.PointsTeam1} : {spielplan.MatchResults.PointsTeam2} &nbsp</td>
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
    
</style>
