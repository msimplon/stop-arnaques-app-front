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
    <section>
        <div class="row row-cols-1 row-cols-md-3 g-3 mb-3 p-3">
            <!-- <h1>Who We Are</h1> -->
            <div class="col" v-for="article in articles">
                <div class="card-title">
                </div>
                <div class="cards">
                    <div class="card">
                        <img src="https://www.w3schools.com/w3images/team1.jpg" alt="" />
                        <div class="card-info">
                            <h1>{{ article.title }}</h1>
                            <h2>{{ article.editor }}</h2>
                            <span>{{ article.date }} </span>
                            <p>
                                {{ article.description }}
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
    </section>
</template>

<style lang="css">
section {
    margin-bottom: 40px;
}

.card-list {
    display: flex;
    flex-direction: column;
}


.card-title {
    text-align: center;
}

h1 {
    font-size: 30px;
}



/* .cards {
    display: flex;
    justify-content: space-around;
} */

.card {
    /* width: 330px; */
    -webkit-box-shadow: -1px -2px 15px 4px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px -2px 15px 4px rgba(0, 0, 0, 0.75);
    box-shadow: -1px -2px 15px 4px rgba(0, 0, 0, 0.75);
    margin-right: 10px;
}

img {
    width: 100%;
    height: 200px;
}

.card-info {
    padding: 10px;
    box-sizing: border-box;
}

span {
    color: gray;
}

p {
    color: black;
}

.contact {
    width: 100%;
    height: 35px;
    background: #f1f1f1;
    color: black;
    border: none;
    cursor: pointer;
}

/* 
:hover {
    background: gray;
    color: white;
} */



@media only screen and (max-width: 880px) {
    .cards {
        display: flex;
        flex-direction: column !important;
        align-items: center !important;
        margin-bottom: 20px !important;

    }
}
</style>
