import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: "Home",
      description: "InteraApps is a team that creates open source software which is free for everyone."
    },
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: "About"
    },
    component: () => import('../views/About.vue')
  },
  {
    path: '/darkmode',
    name: 'Darkmode',
    meta: {
      title: "Darkmode",
      description: "Darkmode is an app with which you can toggle your android system-wide darkmode."
    },
    component: () => import('../views/pages/Darkmode.vue')
  },
  {
    path: '/privacy', name: 'Privacy',  meta: {navTitle: "Privacy & Terms"}, component: () => import('../views/pages/Privacy.vue')
  },
  {
    path: '/p/informationen', name: 'Privacy',  meta: {navTitle: "Privacy & Terms"}, component: () => import('../views/pages/Privacy.vue')
  },
  {
    path: '/dsgvo', name: 'Privacy', component: () => import('../views/pages/Privacy.vue')
  },
  {
    path: '/imprint', name: 'Imprint', component: () => import('../views/pages/Imprint.vue')
  },{
    path: '/p/impressum', name: 'Imprint', component: () => import('../views/pages/Imprint.vue')
  },
  {
    path: '/donate', name: 'Donate', component: () => import('../views/pages/Donate.vue')
  },
  {
    path: '/blog', name: 'Blog', meta: {navTitle: "Blog"}, component: () => import('../views/blog/Blog.vue')
  },
  {
    path: '/blog/:name', name: 'Blog', meta: {navTitle: "Blog"}, component: () => import('../views/blog/Post.vue')
  },
  {
    path: '/*', name: '404', component: () => import('../views/404.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if(to.meta.title)
    document.title = to.meta.title+' | InteraApps'
  else
    document.title = to.name+' | InteraApps'

  document.querySelector('meta[name="description"]').setAttribute("content", to.meta.description || "InteraApps is a team that creates open source software.");

  if (to.meta.navTitle)
    store.state.navTitle = to.meta.navTitle;
  else
    store.state.navTitle = "InteraApps";

  window.scrollTo(0, 0);
  next();
})

export default router
