<script>

// import SearchComponent from "../commons/SearchComponent.vue";
import InfoCards from "../components/articles/infoCards.vue";
export default {
  name: "HomeArticles",
  components: {
    // SearchComponent,
    InfoCards,
  },

};
</script>

<template>
  <main>
    <a href="#" class="toTheTop"><img src="/images/arrow.svg" alt="up"></a>

    <div id="header" class=" container-xxl wrapper bg-secondary text-white p-4 ">
      <div class="top-landing container py-3 row mx-auto w-100">
        <div class="col-md col-12 my-auto">
          <h1 class="text-center demotext">ARRÊTEZ LES ARNAQUES<br>DANS LEUR ÉLAN <strong>AVEC
              STOP
              ARNAQUE</strong>
          </h1>

          <p class="text-center activity-list mt-4">
            <RouterLink to="signUp" class="btn search-button bg-primary text-light ">
              S'inscrire
            </RouterLink>
          </p>
        </div>
        <div class="col d-flex justify-content-center">
          <img class="home" src="../../../public/images/online.png" alt="project">
        </div>
      </div>
    </div>
    <!-- <SearchComponent /> -->
    <InfoCards />

    <div class="triangle mt-2 stats darkgreyBG row row-cols-12 row-cols-md-12">

      <div id="gtco-who-we-are">
        <div class="section-content p-1">
          <div class="row text-center">
            <div class="col-12 col-lg-4">
              <img class="rounded-circle" src="/images/animat-checkmark.gif" alt="Generic placeholder image" width="140"
                height="140">
              <h5 class="mb-4">Simple et efficace</h5>
              <p class=" col-lg-9 mx-auto">Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id
                dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
            <div class="col-12 col-lg-4">
              <img class="rounded-circle" src="/images/animat-customize.gif" alt="Generic placeholder image" width="140"
                height="140">
              <h5 class="mb-4">Facile à prendre en main</h5>
              <p class=" col-lg-9 mx-auto">Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem
                nec elit. Vestibulum id ligula porta felis.</p>
            </div>
            <div class="col-12 col-lg-4">
              <img class="rounded-circle" src="images/animat-responsive.gif" alt="Generic placeholder image" width="140"
                height="140">
              <h5 class="mb-4">Totalement responsive</h5>
              <p class=" col-lg-9 mx-auto">Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget
                quam.
                Vestibulum id ligula porta felis euismod semper. </p>
            </div>

          </div>
        </div>
      </div>

    </div>

    <section>
      <div class="my-1">
        <div class="p-5 text-center bg-body-tertiary">
          <div class="container py-5">
            <h4 class="text-body-emphasis">Influenceurs : la première loi encadrant le secteur définitivement adoptée par
              le Parlement</h4>
            <p class="col-lg-8 mx-auto lead">
              Après les députés, mercredi, les sénateurs ont adopté, à l’unanimité, le texte interdisant la promotion de
              certains produits et encadrant cette nouvelle profession en ligne.
            </p>
          </div>
        </div>
      </div>
    </section>
    <!-- <section class="curved"></section> -->

    <section class="p-1">
      <div class="row g-3">
        <div class="col-12 col-lg-4">
          <div class="card rounded-4 shadow h-100">
            <div class="card-header  text-white fw-bold">Vous êtes victime
              d'arnaques?</div>
            <div class="d-flex card-body">
              <i class="bi bi-quote text-secondary me-3 fs-1"></i>
              <p class="card-text pe-2">Donner l'alerte sur Stop Arnaque
                Effectuer un signalement via le formulaire Stop Arnaque prévu à cet effet.<br>
                <span class="text-primary fst-italic fs-5">Loris, juriste en droit de la consommation..</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="card rounded-4 shadow h-100">
            <div class="card-header text-white fw-bold">Saisir la DGCCRF rapidement</div>
            <div class="d-flex card-body">
              <i class="bi bi-quote text-secondary me-3 fs-1"></i>
              <p class="card-text pe-2">Signal-Conso.gouv.fr est un service qui permet de saisir la Direction
                Générale de la Concurrence, de la Consommation et de la Répression des Fraudes (DGCCRF).<br>
                <span class="text-primary fst-italic fs-5">Gilles D. inspecteur des fraudes</span>
              </p>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="card rounded-4 shadow h-100">
            <div class="card-header text-white fw-bold">Récupérer le préjudice financier</div>
            <div class="d-flex card-body">
              <i class="bi bi-quote text-secondary me-3 fs-1"></i>
              <p class="card-text pe-2">Notre service juridique est là pour vous accompagner dans votre démarche
                de récupération de votre préjudice financier.<br>
                <span class="text-primary fst-italic fs-5">Franck, fondateur de stop arnaques</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
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
  </main>
</template>


<style>
#header {
  height: 450px;

}

.home {
  width: 80%;
  height: 65%;
}

@media (min-width: 1400px) {
  .container-xxl {
    max-width: 1900px;

  }
}


.slogan {
  color: #ffffff
}



.title-wrap,
.section-title {
  /* text-align: center; */
  justify-content: center;
}


.section-title,
.section-sub-title {
  margin-bottom: 30px;
}

.curved {
  position: relative;
  background: grey;
  height: 50vh;
  border-bottom-left-radius: 50% 20%;
  border-bottom-right-radius: 50% 20%;
}

.triangle {
  position: relative;
  background: grey;
  height: 50vh;
}

.triangle::before {
  content: '';
  position: absolute;
  bottom: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 100px 100px 0 100px;
  border-color: grey transparent transparent transparent;
  left: 50%;
  transform: translateX(-50%) translateY(100%);
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


p,
.text {
  font-family: 'Raleway', sans-serif !important;

}

.whiteBG {
  background-color: grey;
  background-size: cover;
}

.featurette-divider {
  background-color: rgb(232, 232, 245)
}

span {
  font-size: large;
}

.cardi {
  width: 20rem;
}

p,
.text {
  font-family: 'Raleway', sans-serif !important;
  font-size: medium;

}

p,
.text {
  font-family: 'Raleway', sans-serif !important;

}

.card-header {
  background-color: grey;
}

.fw-bold {
  font-size: large;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
