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
            // categoryId: [],
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
<!-- <template>
    <div class="card mb-3 shadow-xl ">
        <div class="row p-3 align-items-center">
            <div class="col-md-4 text-center">
                <img :src="baseUrl + article.imageUrl" class="img-fluid" :alt="article.name">
            </div>
            <div class="col-md-8">
                <div class="card-body p-0">
                    <h2>{{ article.title }}</h2>
                    <p class="card-text fs-5">
                        <span>{{ article.categoryId }}</span>
                    </p>
                    <h3>{{ article.subTitle }}</h3>
                    <h4>{{ article.editor }}</h4>
                    <h5>{{ article.date }}</h5>
                    <p class="card-text">{{ article.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template> -->



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
                        <span class="date__box">
                        </span>
                    </div>
                    <div class="blog-card__info">
                        <div class="cat">
                            <h4>{{ article.title }}</h4>
                            <p class="card-tag">{{ article.categoryName }}</p>
                        </div>
                        <hr class="icon">
                        <h5>{{ article.subTitle }}</h5>
                        <p class="space">
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

.icon {
    background: #333;
    height: 2px;
    margin: 25px auto;
    width: 40px;
}

.date__box {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #ccc;
    border: 4px solid;
    font-weight: bold;
    padding: 5px 10px;
}

.date__day {
    font-size: 22px;
}

.card-tag {
    width: 80px;
    max-width: 100px;
    padding: 0.2rem 0.5rem;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    background: #505f79;
    color: #fff;
}

.space {
    margin-top: 3%;
}

.bi-calendar {
    margin-left: 10%;
}

.cat {
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

.date__box {
    opacity: 0;
    transform: scale(0.5);
    transition: 300ms ease-in-out;
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

.card__background--layer {
    z-index: 0;
    opacity: 0;
    background: rgba(#333, 0.9);
    transition: 300ms ease-in-out;
}

.blog-card__head {
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.blog-card__info {
    z-index: 10;
    background: white;
    padding: 20px 15px;
}

h5 {
    transition: 300ms ease-in-out;
}



.date__box:hover {
    opacity: 1;
    transform: scale(1);
}

.card__background--main {
    transform: scale(1.2) rotate(5deg);
}

.card__background--layer {
    opacity: 1;
}




/* .i {
        color: #333
    }

    &:hover {
        color: $primary;
        text-decoration: none;
    } */


.btn {
    background: white;
    text-decoration-color: #333;
    font-weight: bold;
    outline: none;
    box-shadow: 1px 1px 3px 0 rgba(0, 0, 0, 0.2);
    overflow: hidden;
    border-radius: 0;
    height: 50px;
    line-height: 50px;
    display: inline-block;
    padding: 0;
    border: none;
}

/* &:focus {
        box-shadow: none;
    } */
/* 
    &:hover {
        background: $primary;
        color: #fff;
    } */

.btn--with-icon {
    padding-right: 20px;
}

/* i {
    padding: 0px 30px 0px 15px;
    margin-right: 10px;
    height: 50px;
    line-height: 50px;
    vertical-align: bottom;
    color: white;
    clip-path: polygon(0 0, 70% 0, 100% 100%, 0% 100%);
} */


.btn--only-icon {
    width: 50px;
}
</style>