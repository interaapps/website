<template>
    <div id="app">
        <meta name=" theme-color" content="#040710">
<link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet">

<div id="top-header">
    <i class="material-icons">brightness_2</i>
    <h1>Darkmode</h1>
    <h3>Activate the darkmode on every device.</h3>
    <a target="_blank" href="https://play.google.com/store/apps/details?id=de.datlag.darkmode" class="btn green" id="installbtn">Install</a>
</div>

<div class="col_1200px col_container" id="showcase">
    <div class="col_300px" id="showcase-darkmode">
        <h2>Darkmode</h2>
        <p>Get the darkmode on every Android-device that supports it!</p>
        <img src="../../assets/img/pages/darkmode/screenshot1.svg">
    </div>

    <div class="col_300px" id="showcase-easy">
        <img src="../../assets/img/pages/darkmode/screenshot2.svg">
        <h2>Easy</h2>
        <p>Switch the darkmode easy by one single click!</p>
    </div>

    <div class="col_300px" id="showcase-eyes">
        <img src="../../assets/img/pages/darkmode/eye.svg">
        <h2>Better for your eyes</h2>
        <p>Light elements in the night aren’t just hurtful. They can also harm your eyes. So use the darkmode in the night to protect your eyes!</p>
    </div>
</div>
    </div>
</template>
<style lang="scss" scoped>
    #app {
        background: url(~@/assets/img/pages/darkmode/background.svg);
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-size: auto;
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-size: auto;
        background-repeat: repeat-y;
        background-position: bottom;
        background-size: cover;
        padding-left: 13px;
        padding-right: 13px;
        width: 100%;
        display: block;
        box-sizing: border-box;
        font-family: Poppins, Jost, sans-serif !important;
        color: #FFFFFF;
    }

    #top-header i {
        font-size: 100px;
        margin-bottom: 80px;
        user-select: none;
    }

    #top-header {
        text-align: center;
        padding-top: 250px;
        padding-bottom: 250px;
    }

    #top-header h1 {
        margin-bottom: 100px;
    }

    #top-header h3 {
        margin-bottom: 70px;
    }

    #top-header #installbtn {
        margin-top: 50px;
        display: block;
        width: 150px;
        margin: 0px auto;
    }

    h1, h2, h3, h4, h5 {
        font-family: Poppins, Jost, sans-serif !important;
    }

    #showcase {
        background: url(~@/assets/img/pages/darkmode/featuresbackground.svg);
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-size: auto;
        background-position-x: 0%;
        background-position-y: 0%;
        background-repeat: repeat;
        background-size: auto;
        background-repeat: no-repeat;
        background-position: top;
        background-size: cover;
    }

    #showcase div {
        margin: 33px;
    }

    #showcase div h2 {
        text-align: center;
        font-size: 34px;
        margin: 25px 0px;
    }

    #showcase div p {
        font-size: 25px;
    }

    #showcase div img {
        width: 80%;
        margin-bottom: 50px;
        margin: 0px auto;
        display: block;
        margin-top: 50px;
    }

    #showcase-darkmode {

    }

    #showcase-easy {
        
    }

    #showcase-eyes {
        
    }

    #showcase-eyes p {
        background: #00000044;
        padding: 10px;
        box-sizing: border-box;
        border-radius: 10px;
    }

    @media screen and (max-width: 920px) {

        #top-header {
            text-align: center;
            padding-top: 100px;
            padding-bottom: 140px;
        }


        #showcase div {
            margin: 0px;
            padding-top: 60px;
            padding-bottom: 60px;
        }

        #showcase div h2 {
            font-size: 30px;
        }

        #showcase div p {
            font-size: 20px;
            width: 80%;
            margin: 0px auto;
        }

        #showcase div img {
            width: 50%;
        }
    }
</style>
