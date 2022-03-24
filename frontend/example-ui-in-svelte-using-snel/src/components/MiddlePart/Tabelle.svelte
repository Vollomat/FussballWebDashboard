<script>
    import { Request } from "https://deno.land/x/request@1.3.2/mod.ts";
    import { statusDerSeite } from "./../stores.js";

    let ergebnisTabelle = "";
    let promise;
    promise = getTabelle();
    async function getTabelle() {
        let uri = "https://www.openligadb.de/api/getbltable/bl1/2021";
        const result = await Request.get(uri);
        ergebnisTabelle = result;
        console.log(ergebnisTabelle[0]);
    }


</script>

<center>
    {#await promise};
    {:then}
        <div allign="center">
            <table border="1">
                <tr>
                    <td style="background-color:#243D85"><h2>Platz</h2></td>
                    <td><h2>Verein</h2></td>
                    <td style="background-color:#243D85">&nbsp Punkte &nbsp</td>
                    <td>&nbsp Sp &nbsp</td>
                    <td style="background-color:#243D85">&nbsp S &nbsp</td>
                    <td>&nbsp U &nbsp</td>
                    <td style="background-color:#243D85">&nbsp N &nbsp</td>
                    <td>&nbsp T &nbsp</td>
                    <td style="background-color:#243D85">&nbsp GT &nbsp</td>
                </tr>
                {#each ergebnisTabelle as tabellenplatz, i}
                    <tr>
                        <td style="background-color:#243D85"
                            >&nbsp {i + 1}. &nbsp</td>

                        <div class="body1">
                            <div class="profile">
                                <td
                                    class="linkeSeite"
                                    style="border-color: transparent;"><img
                                        src={tabellenplatz.TeamIconUrl}
                                        alt="Unknown"
                                        width="50"/>&nbsp &nbsp {tabellenplatz.TeamName}
                                </td>

                                <div class="content">
                                    <div class="header">
                                        <img
                                            src={tabellenplatz.TeamIconUrl}
                                            alt="Unknown"
                                            width="50"/>
                                        <div class="infos">
                                            <h3 class="name">
                                                {tabellenplatz.TeamName}
                                            </h3>
                                            <p class="title">
                                                {tabellenplatz.ShortName}
                                            </p>
                                        </div>
                                    </div>
                                    <div class="body">
                                        <p>
                                            Spiele: {tabellenplatz.Matches}
                                            <br />
                                            Punkte: {tabellenplatz.Points}
                                            <br />
                                            Gewonnen: {tabellenplatz.Won} <br />
                                            Verloren: {tabellenplatz.Lost}
                                            <br />
                                            Gleichstand: {tabellenplatz.Draw}
                                            <br />
                                            Tore: {tabellenplatz.Goals} <br />
                                            Gegnertore: {tabellenplatz.OpponentGoals}
                                            <br />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <td style="background-color:#243D85"
                            >&nbsp {tabellenplatz.Points} &nbsp</td>
                        <td>&nbsp {tabellenplatz.Matches} &nbsp</td>
                        <td style="background-color:#243D85"
                            >&nbsp {tabellenplatz.Won}&nbsp</td>
                        <td>&nbsp {tabellenplatz.Draw} &nbsp</td>
                        <td style="background-color:#243D85"
                            >&nbsp {tabellenplatz.Lost} &nbsp</td>
                        <td>&nbsp {tabellenplatz.Goals} &nbsp</td>
                        <td style="background-color:#243D85"
                            >&nbsp {tabellenplatz.OpponentGoals} &nbsp</td>
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
        height: 2cm;
    }
    .linkeSeite {
        text-align: left;
    }
    table {
        width: 25cm;
    }

    /*Tooltip Style*/
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .body1 {
        font-family: "Lato", sans-serif;
        height: 10vh; /* Platz um das Bild herum */
        width: 30vh;
    }

    /*Boxen um den Tooltip*/
    .profile {
        position: absolute;
        margin: 0 0;
        cursor: initial;
        transition: 0.2s;
        width: 10.23cm;
        height: 2cm;
        box-shadow: 0 0 0 0.5px white;
    }

    .profile:hover {
        box-shadow: 0 0 0 0.5px white, 0 0 0 5px rgb(36, 61, 133);
    }

    .content {
        position: absolute;
        bottom: -320px;
        left: -20px;
        padding: 20px;
        min-width: 380px;
        background-color: rgb(36, 61, 133);
        border: 0.5px solid white;
        border-radius: 10px;
        visibility: hidden;
        opacity: 0;
        transform: translateY(-10px);
        transition: 0.5s;
        z-index: 1;
    }

    .content .header {
        display: flex;
        align-items: center;
    }

    .content .header img {
        grid-column: 1/2;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        object-fit: cover;
    }

    .content .header .infos {
        margin-left: 1em;
    }

    .content .header .infos .name {
        font-size: 1.3em;
        color: whitesmoke;
        letter-spacing: 1px;
        font-size: 600;
    }

    .content .header .infos .title {
        font-size: 0.9em;
        color: whitesmoke;
        font-weight: 500;
        text-align: left;
    }

    .content .body {
        padding: 1em;
    }

    .content .body p {
        font-size: 0.95em;
        color: whitesmoke;
        text-align: left;
    }

    .profile:hover .content {
        visibility: visible;
        opacity: 1;
        /*transform: translateX(-15%) translateY(0px);*/
    }
</style>
