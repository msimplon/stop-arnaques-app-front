<script setup>
import SignIn from "./commons/SignIn.vue";
import SignUp from "./commons/SignUp.vue";
</script>

<template>
  <div class="container-xl mt-2">
    <div class="presentation">
      <div class="welcome">Bienvenue sur stop arnaque!</div>
      <div>
        <p>Arrêtez les arnaques dans leur élan avec stop arnaque !</p>
      </div>
      <div class="description">
        <p>Inscrivez-vous ou connectez-vous pour tester!</p>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md my-6 mx-auto">
        <!-- <h4 class="mt-2">Connexion</h4> -->
        <section id="section1">
          <SignIn></SignIn>
        </section>
      </div>
      <div class="col-md my-6 mx-auto">
        <!-- <h4 class="mt-2">S'enregistrer</h4> -->
        <section id="section2">
          <SignUp></SignUp>
        </section>
      </div>
    </div>
  </div>
  <div class="mt-3">
    En validant votre inscription, vous accepter les
    <RouterLink :to="{ name: 'cgu' }"
      >conditions générales d’utilisation (CGU)</RouterLink
    >
  </div>
</template>

<style>
.presentation {
  text-align: center;
  margin-top: 1em;
}
.welcome {
  margin-bottom: 0.25em;
  font-weight: bold;
  font-size: 2.25em;
  color: rgb(0, 119, 255);
}

.description {
  font-weight: bold;
  font-size: 1.25em;
}

.p {
  font-size: 1em;
}
</style>
