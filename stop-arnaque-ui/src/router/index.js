import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'articles-home',
      component: () => import('../views/HomeArticles.vue'),
      children: [
        { path: 'infoCards', component: () => import('../components/articles/InfoCards.vue'), name: "infoCards" }],
    }, {
      path: '/admin/articles',
      name: 'articles-edit',
      component: () => import('../components/articles/Edit.vue')
    },
    {
      path: '/recours/articles',
      name: 'dgccrf',
      beforeEnter() { location.href = 'https://www.economie.gouv.fr/dgccrf' }

    },
    {
      path: '/actualité/articles',
      name: 'actualité',
      component: () => import('../views/Actualité.vue')
    },

    {
      path: '/admin/article/create',
      name: 'articles-create',
      component: () => import('../components/articles/Create.vue')
    }, {
      path: '/article/:id/',
      name: 'article-detail',
      component: () => import('../components/articles/Detail.vue')
    }, {
      path: '/admin/article/:id/update',
      name: 'article-update',
      component: () => import('../components/articles/Update.vue')
    },
    {
      path: '/article/signal',
      name: 'article-signal-arnaque',
      component: () => import('../views/SignalArnaque.vue')
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/Contact.vue')
    },
    {
      path: '/signIn',
      name: 'signIn',
      component: () => import('../views/SignIn.vue')
    },
    {
      path: '/signUp',
      name: 'signUp',
      component: () => import('../views/SignUp.vue')
    },
    {
      path: '/cgu',
      name: 'cgu',
      component: () => import('../views/cgu.vue')
    },
    {
      path: '/brouillon',
      name: 'brouillon',
      component: () => import('../components/commons/Brouillon.vue')
    },
    {
      path: '/brouillon2',
      name: 'brouillon2',
      component: () => import('../components/commons/Brouillon2.vue')
    }
  ]

})

export default router;
