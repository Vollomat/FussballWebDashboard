<script>

</script>


<div class="body1">
    <div class="container">
        <div class="profile">
            <div class="content">
                <div class="header">
                    <img src = "https://wallpaperaccess.com/full/314821.jpg" alt="Unknown" width="50">
                    <div class="infos">
                        <h3 class="name">Name</h3>
                        <p class="title">text</p>
                    </div>
                </div>
                <div class="body">
                    <p>Texttext</p>
                </div>
            </div>    
        </div>
    </div>
</div>    

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}    

.body1 {
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Lato', sans-serif;
    height: 100vh;
}

.container {
    display: flex;
}

.profile {
    position: relative;
    width: 60px;
    margin: 0 1em;
    height: 60px;
    border-radius: 50%;
    background: url(https://wallpaperaccess.com/full/314821.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;
    box-shadow: 0 0 0 4px #fff, 0 0 0 5px #246df5;
    transition: 0.2s;
}

.profile:hover {
    box-shadow: 0 0 0 4px #fff, 0 0 0 6px #d10fd8;
}

.content {
    position: absolute;
    bottom: 75px;
    padding: 70px;
    min-width: 400px;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    border-radius: 10px;
    visibility: hidden;
    opacity: 0;
    transform: translateY(-10px);
    transition: 0.5s;
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
    font-size: 1.25em;
    color: #333;
    letter-spacing: 1px;
    font-size: 600;
}

.content .header .infos .title {
    font-size: 0.9em;
    color: #969696;
    font-weight: 500;
}

.content .body {
    padding: 1em;
}

.content .body p{
    font-size: 0.95em;
    color: #272727;
}

.profile:hover .content {
    visibility: visible;
    opacity: 1;
    transform: translateX(-15%) translateY(0px);
}

</style>
 