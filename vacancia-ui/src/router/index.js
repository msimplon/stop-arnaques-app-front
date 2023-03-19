import { createRouter, createWebHistory } from 'vue-router';

/*
 * Le router declare les composants en "lazy loading".
 * Ils ne sont pas importes avant que le composant ne soit utile a une route.
 * Le "lazy loading" revient a declarer une fonction qui importe le composant 
 * au lieu de referencer en "dur" le nom du composant importe en haut du script.
*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/HomeStickers.vue',
      name: 'stickers-home',
      component: () => import('../components/stickers/HomeStickers.vue')
    }, {
      path: '/admin/stickers',
      name: 'stickers-edit',
      component: () => import('../components/stickers/Edit.vue')
    }, {
      path: '/admin/stickers/create',
      name: 'sticker-create',
      component: () => import('../components/stickers/Create.vue')
    }, {
      path: '/stickers/:id/detail',
      name: 'sticker-detail',
      component: () => import('../components/stickers/Detail.vue')
    }, {
      path: '/admin/stickers/:id/update',
      name: 'sticker-update',
      component: () => import('../components/stickers/Update.vue')
    },
    {
      path: '/contact',
      name: 'life-cycle',
      component: () => import('../components/Contact.vue')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('../components/SignInPage.vue')
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../components/Admin.vue')
    },
    {
      path: '/create-account',
      name: 'create-account',
      component: () => import('../components/Commons/CreateAccount.vue')
    },
  ]
})

export default router;
