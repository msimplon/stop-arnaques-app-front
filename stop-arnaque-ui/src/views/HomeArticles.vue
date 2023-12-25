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

    <header class="masthead">
      <div class="container">
        <div class="masthead-subheading">Arrêtez les arnaques dans leur élan
        </div>
        <div class="masthead-heading text-uppercase"> avec Stop Arnaque</div>
        <a class="btn btn-primary btn-xl text-uppercase" href="#services">
          <RouterLink to="signUp" class="btn search-button bg-primary text-light ">
            S'inscrire
          </RouterLink>
        </a>
      </div>
    </header>
    <section class="page-section" id="services">
      <div class="container">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">Services</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">DISPOSITIF<br>ANTI-PHISHING</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
              architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">RECOURS JURIDIQUE<br>SUR MESURE</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
              architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">1K DE VICTIMES<br> PLUS JEUNE</h4>
            <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam
              architecto quo inventore harum ex magni, dicta impedit.</p>
          </div>
        </div>
      </div>
    </section>

    <InfoCards />
    <section class="page-section bg-light" id="team">
      <div class="container">
        <div class="row text-center">
          <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="../../../public/images/1.jpg" alt="..." />
              <h4>Parveen Anand</h4>
              <h5 class="text-muted mt-2">Lead Developer</h5>
              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Twitter Profile"><i
                  class="fab fa-twitter"></i></a>
              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand Facebook Profile"><i
                  class="fab fa-facebook-f"></i></a>
              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Parveen Anand LinkedIn Profile"><i
                  class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="../../../public/images/2.jpg" alt="..." />
              <h4>Diana Petersen</h4>
              <h5 class="text-muted mt-2">Lead Developer</h5>
              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Twitter Profile"><i
                  class="fab fa-twitter"></i></a>
              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen Facebook Profile"><i
                  class="fab fa-facebook-f"></i></a>
              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Diana Petersen LinkedIn Profile"><i
                  class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="team-member">
              <img class="mx-auto rounded-circle" src="../../../public/images/3.jpg" alt="..." />
              <h4>Larry Parker</h4>
              <h5 class="text-muted mt-2">Lead Developer</h5>
              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Twitter Profile"><i
                  class="fab fa-twitter"></i></a>
              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker Facebook Profile"><i
                  class="fab fa-facebook-f"></i></a>
              <a class="btn btn-dark btn-social mx-2" href="#!" aria-label="Larry Parker LinkedIn Profile"><i
                  class="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-8 mx-auto text-center">
            <p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque,
              laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p>
          </div>
        </div>
      </div>
    </section>
    <div class="py-5">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-3 col-sm-6 my-3">
            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../../../public/images/microsoft.svg"
                alt="..." aria-label="Microsoft Logo" /></a>
          </div>
          <div class="col-md-3 col-sm-6 my-3">
            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../../../public/images/google.svg"
                alt="..." aria-label="Google Logo" /></a>
          </div>
          <div class="col-md-3 col-sm-6 my-3">
            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../../../public/images/facebook.svg"
                alt="..." aria-label="Facebook Logo" /></a>
          </div>
          <div class="col-md-3 col-sm-6 my-3">
            <a href="#!"><img class="img-fluid img-brand d-block mx-auto" src="../../../public/images/ibm.svg" alt="..."
                aria-label="IBM Logo" /></a>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style>
/*****NEW FRONT  */

.link {
  font-size: large;
  margin-left: 5%;
  color: black;
  text-decoration: none;
}

header.masthead {
  padding-top: 10.5rem;
  padding-bottom: 6rem;
  text-align: center;
  color: #fff;
  background-image: url("../../../public/images/header-bg.jpg");
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center center;
  background-size: cover;
}


header.masthead .masthead-subheading {
  font-size: 1.5rem;
  font-style: italic;
  line-height: 1.5rem;
  margin-bottom: 25px;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

header.masthead .masthead-heading {
  font-size: 3.25rem;
  font-weight: 700;
  line-height: 3.25rem;
  margin-bottom: 2rem;
  font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

@media (min-width: 768px) {
  header.masthead {
    padding-top: 17rem;
    padding-bottom: 12.5rem;
  }

  header.masthead .masthead-subheading {
    font-size: 2.25rem;
    font-style: italic;
    line-height: 2.25rem;
    margin-bottom: 2rem;
  }

  header.masthead .masthead-heading {
    font-size: 4.5rem;
    font-weight: 700;
    line-height: 4.5rem;
    margin-bottom: 4rem;
  }
}


.page-section {
  padding: 1rem 0;
}

.page-section h2.section-heading,
.page-section .section-heading.h2 {
  font-size: 2.5rem;
  margin-top: 0;
  margin-bottom: 1rem;
}

.page-section h3.section-subheading,
.page-section .section-subheading.h3 {
  font-size: 1rem;
  font-weight: 400;
  font-style: italic;
  font-family: "Roboto Slab", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  margin-bottom: 4rem;
}

@media (min-width: 768px) {
  /* section {
    padding: 1rem 0;
  } */

  .team-member {
    margin-bottom: 3rem;
    text-align: center;
  }

  .team-member img {
    width: 14rem;
    height: 14rem;
    border: 0.5rem solid rgba(0, 0, 0, 0.1);
  }

  .team-member h4,
  .team-member .h4 {
    margin-top: 1.5rem;
    margin-bottom: 0;
  }

  .img-brand {
    height: 2.75rem;
  }

  .text-muted {
    font-size: 15px;
    color: #6c757d !important;
    text-align: center;
  }


}
</style>