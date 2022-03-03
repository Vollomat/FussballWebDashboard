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

      <table border="1">
        <tr>
        <td style="background-color:#00aaff"><h1>Verein</h1></td>
        <td style="background-color:#00fff7"><h2>Punkte</h2></td>
        <td style="background-color:#00aaff"><h2>Sp</h2></td>
        <td style="background-color:#00fff7"><h2>S</h2></td>
        <td style="background-color:#00aaff"><h2>U</h2></td>
        <td style="background-color:#00fff7"><h2>N</h2></td>
        <td style="background-color:#00aaff"><h2>T</h2></td>
        <td style="background-color:#00fff7"><h2>GT</h2></td>
        </tr>
        {#each ergebnisTabelle as tabellenplatz}
        <tr>
        <td class="linkeSeite" style="background-color:#00aaff"><img src = {tabellenplatz.TeamIconUrl} alt="Unknown" width="30">{tabellenplatz.TeamName}</td>
        <td style="background-color:#00fff7">{tabellenplatz.Points}</td>
        <td style="background-color:#00aaff">{tabellenplatz.Matches}</td> 
        <td style="background-color:#00fff7">{tabellenplatz.Won}</td>
        <td style="background-color:#00aaff">{tabellenplatz.Draw}</td>
        <td style="background-color:#00fff7">{tabellenplatz.Lost}</td>
        <td style="background-color:#00aaff">{tabellenplatz.Goals}</td>
        <td style="background-color:#00fff7">{tabellenplatz.OpponentGoals}</td>
        </tr>
        {/each}
    </table>
{/await}

<style>
td{
  text-align: center;
}

.linkeSeite{
    text-align: left;
}

</style>