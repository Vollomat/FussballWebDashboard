<script>
    import { Request } from 'https://deno.land/x/request@1.3.2/mod.ts'

    import { SortService, Direction } from "https://deno.land/x/sort@v1.1.1/mod.ts"
    

    let ergebnisTorschuetze = '';
    let promise;

promise = getTorschuetze();

async function getTorschuetze() {
    let uri = 'https://www.openligadb.de/api/getgoalgetters/bl1/2021'
    const result = await Request.get(uri)
    const sortedResult = SortService.sort(result, [{ fieldName: 'GoalCount', direction: Direction.DESCENDING }])
    ergebnisTorschuetze = sortedResult
}



</script>
{#await promise}
{:then}
    <div allign="center">
        <table border="1">
            <tr>
            <td><h1>Platz</h1></td>
            <td><h1>Name</h1></td>
            <td><h2>Tore</h2></td>
            </tr>
            {#each ergebnisTorschuetze as torschuetzenplatz, i}
            <tr>
            <td>{i+1}</td>
            <td>{torschuetzenplatz.GoalGetterName}</td>
            <td>{torschuetzenplatz.GoalCount}</td> 
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