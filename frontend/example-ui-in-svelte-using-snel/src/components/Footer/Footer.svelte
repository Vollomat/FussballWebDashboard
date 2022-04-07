
<script>
    import { statusDerSeite } from "./../stores.js";


    function changeStatusKontakt() {
        $statusDerSeite = "kontakt";
    }

    function changeStatusNewsletter() {
        $statusDerSeite = "newsletter";
    }

    function changeStatusImpressum() {
        $statusDerSeite = "impressum";
    }

    function changeStatusDatenschutz() {
        $statusDerSeite = "datenschutz";
    }



    
</script>

<footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <ul>
                    <li><h4>Kontakt</h4></li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a on:click={changeStatusKontakt}>Kontakt</a></li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a on:click={changeStatusNewsletter}>Newsletter</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <ul>
                    <li><h4>Rechtliches</h4></li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a on:click={changeStatusImpressum}>Impressum</a></li>
                    <!-- svelte-ignore a11y-missing-attribute -->
                    <li><a on:click={changeStatusDatenschutz}>Datenschutz</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Folge Uns Auf</h4>
                <div class="social-links">
                    <div class="facebook">
                        <div class="tooltip">
                            <a
                                href="https://www.facebook.com/BundesligaOfficial/">
                                <img
                                    src="https://cdn.glitch.global/9b12190e-3bb9-40f3-8183-4852b3d97d98/facebook%20(1).png?v=1646402392741"
                                    width="30"
                                    alt="alternativer_text"/>
                                </a>
                            <span class="tooltiptext">Facebook</span>
                        </div>
                    </div>
                    <div class="twitter">
                        <div class="tooltip">
                            <a href="https://twitter.com/Bundesliga_DE">
                                <img
                                    src="https://cdn.glitch.global/9b12190e-3bb9-40f3-8183-4852b3d97d98/twitter%20(3).png?v=1646428261470"
                                    width="30"
                                    alt="alternativer_text"/>
                                </a>
                            <span class="tooltiptext">Twitter</span>
                        </div>
                    </div>
                    <div class="instagram">
                        <div class="tooltip">
                            <a
                                href="https://www.instagram.com/bundesliga/?hl=de">
                                <img
                                    src="https://cdn.glitch.global/9b12190e-3bb9-40f3-8183-4852b3d97d98/instagram%20(1).png?v=1646402383404"
                                    width="30"
                                    alt="alternativer_text"/>
                                </a>
                            <span class="tooltiptext">Instagram</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <p />
    <p style="text-align: center; font-size: 10px;">
        © Bundesliga Dashboard. All rights reserved.
    </p>
</footer>

<style>
    .container {
        max-width: 100%;
        perspective: 1000px;
        margin-bottom: 5%;
        margin: 0 auto;
        margin-left: 220px;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
    }

    ul {
        list-style: none;
    }

    .footer {
        background-color: rgb(3, 21, 32);
        background-image: linear-gradient(rgb(3, 21, 32), rgb(1, 12, 19) 40%);
        padding: 90px 0;
        text-align: left;
    }

    .footer-col {
        width: 22%;
        padding: 0 15px;
        margin-left: 40px;
    }

    .footer-col h4 {
        font-size: 20px;
        color: #ffffff;
        text-transform: capitalize;
        margin-bottom: 35px;
        font-weight: 500;
        position: relative;
        text-align: left;
    }

    /*Striche*/
    .footer-col h4::before {
        content: "";
        position: absolute;
        left: 0;
        bottom: -10px;
        background-color: rgb(36, 61, 133);
        height: 2px;
        box-sizing: border-box;
        width: 50px;
    }

    .footer-col ul li:not(:last-child) {
        margin-bottom: 10px;
    }

    .footer-col ul li a {
        font-size: 16px;
        text-transform: capitalize;
        color: #ffffff;
        text-decoration: none;
        font-weight: 300;
        display: block;
        transition: all 0.3s ease;
    }

    .footer-col ul li a:hover {
        color: #ffffff;
        padding-left: 8px;
    }

    .footer-col .social-links a {
        display: inline-block;
        height: 30px;
        width: 30px;
        background-color: #ffffff;
        margin: 0 10px 10px 0;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        color: orange;
        transition: all 0.05s ease;
    }

    .footer-col .social-links .facebook a:hover {
        background-color: #3b5999;
    }

    .footer-col .social-links .twitter a:hover {
        background-color: #46c1f6;
    }

    .footer-col .social-links .instagram a:hover {
        background-color: #e1306c;
    }

    .footer-col .social-links .youtube a:hover {
        background-color: #de463b;
    }

    /*responsive*/
    @media (max-width: 767px) {
        .footer-col {
            width: 50%;
            margin-bottom: 30px;
        }
    }

    @media (max-width: 574px) {
        .footer-col {
            width: 100%;
        }
    }

    /*tooltip*/
    /*----------------------------------------------
/* Tooltip container */
    .tooltip {
        position: relative;
        display: inline-block;
    }

    /* Tooltip text */
    .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;

        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
    }

    .tooltip .tooltiptext::after {
        content: " ";
        position: absolute;
        top: 50%;
        right: 100%; /* To the left of the tooltip */
        margin-top: -5px;
        border-width: 5px;
        border-style: solid;
    }

    .facebook .tooltip .tooltiptext {
        background-color: #3b5999;
    }

    .twitter .tooltip .tooltiptext {
        background-color: #46c1f6;
    }

    .instagram .tooltip .tooltiptext {
        background-color: #e1306c;
    }

    .youtube .tooltip .tooltiptext {
        background-color: #de463b;
    }

    .facebook .tooltip .tooltiptext::after {
        border-color: transparent #3b5999 transparent transparent;
    }

    .twitter .tooltip .tooltiptext::after {
        border-color: transparent #46c1f6 transparent transparent;
    }

    .instagram .tooltip .tooltiptext::after {
        border-color: transparent #e1306c transparent transparent;
    }

    .youtube .tooltip .tooltiptext::after {
        border-color: transparent #de463b transparent transparent;
    }

    /* Show the tooltip text when you mouse over the tooltip container */
    .tooltip:hover .tooltiptext {
        visibility: visible;
    }
</style>
