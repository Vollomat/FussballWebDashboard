<script>

</script>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kontakt</title>
    <link rel="icon" type="image/png" href="https://cdn.glitch.me/d439d6d0-1bac-45dc-89dc-45037a7528cf%2Ffilmklappe%20logo%202%20(1).png?v=1635105419950">
    <script src="https://kit.fontawesome.com/57d79c9300.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="../style.css">
</head>
<body>


<div class="wrapper">
    <h2>Kontakt zum Fussballdashboard-Team</h2>
    <br>

    <p>
        Bei Fragen, Anregungen oder Kritik wende dich gerne über unser Kontaktformular an uns.
    </p>
    <br>

    <h1>
        Kontaktformular:
    </h1>

    <form action="SENDEADRESSE" id="ft-form" method="POST" accept-charset="UTF-8">
        <fieldset>

            <p>Name:
            <p>
                <textarea class="contactname" required></textarea>
                <br>


            <p>E-Mail-Adresse:
            <p>
                <textarea class="contactname" required></textarea>
                <br>


            <p>Ihre Nachricht:
            <p>
                <textarea class="contactnachricht" required></textarea>
                <br>
                <br>
        </fieldset>

        <div>
            <input type="checkbox" id="Datenverarbeitung" name="Datenverarbeitung">
            <label for="Datenverarbeitung">Ich bestätige, dass ich mit der Verarbeitung meiner Eingaben <br> zum Zwecke
                der Anfragebearbeitung, einverstanden bin.</label>
        </div>

        <br>
        <button>Absenden</button>
        <p></p>
    </form>

</div>



    <p style="text-align: center; font-size: 10px;">© Fussballdashboard. All rights reserved.</p>


</body>

<h2>Sie erreichen uns für wichtige Rückfragen auch unter: patrick.vollstedt@fussballdashboard.de</h2>


<style>

    * {
        color: white;
    }


    button {
        color: black
    }
/*Kontaktformular*/
----------------------------------------------
details {
    font-size: 20px;
}

summary {
    color: white;
}

details[open] summary {
    background: #581520;
    margin-bottom: 1em;
}

.contactname {
    width: 400px;
    height: 50px;

}

.contactnachricht {
    width: 400px;
    height: 100px;

}

#ft-form [type=date],
#ft-form [type=email],
#ft-form [type=tel],
#ft-form [type=text],
#ft-form select,
#ft-form textarea {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    border-color: #581520;
    border-width: 5px;
    border-radius: 0;
    padding-top: .5rem;
    padding-right: .75rem;
    padding-bottom: .5rem;
    padding-left: .75rem;
    font-size: 1rem;
    line-height: 1.5rem
}

#ft-form * {
    box-sizing: border-box;
    border-width: 0;
    border-style: solid;
    border-color: white;
    outline: none;
}

</style>