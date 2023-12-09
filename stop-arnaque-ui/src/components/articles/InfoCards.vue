<script>

export default {

    data() {
        return {
            baseUrl: import.meta.env.VITE_IMG_BASE_URL,
            articles: [],
        };
    },

    methods: {
        async initArticles() {
            const resp = await this.$http.get("/articles/list-articles");
            this.articles = resp.body;
        },


    },

    beforeMount() {
        this.initArticles();
    },
};
</script>


<template>
    <section class=" row fw-semibold text-center">
        <div class="col-md-4 p-5 d-flex justify-content-center cardo" v-for="article in articles">

            <div class="cardi w-100">
                <img :src="baseUrl + article.imageUrl" :alt="article.name" class="card-img-top">
                <div class="cardi-body-info">
                    <h2>{{ article.title }}</h2>
                    <hr class="divid">
                    <p class="card-text text-muted ">{{ article.introduction }}</p>
                    <!-- <div class="card-editor">
                        <p>{{ article.editor }}</p>
                        <p>{{ article.date }}</p>
                    </div> -->
                    <RouterLink :to="{ name: 'article-detail', params: { id: article.id } }" class="link"
                        title="Details...">
                        Lire plus
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.link {
    margin-left: 20%;
}

.link-title:hover {
    text-decoration: underline;
    color: #6a8478;
}

.divid {
    background: grey;
    height: 3px;
    margin: 25px auto;
    width: 80px;
}


.card-editor {
    /* margin-left: 40%; */
    display: flex;
    align-content: flex-end;
    justify-content: space-evenly;
}

.card-img-top:hover {
    box-shadow: 10px 5px 5px white;
}

.cardo:hover {
    box-shadow: 10px 5px 5px #887766;
}

@media only screen and (max-width: 880px) {
    .cards {
        display: flex;
        flex-direction: column !important;
        align-items: center !important;

    }
}
</style>
