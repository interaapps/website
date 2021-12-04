<template>
    <div class="contents">
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
    data: function(){return {
    currentProduct: "pastefy",
    products: {
      pastefy: {
        image: require("../assets/img/icons/pastefy.png"),
        prev: require("../assets/img/screenshots/pastefy.png"),
        name: "Pastefy",
        category: "Tools",
        links: {
          "Visit": "https://pastefy.ga",
          "Source-Code": "https://github.com/interaapps/pastefy"
        },
        description: "Pastefy is an open source Paster. You can use it for saving code-snippets and share them."
      },
      punyshort: {
        image: require("../assets/img/icons/punyshort.png"),
        prev: require("../assets/img/screenshots/punyshort.png"),
        name: "Punyshort",
        category: "Tools",
        links: {
          "Visit": "https://punyshort.ga",
          "Source-Code": "https://github.com/interaapps/punyshort"
        },
        description: "PunyShort is an open source Linkshortener, with which can short huge links in to a tiny one! You want to track the clicks on the link? No problem! It is also possible. You can track non-user-related data like the country, browser and the time with which/when the user clicked on the link!"
      },
      quotysco: {
        image: require("../assets/img/icons/quotysco.png"),
        prev: require("../assets/img/screenshots/quotysco.png"),
        name: "Quotysco",
        category: "Social Media",
        links: {
          "Visit": "https://quotysco.eu",
          "Source-Code": "https://github.com/interaapps/quotysco"
        },
        description: "Quotysco is an open-source Blog-Creation platform. You can simply create a blog and write posts, which others can read. You can follow blogs and interact with posts."
      },
      passwords: {
        image: require("../assets/img/icons/passwords.png"),
        prev: "../assets/img/screenshots/passwords.png",
        name: "InteraApps Passwords",
        category: "Tools",
        links: {
          "Visit": "https://passwords.interaapps.de",
          "Source-Code": "https://github.com/interaapps/passwords"
        },
        description: "InteraApps Passwords is a client-encrypted password-manager. Don't forget your passwords. Just keep one in mind. This one will be the encryption key for all of your passwords."
      },
      darkmode: {
        image: require("../assets/img/icons/darkmode.webp"),
        prev: require("../assets/img/prevs/darkmode.png"),
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
      },
    }
  }},
}
</script>
<style scoped lang="scss">

  #product-list {
    width: fit-content;
    margin: auto;
    margin-top: 200px;
    text-align: center;
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
      cursor: pointer;
    }
    img.selected {
      width: 95px;
      padding: 10px;
      box-shadow: 0px 1px 20px 0px #00000028;
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
      background-size: cover;
      background-position: center center;
    }

    #product-info {
      padding: 20px;
      width: 100%;

      .label {
        font-family: " DM Mono" "DM Sans" sans-serif;
        font-size: 25px;
      }

      h1 {
        font-size: 43px;
        color: #323232;
        font-weight: 600;
      }

      a,
      a:visited {
        font-family: " DM Mono" "DM Sans" sans-serif;
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
        font-family: " DM Mono" "DM Sans" sans-serif;
        color: #545454;
        font-size: 24px;
        margin-top: 10px;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    #big-title {
      text-align: center;
    }
  }

  @media screen and (max-width: 720px) {
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