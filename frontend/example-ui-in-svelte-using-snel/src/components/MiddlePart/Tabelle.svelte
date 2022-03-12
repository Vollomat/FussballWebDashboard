<script>
    import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'
    import { statusDerSeite } from './../stores.js'

    let ergebnisTabelle = '';
    let promise;
promise = getTabelle();
async function getTabelle() {
    let uri = 'https://www.openligadb.de/api/getbltable/bl1/2021'
    const result = await Request.get(uri)
    ergebnisTabelle = result;
    console.log(ergebnisTabelle[0])
}

function changeStatus(){
    alert("Hallo");
    statusDerSeite.set(2);
}
</script>

<center> 
{#await promise}
{:then}
    <div allign="center">
        <table border="1">
            <tr>
            <td style="background-color:#243D85"><h2>Platz</h2></td>
            <td ><h2>Verein</h2></td>
            <td style="background-color:#243D85">&nbsp Punkte &nbsp</td>
            <td >&nbsp Sp &nbsp</td>
            <td style="background-color:#243D85">&nbsp S &nbsp</td>
            <td >&nbsp U &nbsp</td>
            <td style="background-color:#243D85">&nbsp N &nbsp</td>
            <td >&nbsp T &nbsp</td>
            <td style="background-color:#243D85">&nbsp GT &nbsp</td>
            </tr>
            {#each ergebnisTabelle as tabellenplatz, i}
            <tr>

            <td style="background-color:#243D85">&nbsp {i+1}. &nbsp</td>
            <td class="linkeSeite" on:click|once={changeStatus} ><img src = {tabellenplatz.TeamIconUrl} alt="Unknown" width="50">&nbsp &nbsp {tabellenplatz.TeamName} </td>

            <td style="background-color:#243D85">&nbsp {tabellenplatz.Points} &nbsp</td>
            <td >&nbsp {tabellenplatz.Matches} &nbsp</td> 
            <td style="background-color:#243D85">&nbsp {tabellenplatz.Won}&nbsp</td>
            <td >&nbsp {tabellenplatz.Draw} &nbsp</td>
            <td style="background-color:#243D85">&nbsp {tabellenplatz.Lost} &nbsp</td>
            <td >&nbsp {tabellenplatz.Goals} &nbsp</td>
            <td style="background-color:#243D85">&nbsp {tabellenplatz.OpponentGoals} &nbsp</td>
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
</style>