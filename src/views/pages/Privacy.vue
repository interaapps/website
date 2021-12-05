<template>
    <div class="contents"><br><br>
    <div id="big-title">
        <h1>
          Privacy & Transparency
        </h1>
        <div>
          <a class="button" href="#accounts">Accounts</a>
          <a class="button" href="#pastefy">Pastefy</a>
          <a class="button" href="#quotysco">Quotysco</a>
          <a class="button" href="#punyshort">Punyshort</a>
          <a class="button" href="#passwords">Passwords</a>
        </div>
      </div>
    <br><br><br>
    
    <div id="privacy">
        <p>In the following we'll help you understand which data we use and what we'll do with it.</p>

        <h1>Short</h1>
        <p>
            We only collect necessary data. We don't track behaviour or any data which has nothing to do with our services itself. 
            <br>
            We don't show ads which collect data, use any tracking service or any other external service which collect data of you.
            <br>
            We might save data via cookies (or storage) in your browser to identify that you are logged in and with which account.
            <br>
            All of our services except of InteraApps Accounts are on <a href="https://github.com/interaapps">GitHub</a> publicly available with their source codes
        </p>
        
        <h1>Details per service</h1>
        <h3>Legend</h3>
        <p>Here are some badges which indicate, how we'll save some data and in which context</p>
        <br>
        <enc /> Encrypted data with a key given by the user<br>
        <enck /> The key to encrypt data<br>
        <enckk /> If key given, data will be encrypted<br>
        <hashed /> Data will be hashed<br>
        <opt /> Data is optional<br>
        <usr /> Data is connected with your account if logged in. (The data is given a user_id)<br>
        <usrr /> User login is required<br>
        <dltb /> Data is deletable and will be deleted for ever<br>
        <gen /> Data which is not given by the user. The data may be generated or has any context.<br>
        <pub /> Data is publicly available<br>
        <npub /> Data is not publicly available<br>
        <bri /> Information given by your browser (User Agent) or by you IP-Address<br>

        <h3>Explanation</h3>
        <ul>
            <li><strong>InteraApps Account:</strong> Your account on https://accounts.interaapps.de</li>
        </ul>
        
        <div id="accounts">
            <br><br><br><br>
            <h2>InteraApps Accounts</h2>

            <h3>Your account:</h3>
            <ul>
                <li>Identifier <gen /></li>
                <li>Username</li>
                <li>E-Mail</li>
                <li>Password <hashed/></li>

                <li>Birthday <opt/></li>
                <li>Favourite Color <opt/></li>
                <li>Nickname <opt/></li>
                <li>Description <opt/></li>
                
                <li>Create and Edit timestamp <gen /></li>
            </ul>

            <h4>More information</h4>
            <p>
                Our websites are able to identify you if you are logged into your InteraApps Account.
            </p>
            <h4>OAuth2 (Login with InteraApps Accounts)</h4>
            <p>
                If you log into a website with your InteraApps Account via OAuth2, the website will be given your information. We'll show you which information we'll give the website on the grant-permissions-page. You can revoke the access of a website on your account on the <a href="https://accounts.interaapps.de/security">security</a> page on InteraApps Accounts.
            </p>
            <h4>Login with GitHub and Google</h4>
            <p>
                Login Provider: GitHub or Google (The used login-method)<br>
                You can use a Login Provider to log into your InteraApps Account. The Login Provider will know that you use InteraApps Accounts. We save a identifier given by the Provider and your E-Mail and Username, which you can change on the first time logging in with a Login Provider.
            </p>
        </div>
        <div id="pastefy">
            <br><br><br><br>
            <h2>Pastefy <usr/></h2>
            
            <h3>Creating/Editing Paste <dltb/><usr/></h3>
            <ul>
                <li>Identifier <gen /></li>
                <li>Password <enck/><npub/><opt /></li>
                <li>Title <enckk/></li>
                <li>Contents <enckk/></li>
                <li>Folder <opt/></li>
                <li>If you are logged in, the Paste will be saved with your user identifier. <usr/><npub/><gen/></li>
                <li>Create and Edit timestamp <gen /></li>
            </ul>
            <h4>More information</h4>
            <p>
                <usrr/>You can use Pastefy with InteraApps Accounts. If you do you can create folders and share pastes to your InteraApps Accounts contacts.
            </p>
        </div>
        <div id="quotysco">
            <br><br><br><br>
            <h2>Quotysco <usr/></h2>

            <h3>Creating/Editing posts <usrr/></h3>
            <li>Identifier <gen /></li>
            <li>Title</li>
            <li>Contents</li>
            <li>User Identifier <gen/></li>
            <li>Blog Identifier <gen/></li>
            <li>Create and Edit timestamp <gen /></li>

            <h3>Algorithm score <usr/><usrr/></h3>
            There is a score for categories which helps us to recommend you more posts of the same type. The score will be incremented if you comment, like or just visit a post.

            <h3>Embedded contents</h3>
            <h4>YouTube</h4>
            For YouTube we use the cookie-less YouTube embedded player (youtube-nocookie.com)
        </div>
        <div id="punyshort">
            <br><br><br><br>
            <h2>Punyshort <usr/></h2>
            <h3>Shorten URLs</h3>
            <ul>
                <li>Identifier <gen /></li>
                <li>Shorten URL</li>
                <li>Domain (For Example: pnsh.ga, shortit.ml...)</li>
                <li>If you are logged in, the shorten URL will be saved with your user identifier. <usr/><npub/><gen/></li>
                <li>Create timestamp <gen /></li>
            </ul>
            
            <h3>Redirection</h3>
            <p>If you get redirected by a shorten url we will save the following data, so the user who shorten the url gets detailed tracking information.</p>
            <ul>
                <li>Identifier <gen /></li>
                <li>Link Identifier <gen /></li>
                <li>Date <gen/></li>
                <li>Operating System <bri/></li>
                <li>Internet Browser <bri/></li>
                <li>Estimated Country by your IP-Address <bri/></li>
                <li>Your IP-Address is getting cached<bri/></li>
            </ul>
            
        </div>
    </div>

    <span style="color: #AAA; margin-bottom: 20px; display: block;font-size:18px">Update: 4. Dec 2021</span>
    
    </div>

</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
#privacy {
    font-size: 19px;
    margin-bottom: 40px;

    h1 {
        margin-bottom: 20px;
        margin-top: 10px;
    }

    h3, h2, h4 {
        margin-bottom: 14px;
        margin-top: 16px;
    }

    enc, enck, opt, usr, usrr, dltb, enckk, gen, pub, npub, bri, hashed {
        width:  6px;
        height: 6px;
        border-radius: 10px;
        margin-right: 4px;
        vertical-align: middle;
        display: inline-block;
        color: transparent;
    }

    enc { background: chocolate; }
    enck { background: indianred; }
    enckk {background-color: hotpink;}
    opt { background: gray; }
    usr {background-color: goldenrod; }
    dltb { background-color: fuchsia; }
    usrr { background-color:firebrick; }
    gen { background-color: green;}
    pub { background-color: red; }
    npub { background-color: greenyellow;}
    bri {background-color:lightskyblue;}
    hashed {background-color: rgb(150, 73, 121);}

    ul {
        margin-top: 10px;
        padding-left: 20px;
    }
}
</style>