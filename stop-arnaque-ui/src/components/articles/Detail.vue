<script>
import { useRoute } from 'vue-router';
import { ArticleStore } from "../../stores/article-store";


export default {
    setup() {
        const articleStoreObj = ArticleStore();
        const { articleDetail } = storeToRefs(articleStoreObj);
        onBeforeMount(() => {
            articleStoreObj.articleDetail();
        });

        return {
            articleDetail,
            route: useRoute(),
            id: this.route.params.id,
            baseUrl: import.meta.env.VITE_IMG_BASE_URL,
            article: {},
        }
    },
}
</script>

<template>
    <a href="#" class="toTheTop"><img src="/images/arrow.svg" alt="up"></a>

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
                            <h4>{{ article.title }}</h4>
                            <p class="card-tag">{{ article.categoryName }}</p>
                        </div>
                        <hr class="divide">
                        <h5>{{ article.subTitle }}</h5>
                        <div class="editor-info d-flex flex-column flex-md-row">
                            <p class="editor">
                                <i class="bi bi-pencil"></i>
                                Par {{ article.editor }}
                            </p>
                            <p class="editor-date">
                                <i class="bi bi-calendar"></i> Publié le
                                {{ $d(article.date, 'long') }}
                            </p>
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
                        <p class="text-titre">{{ article.subTitle }}</p>
                        <p class="text">{{ article.description }}</p>
                        <p class="text-titre">{{ article.subTitle }}</p>
                        <p class="text">{{ article.description }}</p>

                    </div>
                </article>
            </div>
        </div>
    </div>
</template>

