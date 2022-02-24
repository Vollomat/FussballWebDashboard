<script>
    let userInput = "";

    let listOfUserInputs = [];

    function handleClick() {
        listOfUserInputs.push(userInput);
        alert(JSON.stringify(listOfUserInputs));
    }
</script>

<div class="ourfancybackground">
    <input bind:value={userInput} />

    {#if userInput !== ""}
        <h1>You have entered {userInput}!</h1>
        <button on:click={handleClick}> Add User Input </button>
    {/if}
</div>

overall we have collected the following user inputs:

<p><br /></p>
{listOfUserInputs.length}

{#each listOfUserInputs as entry}
    {entry}
{/each}

<style>
    .ourfancybackground {
        background-color: blue;
    }
</style>
