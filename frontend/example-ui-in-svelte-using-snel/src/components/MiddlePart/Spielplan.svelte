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
            <td style="background-color:#243D85">&nbsp Datum &nbsp</td>
            <td>&nbsp Ort &nbsp</td>
            <td style="background-color:#243D85">&nbsp Mannschaft 1 &nbsp</td>
            <td>&nbsp Mannschaft 2 &nbsp</td>
            </tr>
            {#each spiele as spielplan}
            <tr>
            <td>&nbsp {spielplan.Group.GroupOrderID} &nbsp</td>
            <td style="background-color:#243D85">&nbsp {spielplan.MatchDateTime} &nbsp</td> 
            <td>&nbsp {spielplan.LocationCity} &nbsp</td>
            <td style="background-color:#243D85">&nbsp {spielplan.Team1.TeamName} &nbsp</td>
            <td>&nbsp {spielplan.TeamName} &nbsp</td>
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
