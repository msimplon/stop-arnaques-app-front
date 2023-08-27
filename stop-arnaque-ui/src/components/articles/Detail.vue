<script>
import { useRoute } from 'vue-router';

export default {
    setup() {
        return {
            route: useRoute()
        }
    },
    data() {
        return {
            id: this.route.params.id,
            baseUrl: import.meta.env.VITE_IMG_BASE_URL,
            article: {}
        }
    },
    methods: {
        async initArticle() {
            const resp = await this.$http.get(`/articles/article-view/${this.id}`);
            this.article = resp.body;
        }
    },
    beforeMount() {
        this.initArticle();
    }
}
</script>
<template>
    <h1>Article detail</h1>
    <div class="card mb-3 shadow-sm">
        <div class="row p-3 align-items-center">
            <div class="col-md-4 text-center">
                <img :src="baseUrl + article.imageUrl" class="img-fluid" :alt="article.name">
            </div>
            <div class="col-md-8">
                <div class="card-body p-0">
                    <p class="card-text fs-5">
                        <span>{{ article.categoryId }}</span>
                    </p>
                    <h2>{{ article.title }}</h2>
                    <h3>{{ article.subTitle }}</h3>
                    <h4>{{ article.editor }}</h4>
                    <h5>{{ article.date }}</h5>
                    <p class="card-text">{{ article.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>