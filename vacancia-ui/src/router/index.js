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
      path: '/HomeArticles.vue',
      name: 'articles-home',
      component: () => import('../components/articles/HomeArticles.vue')
    }, {
      path: '/admin/articles',
      name: 'articles-edit',
      component: () => import('../components/articles/Edit.vue')
    }, {
      path: '/admin/article/create',
      name: 'articles-create',
      component: () => import('../components/articles/Create.vue')
    }, {
      path: '/article/:id/detail',
      name: 'article-detail',
      component: () => import('../components/articles/Detail.vue')
    }, {
      path: '/admin/article/:id/update',
      name: 'article-update',
      component: () => import('../components/articles/Update.vue')
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
    }
  ]
})

export default router;
