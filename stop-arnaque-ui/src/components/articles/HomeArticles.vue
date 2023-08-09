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
  <main>
    <a href="#" class="toTheTop"><img src="/images/arrow.svg" alt="up"></a>
    <section id="carrousel" class="carrousel">
      <div class="carrousel__content container-fluide">
        <div id="left" class="carrousel__left-arrow"></div>
        <div class="carrousel__center-content">
          <div class="carrousel__creed">
            <hr>
            <p>3000 alertes déjà envoyées</p>
            <hr>
          </div>
          <h1 class="carrousel__title"> ARRÊTEZ LES ARNAQUES DANS LEUR ÉLAN AVEC STOP ARNAQUE
          </h1>
          <p class="carrousel__quote">Stop Arnaque bloque les fraudes et escrocs d'internet pour vous</p>
          <a class="carrousel__more" href="#">Voir les dernières actualités</a>
          <div class="carrousel__dots">
            <div class="carrousel__dot--current carrousel__dot"></div>
            <div class="carrousel__dot"></div>
            <div class="carrousel__dot"></div>
          </div>
        </div>
        <div id="right" class="carrousel__right-arrow"></div>
      </div>
    </section>

    <hr class="featurette-divider">

    <div class="row row-cols-1 row-cols-md-3 g-3 mb-3 p-3">
      <div class="col" v-for="article in articles">
        <div class="card shadow-sm h-100">
          <div class="p-3"><img :src="baseUrl + article.imageUrl" class="card-img-top"></div>
          <div class="d-flex justify-content-evenly">
            <h5 class="card-title">{{ article.title }}</h5>
            <span>{{ article.date }}</span>
          </div>
          <div class="card-body">
            <h6 class="card-title">{{ article.subTitle }}</h6>
          </div>
          <div>
            <p class="d-flex align-items-center">
              {{ article.description }}
            </p>
            <RouterLink :to="{ name: 'article-detail', params: { id: article.id } }" class="link" title="Details...">
              En savoir plus
            </RouterLink>
          </div>
          <p class="d-flex align-items-center">
            {{ article.actor }}
          </p>
        </div>
      </div>
    </div>

    <section class="about whiteBG">
      <div class="row mb-2">
        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-primary">World</strong>
              <h3 class="mb-0">Featured post</h3>
              <div class="mb-1 text-muted">Nov 12</div>
              <p class="card-text mb-auto">This is a wider card with supporting text below as a natural lead-in to
                additional content.</p>
              <a href="#" class="link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
            <div class="col p-4 d-flex flex-column position-static">
              <strong class="d-inline-block mb-2 text-success">Design</strong>
              <h3 class="mb-0">Post title</h3>
              <div class="mb-1 text-muted">Nov 11</div>
              <p class="mb-auto">This is a wider card with supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" class="link">Continue reading</a>
            </div>
            <div class="col-auto d-none d-lg-block">
              <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" role="img"
                aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                <title>Placeholder</title>
                <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                  dy=".3em">Thumbnail</text>
              </svg>

            </div>
          </div>
        </div>
      </div>
    </section>
    <hr class="featurette-divider">

    <section class="stats darkgreyBG row row-cols-6 row-cols-md-5">
      <article class="stats__article">
        <img src="/images/people.svg" alt="icon" class="stats__icon">
        <div class="stats__description">
          <p class="stats__number">245</p>
          <p class="stats__name">AlERTES EN <br>TEMPS REEL</p>
        </div>
      </article>
      <article class="stats__article">
        <img src="/images/bank.svg" alt="icon" class="stats__icon">
        <div class="stats__description">
          <p class="stats__number">93k</p>
          <p class="stats__name">RECOURS JURIDIQUE<br>SUR MESURE</p>
        </div>
      </article>
      <article class="stats__article">
        <img src="/images/cash-coin.svg" alt="icon" class="stats__icon">
        <div class="stats__description">
          <p class="stats__number">106</p>
          <p class="stats__name">DISPOSITIF<br>ANTI-PHISHING</p>
        </div>
      </article>
      <article class="stats__article">
        <img src="/images/shop-window.svg" alt="icon" class="stats__icon">
        <div class="stats__description">
          <p class="stats__number">1k</p>
          <p class="stats__name">VICTIMES<br>PLUS JEUNES</p>
        </div>
      </article>
    </section>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-6">
        <h2 class="featurette-heading fw-normal lh-1 ms-4">First featurette heading. <span class="text-muted">It’ll blow
            your
            mind.</span></h2>
        <p class="lead ms-4">Some great placeholder content for the first featurette here. Imagine some exciting prose
          here.
        </p>
      </div>
      <div class="col-md-6 order-md-2">
        <img src="/images/e-commerce.png" class="rounded float-rigth w-200" alt="...">
      </div>
    </div>

    <hr class="featurette-divider">

    <div class="row featurette">
      <div class="col-md-6 order-md-2">
        <h2 class="featurette-heading fw-normal ms-4">Oh yeah, it’s that good. <span class="text-muted">See for
            yourself.</span></h2>
        <p class="lead ms-4">Another featurette? Of course. More placeholder content here to give you an idea of how this
          layout would work with some actual real-world content in place.</p>
      </div>
      <div class="col-md-6 order-md-1">
        <img src=" /images/e-commerce.png" class="rounded float-left" alt="...">
      </div>
    </div>
    <hr class="featurette-divider">
  </main>
</template>


<style>
.carrousel {
  width: 100%;
  position: relative;
  background-image: url("../public/images/R.jpg");
  background-position: center;
  background-repeat: no-repeat;
  min-height: 500px;

}

.carrousel__content {
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: grid;
  grid-template: 1fr / 1fr 80% 1fr;
  grid-template-areas: "left center-content right";
  /* prendre toute la largeur  */
}

.carrousel__center-content {
  height: 100%;
}

.carrousel__content>* {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.carrousel__left-arrow {
  grid-area: left;
  font-size: 4rem;
  font-size: min(4rem, 7vw);
  transition: background-color 0.6s, opacity 0.6s;
}

.carrousel__left-arrow:hover {
  opacity: 0.3;
}

.lh-1 {
  flex-direction: row-reverse !important;
}

.carrousel__creed {
  width: 100%;
  margin-top: 15%;
  display: flex;
  flex-direction: row !important;
  align-items: center;
  justify-content: space-around;

}

.carrousel__creed>p {
  color: var(--color-white);
  margin: 0;
  width: 12rem;
  text-align: center;
}

.carrousel__creed>hr {
  width: 40%;
  size: 1px;
  color: var(--color-white);
}

.carrousel__title {
  position: relative;
  object-position: 50% 50%;
  margin: 1em 0;
  grid-area: center-content;
  width: min(600px, 100%);
  text-align: center;
}

.carrousel__quote {
  font-weight: 600;
  text-align: center;
}

.carrousel__more {
  border-radius: 3px;
  padding: 10px 25px;
  font-size: 0.5rem;
  font-weight: 600;
  margin-top: 1vw;
}

.carrousel__dots {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
}

.carrousel__dot {
  width: 10px;
  height: 10px;
  background-color: var(--color-orange);
  border-radius: 50%;
  margin: 5px 10px;
  z-index: 1;
}

.carrousel__dot--current {
  width: 10px;
  height: 10px;
  background-color: var(--color-darkgrey);
  border-radius: 50%;
  margin: 5px 10px;
  z-index: 1;
  border: 1px solid var(--color-white);
}

.carrousel__right-arrow {
  grid-area: right;
  font-size: min(4rem, 7vw);
  color: var(--color-white);
  transition: background-color 0.6s, opacity 0.6s;
}

.carrousel__right-arrow:hover {
  background-color: var(--color-darkgrey);
  opacity: 0.3;
}

/*BACK TO TOP BUTTON*/
.toTheTop {
  height: 55px;
  width: 55px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  right: 25px;
  bottom: 25px;
  z-index: 10;


  background-color: grey;
  border-radius: 10px;
}

.toTheTop>img {
  height: 50%;
  width: 50%;
  filter: invert();
}

/*STATS*/
.stats {
  height: max-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
}

.stats__article {
  margin: 5px 20px;
}

.stats__icon {
  width: 60px;
  color: rgb(0, 119, 255) ! important;
  filter: invert(69%) sepia(29%) saturate(67%) hue-rotate(330deg) brightness(91%) contrast(36%);
}

.stats__description {
  display: flex;
  flex-direction: row;
}

.stats__number {
  font-size: 2rem;
  font-family: prata;
  font-weight: 550;
  color: rgb(0, 119, 255) ! important;
  margin: 0.2rem;
}

.stats__name {
  font-size: 0.8rem;
  font-family: muli;
  font-weight: 600;
  color: var(--color-white);
  margin: 0.2rem;
}




/* *****TEXT***** */

.align-items-center {
  margin-left: 5%;
  margin-right: 5%;
  justify-content: right;

}

p {
  justify-content: center;
}

.subtitle {
  font-family: "Arial Black", Gadget, sans-serif;
  font-size: 18px;
  letter-spacing: 2px;
  word-spacing: 2px;
  color: #000000;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: small-caps;
  text-transform: uppercase;
}

.link {
  font-size: large;
  margin-left: 5%;
  color: black;
  text-decoration: none;
}

.text {
  font-family: "Raleway", sans-serif !important;
}
</style>
