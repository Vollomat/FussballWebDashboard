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
        <td><h2>Teamname</h2></td>
        <td><h2>Tore</h2></td>
        <td><h2>Punkte</h2></td>
        </tr>
        {#each ergebnisTabelle as tabellenplatz}
        <tr>
        <td>{tabellenplatz.TeamName}</td>
        <td>{tabellenplatz.Goals}</td>
        <td>{tabellenplatz.Points}</td>
        </tr>
        {/each}
    </table>
{/await}

<style>
td{
    height: 25px;
    width:20%;
}

</style>