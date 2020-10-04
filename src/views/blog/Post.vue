<template>
    <div class="contents"><br><br><br><br><br><br>
        <h1 id="post_title">{{ post.post.title }}</h1>
        <p id="post_info">{{post.information}}</p>
        <router-link to="/blog" id="post_user">
            <img id="post_user_profilepic" src="https://cdn.interaapps.de/service/quotysco/userupload/4c8ddb81bc92d91380a6b5a47201117317e90115967bd1bda21d1a3e01fec64876635e1c2e4f30310a08e476d35e63aa9246506d66be494d5eaf52f64aff5b2fe4a803ad8f52d5de6cc8d88ca511a6d0.png.png" />
            <div>
                <span id="post_user_name">{{post.blog["name"]}}</span>
                <p id="post_user_description">{{post.blog["description"]}}</p>
            </div>
        </router-link>
        <img id="post_image" :src="post.post.image" />
        
        <div id="post_contents" v-html="post.contents"></div>
        <br><br>
        <a :href="'https://quotysco.ga/interaapps/'+post.post.link">Visit post on Quotysco</a>
    </div>
</template>
<script>
import { Prajax } from "cajaxjs";
export default {
    data: ()=>({
        post: {}
    }),
    mounted(){
        Prajax.get("https://quotysco.ga/InteraApps/"+this.$route.params.name, {getasjson:""}).then((res)=>{
            const parsed = JSON.parse(res.responseText);
            this.post = parsed;
        })
    }
}
</script>

<style lang="scss" scoped>
.blog_post {
    width: 100%;
}
</style>