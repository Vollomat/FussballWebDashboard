<script>

let ergebnisTabelle = '';

async function getTabellen() {
    let uri = 'https://www.openligadb.de/api/getbltable/bl1/2021'
    const result = await Request.get(uri)
    ergebnisTabelle = result;
}



</script>

<h2>

{ergebnisTabelle}[0].Goals


</h2>

<style>


</style>