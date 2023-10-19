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
            article: {},

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
                        <p class="editor">
                            <i class="bi bi-pencil"></i>
                            Par {{ article.editor }}
                            <i class="bi bi-calendar"></i> Publié le {{ article.date }}
                        </p>
                        <p>{{ article.description }}</p>

                    </div>
                </article>
            </div>
        </div>
    </div>

    <section class="detail-page">
        <div class="container mt-5">

        </div>
    </section>
</template>

<style>
body {
    background: #eee;
}

.divide {
    background: grey;
    height: 5px;
    margin: 15px auto;
    width: 80px;
}

.date__day {
    font-size: 22px;
}

.card-tag {
    padding: 0.2rem 0.5rem;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: #505f79;
    color: #fff;
}

.editor {
    margin-top: 3%;
    text-transform: uppercase;
}

.bi-calendar {
    margin-left: 10%;
}

.cat {
    text-transform: uppercase;
    letter-spacing: 1px;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;
}

.blog-card {
    padding: 30px;
    position: relative;

}

p,
.text {
    font-family: 'Raleway', sans-serif !important;

}

.blog-card__background,
.card__background--layer {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.blog-card__background {
    padding: 15px;
    background: white;
}

.card__background--wrapper {
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 60%);
    position: relative;
    overflow: hidden;
}

.card__background--main {
    height: 100%;
    position: relative;
    transition: 300ms ease-in-out;
    background-repeat: no-repeat;
    background-size: cover;
}

.blog-card__head {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.blog-card__info {
    z-index: 10;
    background: white;
    padding: 20px 15px;
}


.card__background--main {
    transform: scale(1.2) rotate(5deg);
}

.card__background--layer {
    opacity: 1;
}
</style>