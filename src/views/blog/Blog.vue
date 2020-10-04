<template>
    <div class="contents"><br><br><br><br><br><br>

        <a href="https://quotysco.ga">Visit blog on Quotysco</a>

        <div id="posts">
        <router-link class="blog_post" v-for="post of posts" :key="post" :to="'/blog/'+post.link">
            <span class="blog_post_date">{{post.created}}</span>
            <div class="blog_post_user">
                <img class="blog_post_user_image" src="https://cdn.interaapps.de/service/quotysco/userupload/4c8ddb81bc92d91380a6b5a47201117317e90115967bd1bda21d1a3e01fec64876635e1c2e4f30310a08e476d35e63aa9246506d66be494d5eaf52f64aff5b2fe4a803ad8f52d5de6cc8d88ca511a6d0.png.png" />
                <span class="blog_post_user_name">InteraApps</span>
            </div>
            <h1 class="blog_post_title">{{post.title}}</h1>
            
            <img class="blog_post_image" id="post_image" :src="post.image" />
            
            <div class="blog_post_contents" v-html="post.contents"></div>
        </router-link>
        </div>
    </div>
</template>
<script>
import { Prajax } from "cajaxjs";
export default {
    data: ()=>({
        posts: []
    }),
    mounted(){
        Prajax.get("https://quotysco.ga/InteraApps", {getasjson:""}).then((res)=>{
            const parsed = JSON.parse(res.responseText);
            this.posts = parsed.posts;
        })
    }
}
</script>
<style lang="scss" scoped>
#posts {
    margin-top: 60px;
}
</style>