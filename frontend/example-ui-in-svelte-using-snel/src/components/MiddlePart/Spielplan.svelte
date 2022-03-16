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
            <td><h2>&nbsp Ort &nbsp</h2></td>
            <td style="background-color:#243D85"><h2>&nbsp Mannschaft 1 &nbsp</h2></td>
            <td><h2>&nbsp Mannschaft 2 &nbsp</h2></td>
            </tr>
            {#each spiele as spielplan}
            <tr>
            <td><h2>&nbsp {spielplan.Group.GroupOrderID} &nbsp</h2></td>
            <td style="background-color:#243D85"><h2>&nbsp {spielplan.MatchDateTime} &nbsp</h2></td> 
            <td><h2>&nbsp {spielplan.Location.LocationCity} &nbsp</h2></td>
            <td style="background-color:#243D85"><h2>&nbsp {spielplan.Team1.TeamName} &nbsp</h2></td>
            <td><h2>&nbsp {spielplan.Team2.TeamName} &nbsp</h2></td>
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
        height: 50px;
    }
</style>
