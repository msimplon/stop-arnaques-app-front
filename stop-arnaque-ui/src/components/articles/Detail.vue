<script>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from "pinia";
import { ArticleStore } from "../../stores/article-store";


export default {
    setup() {
        const articleStoreObj = ArticleStore();
        const { get_one_article } = storeToRefs(articleStoreObj);
        const route = useRoute();
        onBeforeMount(() => {
            const id = route.params.id;
            if (id !== undefined) {
                articleStoreObj.get_one_article(id)
                    .then(response => {
                        console.log('Réponse de la méthode get_one_article dans le composant Vue :', response);
                    })
                    .catch(error => {
                        console.error(error);
                    });
            }

        });

        return {
            get_one_article,
            route,
            id: route.params.id,
            baseUrl: import.meta.env.VITE_IMG_BASE_URL,
            article: {},
        }
    },
}
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <article class="blog-card">
                    <div class="blog-card__background">
                        <div class="card__background--wrapper">
                            <div class="card__background--main" style="background-color: gray">
                                <div class="card__background--layer"></div>
                            </div>
                        </div>
                    </div>
                    <div class="blog-card__head">
                    </div>
                    <div class="blog-card__info">
                        <div class="cat">
                            <h4>{{ this.article.title }}</h4>
                            <h4>{{ article.id }}</h4>


                            <p class="card-tag">{{ article.categoryName }}</p>
                        </div>
                        <hr class="divide">
                        <h5>{{ article.subTitle }}</h5>
                        <div class="editor-info d-flex flex-column flex-md-row">
                            <p class="editor">
                                <i class="bi bi-pencil"></i>
                                Par {{ article.editor }}
                            </p>
                            <!-- <p class="editor-date">
                                <i class="bi bi-calendar"></i> Publié le
                                {{ article.date }}
                            </p> -->
                        </div>
                        <div id="sidebar">
                            <img :src="baseUrl + article.imageUrl" :alt="article.name" class="detail">
                            <hr class="divide2">
                            <div id="lol">
                                <ul class="lien">
                                    <h3 class="mb-4"> Articles récents</h3>
                                    <li class="mb-4">
                                        <RouterLink style="text-decoration:none" :to="{ name: 'actualité' }">
                                            Comment éviter le phishing ?
                                        </RouterLink>
                                    </li>
                                    <li class="mb-4">
                                        <RouterLink style="text-decoration:none" :to="{ name: 'actualité' }">
                                            Comment éviter le phishing ?
                                        </RouterLink>
                                    </li>
                                    <li class="mb-4">
                                        <RouterLink style="text-decoration:none" :to="{ name: 'actualité' }">
                                            Comment éviter le phishing ?
                                        </RouterLink>
                                    </li>
                                    <li class="mb-4">
                                        <RouterLink style="text-decoration:none" :to="{ name: 'actualité' }">
                                            Comment éviter le phishing ?
                                        </RouterLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <p class="text mt-5">{{ article.introduction }}</p>
                        <p class="text-titre">{{ article.subTitle }}</p>
                        <p class="text">{{ article.description }}</p>
                        <!-- <p class="text-titre">{{ article.subTitle }}</p>
                        <p class="text">{{ article.description }}</p>
                        <p class="text-titre">{{ article.subTitle }}</p>
                        <p class="text">{{ article.description }}</p> -->

                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

