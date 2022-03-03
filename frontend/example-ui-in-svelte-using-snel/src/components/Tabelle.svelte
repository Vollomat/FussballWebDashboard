<script>

let ergebnisTabelle = '';

async function getTabelle() {
    let uri = 'https://www.openligadb.de/api/getbltable/bl1/2021'
    const result = await Request.get(uri)
    ergebnisTabelle = result;
    console.log(ergebnisTabelle[0])
}



</script>

<h2>
<form>
    <input type=button value="Tabelle anzeigen" onclick="getTabelle();">
 </form>
 {ergebnisTabelle}[0].Goals
</h2>

<style>


</style>