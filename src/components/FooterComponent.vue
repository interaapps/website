<template>
    <div id="footer">
        <img class="noSelection" width="40px" src="https://interaapps.de/assets/interaapps/icon/icon3.png" />
        <router-link to="/imprint">Impressum</router-link><a class="noSelection footerseparator">-</a>
        <router-link to="/privacy">Datenschutz</router-link><a class="noSelection footerseparator">-</a>
        <router-link to="/donate">Donate</router-link>
        <a class="noSelection" id="copyright">InteraApps 2020</a>
    </div>
</template>
<style lang="scss" scoped>
#footer {
    background: #141822;
    
    padding: 40px 70px;
}

#footer #copyright {
    right: 0px; 
    position: absolute; 
    margin-top: 7px; 
    margin-right: 70px;
    color: #989898;
}

#footer img {
    vertical-align: middle;
    margin-right: 20px;
}

#footer a, #footer a:link, #footer a:visited {
    color: #FFFFFF;
    text-decoration: none;
    margin-right: 20px;
}

 @media screen and (max-width: 720px) {
    #footer {
        padding: 10px 20px;
        text-align: center;
    }
    
    #footer #copyright {
        display: block;
        position: relative; 
        margin-top: 7px; 
        margin-bottom: 10px;
        margin-right: 0px;
        margin-left: 0px;
    }
    
    #footer img {
        display: block;
        margin: 10px auto;
    }
    
    #footer a, #footer a:link, #footer a:visited {
        margin-right: 0px;
        display: block;
    }
}
</style>