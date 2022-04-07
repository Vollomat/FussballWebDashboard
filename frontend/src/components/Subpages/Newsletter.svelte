<script>

</script>

<div class="wrapper">
    <h2>
        Warum du unseren Newsletter abonnieren solltest:
    </h2>

<<<<<<< HEAD:frontend/src/components/Subpages/Newsletter.svelte
    <p><br /></p>
=======
    <p></p>
>>>>>>> 7987c563142c548acc8e5d7a27b6156990c4b38c:frontend/example-ui-in-svelte-using-snel/src/components/Subpages/Newsletter.svelte

    <li>Du erfährst rechtzeitig von neuen Spielen und deren Verlauf</li>
    <li>Du erhältst exklusive Insights</li>
    <li>Du erhältst Zugang zu exklusiven Gewinnspielen</li>
</div>

<p><br /></p>

<form action="#">
    <div class="newsletter">
        <div class="input-box">
            <input type="email" id="email" name="email" placeholder="Gebe deine E-Mail-Adresse ein" required>
            <button>
                Abonnieren
            </button>
        </div>
    </div>
</form>

<style>
h2 {
    color: whitesmoke;
    size: 2cm;
    font-family: "Lato", sans-serif;
}

li {
    color: whitesmoke;
    font-family: "Lato", sans-serif;
}

#email {
    width: 300px;
    outline: none;
    border-radius: 10px;
    background-color: rgb(3, 21, 32);
}

::placeholder {
	color:grey;
	opacity:1;
	transition: opacity 1s;
}

:focus::placeholder { opacity:0  }

button {
    padding: 9px 25px;
    background-color: rgb(36, 61, 133);
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.3s ease 0s;
    color: whitesmoke;
}

button:hover {
    background-color: rgb(85, 98, 173);
}

</style>