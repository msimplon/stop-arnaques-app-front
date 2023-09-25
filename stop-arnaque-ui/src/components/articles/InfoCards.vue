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
    <!-- <section class="section2">
        <div class="row row-cols-1 row-cols-md-3 g-3 mb-3 p-2">
            <div class="col" v-for="article in articles">
                <div class="card-title">
                </div>
                <div class="cards">
                    <div class="card">
                        <img src="https://www.w3schools.com/w3images/team1.jpg" alt="" />
                        <div class="card-info">
                            <h1>{{ article.title }}</h1>
                            <h2>{{ article.editor }}</h2>
                            <h3>{{ article.date }} </h3>
                            <p class="card-subtitle mb-2 text-muted text-center">
                                {{ article.introduction }}
                            </p>
                            <RouterLink :to="{ name: 'article-detail', params: { id: article.id } }" class="link"
                                title="Details...">
                                En savoir plus
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> -->
    <section class=" row fw-semibold text-center m-4">
        <div class="col-12 col-md-4 p-3 d-flex justify-content-center" v-for="article in articles">

            <div class="cardi w-100 shadow">
                <img :src="baseUrl + article.imageUrl" :alt="article.name" class="card-img-top">
                <div class="cardi-body-info">
                    <h2>{{ article.title }}</h2>
                    <h3>{{ article.subTitle }}</h3>
                    <p class="card-text">{{ article.introduction }}</p>
                    <div class="card-editor">
                        <p>{{ article.editor }}</p>
                        <p>{{ article.date }}</p>
                    </div>
                    <RouterLink :to="{ name: 'article-detail', params: { id: article.id } }" class="link"
                        title="Details...">
                        En savoir plus
                    </RouterLink>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
/* .card:hover {
    box-shadow: 10px 5px 5px #887766;
}

.card-title {
    text-align: center;
}

h1 {
    font-size: 20px;
}
 */



/* .cards {
    display: flex;
    justify-content: space-around;
} */

/* .card {

    -webkit-box-shadow: -1px -2px 15px 4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px -2px 15px 4px rgba(0, 0, 0, 0.75);
    box-shadow: -1px -2px 15px 4px rgba(0, 0, 0, 0.75);
    margin-right: 10px;
} */

/* img {
    width: 100%;
    height: 200px;
}

.card-info {
    padding: 10px;
    box-sizing: border-box;
}

.date {
    color: gray;
    font-size: 80px;
}

p {
    color: black;
} */

/* 
:hover {
    background: gray;
    color: white;
} */


.link-title:hover {
    text-decoration: underline;
    color: #6a8478;
}



/********IMAGE AND TITLE*******/

/* .cardi-body-info {
    width: 18rem;
} */

h2 {
    font-family: 'Indie Flower', cursive;
}

p,
.text {
    font-family: 'Roboto', sans-serif !important;

}

.card-editor {
    margin-left: 40%;
    display: flex;
    align-content: flex-end;
    justify-content: space-evenly;
    /* align-items: stretch; */
}

.card-img-top:hover {
    box-shadow: 10px 5px 5px #887766;
}

@media only screen and (max-width: 880px) {
    .cards {
        display: flex;
        flex-direction: column !important;
        align-items: center !important;
        /* margin-bottom: 20px !important; */

    }
}
</style>
