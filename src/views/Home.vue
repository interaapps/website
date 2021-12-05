<template>
  <div class="contents">
    <div id="top">
      <div id="bg-cs"></div>
      <div id="top-images" @click="$router.push('/projects')">
        <div>
          <img src="@/assets/img/screenshots/quotysco.png">
          <img src="@/assets/img/screenshots/accounts.png">
        </div>
        <div>
          <img src="@/assets/img/screenshots/pastefy.png">
          <img src="@/assets/img/screenshots/punyshort.png">
        </div>
        <div>
          <img src="@/assets/img/screenshots/passwords.png">
          <img src="@/assets/img/screenshots/developers.png">
        </div>
      </div>

      <div id="big-title">
        <h1>
          Awesome projects <br> which help you.
        </h1>
        <div>
          
          <router-link class="button" to="/projects">Projects</router-link>
          <router-link class="button" to="/privacy">Privacy</router-link>
          <a class="button" href="https://developers.interaapps.de">Developers</a>
          <a class="button" href="https://github.com/interaapps">GitHub</a>
        </div>
      </div>
    </div>
    <router-link to="/privacy" style="color: #AAA; text-decoration: none; float: right; margin-top: 140px;">Privacy</router-link>
    <router-link to="/imprint" style="color: #AAA; text-decoration: none; float: right; margin-top: 140px; margin-right: 10px;">Imprint</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {
    
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
  .contents {
    height: 100%;
  }
  #top {
    position: relative;
    padding-bottom: 200px;
  }
  #top-images {
    position: absolute;
    right: -270px;
    top: 50%;
    transform: translateY(-55%) rotate(4deg);

    display: inline-block;
    width: fit-content;

    div {
      margin-bottom: 10px;
      img {
        width: 370px;
        margin-left: 13px;
        border: #EEE solid 2.5px;
        border-radius: 10px;
        display: inline-block;
      }
      &:nth-child(1) {
        padding-left: 60px;
      }
      &:nth-child(2) {
        padding-left: 30px;
      }
    }
  }

  #big-title {
    margin-top: 300px;
    div {
      width: 50%;
    }
  }

  #bg-cs {
    width: 800px;
    height: 800px;
    background: #4542F411;
    border-radius: 100%;
    position: absolute;
    right: -284px;
    top: -173px;
  }

  @media screen and (max-width: 1200px) {
    #top-images {
      right: -380px; 
    }

    #big-title div {
      width: 50%;
    }
  }

  @media screen and (max-width: 1080px) {
    #top {
      padding-top: 0px
    }
    #big-title {
      text-align: center;
      position: absolute;
      top: 0px;
      margin-top: 130px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      div {
        width: 100%;
      }
      h1 {
        margin-top: 0px;
      }
    }
    #top-images {
      padding-top: 740px;
      position: relative;
      transform: none;
      right: 0px;
      margin: auto;
      display: block;

      div:nth-child(1),
      div:nth-child(2) {
        padding-left: 0px;
      }
    }
    #bg-cs {
      display: none;
    }
  }
  @media screen and (max-width: 780px) {
    #top-images div img {
      width: 100%;
      display: block;
      margin-left: 0px;
      margin-bottom: 10px;
    }
  }
</style>
