<template>
  <div class="contents"><br><br><br><br><br>
    <h1 id="big-title">Digital<br>open source<br>projects</h1>

    <div id="product-list">
      <img v-for="(product, name) of products" :key="product" :src="product.image" @click="currentProduct = name" v-bind:class="{'selected': currentProduct==name}">
    </div>
    
    <div id="product">
      <div id="product-prev" :style="{backgroundImage: 'url('+this.products[this.currentProduct].prev+')'}"></div>
      <div id="product-info">
        <span class="label">{{products[currentProduct].category}}</span>
        <h1>{{products[currentProduct].name}}</h1>
        <router-link v-for="(link, name) of products[currentProduct].routerLinks" :key="link" :to="link">{{name}}</router-link>
        <a v-for="(link, name) of products[currentProduct].links" :key="link" :href="link">{{name}}</a>
        <p>{{products[currentProduct].description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: function(){return {
    currentProduct: "pastefy",
    products: {
      pastefy: {
        image: "https://pastefy.ga/assets/images/icon.png",
        prev: require("../assets/img/prevs/pastefy.png"),
        name: "Pastefy",
        category: "Tools",
        links: {
          "Visit": "https://pastefy.ga",
          "Source-Code": "https://github.com/interaapps/pastefy"
        },
        description: "Pastefy is an open source Paster. You can use it for saving code-snippets and share them."
      },
      punyshort: {
        image: "https://www.punyshort.ga/assets/images/icons/icon.svg",
        prev: require("../assets/img/prevs/punyshort.png"),
        name: "Punyshort",
        category: "Tools",
        links: {
          "Visit": "https://punyshort.ga",
          "Source-Code": "https://github.com/interaapps/punyshort"
        },
        description: "PunyShort is an open source Linkshortener, with which can short huge links in to a tiny one! You want to track the clicks on the link? No problem! It is also possible. You can track non-user-related data like the country, browser and the time with which/when the user clicked on the link!"
      },
      quotysco: {
        image: "https://quotysco.ga/assets/images/logo.png",
        prev: require("../assets/img/prevs/quotysco.png"),
        name: "Quotysco",
        category: "Social Media",
        links: {
          "Visit": "https://quotysco.ga",
          "Source-Code": "https://github.com/interaapps/quotysco"
        },
        description: "Quotysco is an open-source Blog-Creation platform. You can simply create a blog and write posts, which others can read. You can follow blogs and interact with posts."
      },
      darkmode: {
        image: "https://camo.githubusercontent.com/0ac16ab0c0033f8c562b72601722eb71c0a269c1/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f614c704879496c4a71663570434869475433356575676d584951574e34574e7630454c536d656833414e4252585865727935334e6f64534f30353246387561387632413d733138302d7277",
        prev: "https://camo.githubusercontent.com/0ac16ab0c0033f8c562b72601722eb71c0a269c1/68747470733a2f2f6c68332e676f6f676c6575736572636f6e74656e742e636f6d2f614c704879496c4a71663570434869475433356575676d584951574e34574e7630454c536d656833414e4252585865727935334e6f64534f30353246387561387632413d733138302d7277",
        name: "Darkmode",
        category: "Tools",
        links: {
          "Get it on Google-Play": "https://play.google.com/store/apps/details?id=de.datlag.darkmode",
          "Source-Code": "https://github.com/interaapps/darkmode-android"
        },
        routerLinks: {
          "More information": "/darkmode"
        },
        description: "Darkmode is an app with which you can enable the system-wide darkmode on android devices!"
      }
    }
  }},
  components: {
    
  },
  watch: {
  }
}
</script>

<style lang="scss" scoped>
  #big-title {
    font-size: 90px;
    font-weight: 600;
    color: #434343;
    margin-top: 100px;
  }

  #product-list {
    margin: auto;
    margin-top: 200px;
    img {
      margin-right: 30px;
      width: 80px;
      padding: 10px;
      border-radius: 100px;
      background: #FFF;
      box-shadow: 0px 1px 10px 1px #00000022;
      vertical-align: middle;
      transition: 0.3s;
      margin-bottom: 20px;
    }
    img.selected {
      width: 90px;
      padding: 10px;
    }
  }

  #product {
      margin-top: 60px;
      margin-bottom: 100px;
    background: #FFF;
      box-shadow: 0px 1px 10px 1px #00000022;
      display: flex;
      border-radius: 10px;
    #product-prev {
      background: #EEEEEE;
      width: 400px;
      background-size: contain;
      background-repeat: no-repeat;
      border-radius: 10px 0px 0px 10px;
    }

    #product-info {
      padding: 20px;
      width: 100%;

      .label {
        font-family: "Space Mono", Inter, sans-serif;
        font-size: 25px;
      }

      h1 {
        font-size: 43px;
        color: #323232;
      }

      a,
      a:visited {
        font-family: "Space Mono", Inter, sans-serif;
        color: #4542F4;
        text-decoration: none;
        margin-right: 20px;
        display: inline-block;
        font-size: 20px;
      }

      a:hover {
        background: #4542F4;
        color: #FFF;
      }

      p {
        font-family: "Space Mono", Inter, sans-serif;
        color: #545454;
        font-size: 24px;
        margin-top: 10px;
      }
    }
  }
  @media screen and (max-width: 720px) {
    #big-title {
      font-size: 50px;
    }

    #product {
      display: block;
      #product-prev {
        width: 100%;
        height: 200px;
        border-radius: 10px 10px 0px 0px;
      }
    }
  }
</style>
