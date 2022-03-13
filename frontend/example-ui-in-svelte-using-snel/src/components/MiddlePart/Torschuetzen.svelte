<script>
    import { Request } from "https://deno.land/x/request@1.3.2/mod.ts";

    import {
        SortService,
        Direction,
    } from "https://deno.land/x/sort@v1.1.1/mod.ts";

    let ergebnisTorschuetze = "";
    let promise;

    promise = getTorschuetze();

    async function getTorschuetze() {
        let uri = "https://www.openligadb.de/api/getgoalgetters/bl1/2021";
        const result = await Request.get(uri);
        const sortedResult = SortService.sort(result, [
            { fieldName: "GoalCount", direction: Direction.DESCENDING },
        ]);
        ergebnisTorschuetze = sortedResult;
    }
</script>

{#await promise};
{:then}
    <div allign="center">
        <h1>Top 10 Bundesliga Torschützen</h1>
        <table border="1">
            <tr>
                <th class="c1">Platz</th>
                <th class="c2">Name</th>
                <th class="c3">Tore</th>
            </tr>
            {#each ergebnisTorschuetze.slice(0, 10) as torschuetzenplatz, i}
            {#if (i == 0)}
            <tr>
                <td class="ersterPlatz">1.</td>
                <td class="ersterPlatz">{torschuetzenplatz.GoalGetterName}</td>
                <td class="ersterPlatz">{torschuetzenplatz.GoalCount}</td>
            </tr>

            {:else if (i == 1)}
            <tr>
                <td class="zweiterPlatz">2.</td>
                <td class="zweiterPlatz">{torschuetzenplatz.GoalGetterName}</td>
                <td class="zweiterPlatz">{torschuetzenplatz.GoalCount}</td>
            </tr>

            {:else if (i == 2)}
            <tr>
                <td class="dritterPlatz">3.</td>
                <td class="dritterPlatz">{torschuetzenplatz.GoalGetterName}</td>
                <td class="dritterPlatz">{torschuetzenplatz.GoalCount}</td>
            </tr>

            {:else if (i > 2)}
                <tr>
                    <td class="c1">{i + 1}.</td>
                    <td class="c2">{torschuetzenplatz.GoalGetterName}</td>
                    <td class="c3">{torschuetzenplatz.GoalCount}</td>
                </tr>
            {/if}
            {/each}
        </table>
    </div>
{/await}

<style>
    td {
        text-align: center;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    table {
        width: 20%;
        margin: 10px auto;
    }

    tr th {
        font-weight: bold;
    }
    tr th,
    tr td {
        padding: 5px;
    }
    th {
        border: 5px solid #c1dad7;
    }
    td {
        border: 5px solid #c1dad7;
    }
    .c1 {
        background: #4b8c74;
    }
    .c2 {
        background: #74c476;
    }
    .c3 {
        background: #a4e56d;
    }
    .ersterPlatz {
        background:  #ffd700;
        font-weight: 400px;
    }

    .zweiterPlatz {
        background:  #e0e3e3;
    }

    .dritterPlatz {
        background:  #CD7F32;
    }


</style>
