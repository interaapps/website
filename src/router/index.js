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
      description: "InteraApps is a team that creates open source software which is free for everyone.",
      footerDisabled: true
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
    path: '/projects',
    name: 'Projects',
    meta: {
      title: "Projects"
    },
    component: () => import('../views/Projects.vue')
  },
  {
    path: '/darkmode',
    name: 'Darkmode',
    meta: {
      title: "Darkmode",
      footerColor: "#040710",
      description: "Darkmode is an app with which you can toggle your android system-wide darkmode.",
      darkNavigation: true
    },
    component: () => import('../views/pages/Darkmode.vue')
  },
  {
    path: '/privacy', name: 'Privacy',  meta: {navTitle: "Privacy & Transparency", hideNavTitleTop: true}, component: () => import('../views/pages/Privacy.vue')
  },
  {
    path: '/status', name: 'Status',  meta: {navTitle: "Status", hideNavTitleTop: true}, component: () => import('../views/pages/Status.vue')
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
    path: '/transparency', name: 'Transparency Report', meta: {navTitle: "Transparency Report"}, component: () => import('../views/transparency/Transparency.vue')
  },
  {
    path: '/transparency/removal/:id', name: 'Removal', meta: {navTitle: "Transparency Report"}, component: () => import('../views/transparency/Removal.vue')
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
