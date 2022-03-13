<script>
    import Torschuetzen from "@/components/MiddlePart/Torschuetzen.svelte";
</script>

<header>
    <a href="index.html">
        <img
            class="logo"
            src="https://cdn.glitch.global/9b12190e-3bb9-40f3-8183-4852b3d97d98/ball.png?v=1646394397941"
            alt="logo"
        /></a
    >
    <nav>
        <ul class="nav_links">
            <li>
                <a href="../src/components/MiddlePart/Spielplan.svelte"
                    >Spielplan</a
                >
            </li>
            <li><a href="subpages/events.html">Clubs</a></li>
            <li><a href="subpages/preise.html">Spieler</a></li>
            <li><a href="../MiddlePart/Torschuetzen.svelte">Statistiken</a></li>
            <li><a href="subpages/preise.html">Videos</a></li>
        </ul>
    </nav>
    <!-- end navigation -->
    <a class="ticket" href="subpages/programm.html">
        <button class="btn btn2">Startseite</button>
    </a>
</header>

<!-- end header -->
<style>
    li,
    a,
    button {
        font-family: "Lato", sans-serif;
        font-weight: 500;
        font-size: 18px;
        color: #edf0f1;
        text-decoration: none;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 30px 10%;
    }

    .logo {
        margin-top: 20px;
        height: 150px;
        cursor: pointer;
    }

    .nav_links {
        list-style: none;
    }

    .nav_links li {
        display: inline-block;
        padding: 0 20px;
    }

    .nav_links li a {
        transition: all 0.3s ease 0s;
    }

    .nav_links li a:hover {
        color: rgb(36, 61, 133);
    }

    button {
        padding: 9px 25px;
        background-color: rgb(36, 61, 133);
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease 0s;
    }

    .ticket {
        display: inline-block;
        vertical-align: middle;
        margin: 10px 0;
    }

    /*evtl. wieder rausnehmen*/

    button:hover {
        background-color: rgb(85, 98, 173);
    }
</style>
