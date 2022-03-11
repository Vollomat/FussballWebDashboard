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
{#each ergebnisTabelle as tabellenplatz, i}
<!-- Logo als Bild hier rein [TeamIconUrl]-->


<h1>Verein {tabellenplatz.TeamName}</h1>
<h2>Kurzname Verein {tabellenplatz.ShortName}</h2>

<p>
    Punkte: {tabellenplatz.Points} <br />
    Spiele: {tabellenplatz.Matches} <br />
    Gewonnen: [Won] <br />
    Verloren: [Lost] <br />
    Gleichstand: [Draw] <br />
    Tore: [Goals] <br />
    Gegnertore: [OpponentGoals] <br />
    
</p>

{/each}
{/await}


<style>


</style>
