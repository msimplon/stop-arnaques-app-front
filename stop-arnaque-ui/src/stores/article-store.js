// import { defineStore } from 'pinia';
// import { ArticleHttp } from "../services/ArticleHttp";


// export const ArticleStore = defineStore('article-store', {
//     state: () => ({
//         lastAddedArticles: [],
//     }),
//     actions: {

//         async add_new_article() {
//             const articleHttp = new ArticleHttp();
//             const promise = await articleHttp.add_new_book();
//             return promise;
//         },
//         async get_last_added_articles() {
//             const articleHttp = new ArticleHttp();
//             const promise = await articleHttp.get_last_added_articles();
//             if (promise.status === 200) {
//                 this.lastAddedArticles = promise.body;
//             }
//             return promise;
//         },
//         async get_all_articles() {
//             const articleHttp = new ArticleHttp();
//             const promise = await articleHttp.get_all_articles();
//             return promise;
//         },
//         async get_one_article() {
//             const articleHttp = new ArticleHttp();
//             const promise = await articleHttp.get_one_article();
//             return promise;
//         },
//         async update_article() {
//             const articleHttp = new ArticleHttp();
//             const promise = await articleHttp.update_article();
//             return promise;
//         },
//         async remove_article() {
//             const articleHttp = new ArticleHttp();
//             const promise = await articleHttp.remove_article();
//             return promise;
//         },
//     },

// })