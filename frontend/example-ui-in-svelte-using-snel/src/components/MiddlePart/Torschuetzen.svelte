<script>
    import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'
    

    let ergebnisTorschuetze = '';
    let promise;

promise = getTorschuetze();

async function getTorschuetze() {
    let uri = 'https://www.openligadb.de/api/getgoalgetters/bl1/2022'
    const result = await Request.get(uri)
    ergebnisTorschuetze = result;
    console.log(ergebnisTorschuetze[0])
}



</script>
{#await promise}
{:then}
    <div allign="center">
        <table border="1">
            <tr>
            <td style="background-color:#00aaff"><h1>Name</h1></td>
            <td style="background-color:#00fff7"><h2>Tore</h2></td>
            </tr>
            {#each ergebnisTorschuetze as torschuetzenplatz}
            <tr>
            <td style="background-color:#00fff7">{torschuetzenplatz.GoalGetterName}</td>
            <td style="background-color:#00aaff">{torschuetzenplatz.GoalCount}</td> 
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