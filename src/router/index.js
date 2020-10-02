import Vue from 'vue'
import VueRouter from 'vue-router'
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
    path: '/privacy', name: 'Privacy', component: () => import('../views/pages/Privacy.vue')
  },
  {
    path: '/p/informationen', name: 'Privacy', component: () => import('../views/pages/Privacy.vue')
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

  window.scrollTo(0, 0);
  next();
})

export default router
