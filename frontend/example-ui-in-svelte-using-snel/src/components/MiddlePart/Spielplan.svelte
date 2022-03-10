<script>
    import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'
    

    let spiele = '';
    let promise;

promise = getSpielplan();

async function getSpielplan() {
    let uri = 'https://www.openligadb.de/api/getbltable/bl1/2021'
    const result = await Request.get(uri)
    spiele = result;
    console.log(spiele[0])
}



</script>
{#await promise};
{:then}
    <div allign="center">
        <table border="1">
            <tr>
            <td style="background-color:#00aaff"><h2>Spieltag</h2></td>
            <td style="background-color:#00aaff"><h2>Datum</h2></td>
            <td style="background-color:#00aaff"><h2>Ort</h2></td>
            <td style="background-color:#00fff7"><h2>Mannschaft 1</h2></td>
            <td style="background-color:#00aaff"><h2>Mannschaft 2</h2></td>
            </tr>
            {#each spiele as spielplan}
            <tr>
            <td style="background-color:#00aaff">{spielplan.TeamName}</td>
            <td style="background-color:#00fff7">{spielplan.GroupOrderID}</td>
            <td style="background-color:#00aaff">{spielplan.MatchDateTime}</td> 
            <td style="background-color:#00fff7">{spielplan.Location}</td>
            <td style="background-color:#00aaff">{spielplan.TeamName}</td>
            <td style="background-color:#00fff7">{spielplan.TeamName}</td>
            </tr>
            {/each}
        </table>
    </div>
{/await}

<style>
td{
  text-align: center;
}


</style>