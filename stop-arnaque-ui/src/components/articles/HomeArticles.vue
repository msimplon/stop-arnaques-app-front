<script>

// import SearchComponent from "../commons/SearchComponent.vue";
import InfoCards from "./infoCards.vue";
import Temoignages from "./Temoignages.vue";
import HomeLead from "./HomeLead.vue";
export default {
  name: "HomeArticles",
  components: {
    // SearchComponent,
    InfoCards,
    HomeLead,
    Temoignages
  },

};
</script>

<template>
  <main>
    <a href="#" class="toTheTop"><img src="/images/arrow.svg" alt="up"></a>

    <HomeLead />

    <!-- <SearchComponent /> -->
    <InfoCards />

    <section>
      <div class="my-5">
        <div class="p-5 text-center bg-body-tertiary">
          <div class="container py-5">
            <h1 class="text-body-emphasis">Full-width jumbotron</h1>
            <p class="col-lg-8 mx-auto lead">
              This takes the basic jumbotron above and makes its background edge-to-edge with a <code>.container</code>
              inside to align content. Similar to above, it's been recreated with built-in grid and utility classes.
            </p>
          </div>
        </div>
      </div>

    </section>

    <Temoignages />

    <section class="stats darkgreyBG row row-cols-2 row-cols-md-5">
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

    <!-- <section>
      <h2 class="display-6 text-center mt-0">Ils nous font confiance</h2>
      <div class="d-flex justify-content-center align-items-center">
        <a href="https://simplon.co/" rel="noreferrer nofollow" target="_blank" class="mx-4">
          <img src="/images/DGCCRF.jpg" class="img-circle" alt="Logo Simplon">
        </a>
        <a href="https://moovjee.fr/" rel="noreferrer nofollow" target="_blank" class="mx-4">
          <img src="/images/DGCCRF.jpg" class="img-circle" alt="Logo Moovjee">
        </a>
      </div>
    </section> -->


  </main>
</template>


<style>
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
  padding: 20px 0;
}

.stats__article {
  margin: 5px 30px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
}

.stats__icon {
  width: 50px;
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

/* Ils nous ont fait confiance */
.img-circle {
  max-width: 30%;
  max-height: 30%;
}

.flex-items {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
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

.whiteBG {
  background-color: grey;
  background-size: cover;
}

.featurette-divider {
  background-color: rgb(232, 232, 245)
}

/* .darkgreyBG {
  margin-bottom: 0px;
  background-color: rgb(232, 232, 245)
} */
</style>
