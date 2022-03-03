<script>
    import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

    let ergebnisTabelle = '';
    let promise;

promise = getTabelle();

async function getTabelle() {
    let uri = 'https://www.openligadb.de/api/getbltable/bl1/2021'
    const result = await Request.get(uri)
    ergebnisTabelle = result;
    console.log(ergebnisTabelle[0])
}



</script>
{#await promise}
{:then}

      <table>
        <tr>
        <td></td>
        <td><h2>Teamname</h2></td>
        <td><h2>Punkte</h2></td>
        <td><h2>Tore</h2></td>
        <td><h2>Gegentore</h2></td>
        </tr>
        {#each ergebnisTabelle as tabellenplatz}
        <tr>
        <td><img src = {tabellenplatz.TeamIconUrl} alt="Unknown"></td> 
        <td>{tabellenplatz.TeamName}</td>
        <td>{tabellenplatz.Points}</td>
        <td>{tabellenplatz.Goals}</td>
        <td>{tabellenplatz.OpponentGoals}</td>
        </tr>
        {/each}
    </table>
{/await}

<style>
td{
    height: 2%;
    width:20%;
}

img{
    height: 2%;
    width:20%;
}

</style>