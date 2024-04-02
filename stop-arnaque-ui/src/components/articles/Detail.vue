<script>
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { storeToRefs } from "pinia";
import { ArticleStore } from "../../stores/article-store";


export default {
    setup() {
        const articleStoreObj = ArticleStore();
        const { article } = storeToRefs(articleStoreObj);
        const route = useRoute();
        onBeforeMount(() => {
            const id = route.params.id;
            if (id !== undefined) {
                articleStoreObj.get_one_article(id);

            }
        });

        return {
            route,
            id: route.params.id,
            baseUrl: import.meta.env.VITE_IMG_BASE_URL,
            article,
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
                        <div class="blog-card-style">
                            <h4>{{ article?.title }}</h4>
                            <p class="card-tag">{{ article?.categoryName }}</p>
                        </div>
                        <hr class="divide">
                        <h5>{{ article?.subTitle }}</h5>
                        <div class="editor-info d-flex flex-column flex-md-row">
                            <p class="editor">
                                <i class="bi bi-pencil"></i>
                                Par {{ article?.editor }}
                            </p>
                            <p class="editor-date">
                                <i class="bi bi-calendar"></i> Publié le
                                {{ article?.date }}
                            </p>
                        </div>
                        <div id="sidebar">
                            <img :src="baseUrl + article.imageUrl" :alt="article.name" class="detail">
                        </div>
                        <p class="text mt-5">{{ article?.introduction }}</p>
                        <p class="text-titre">{{ article?.subTitle }}</p>
                        <p class="text">{{ article?.description }}</p>
                    </div>
                </article>
            </div>
        </div>
    </div>
</template>
<style>
.detail {
    width: 90%;
    height: 85%;
}

.text-titre {
    color: blue;
    font-weight: bold;
}
</style>