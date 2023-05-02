<script setup>
import SignIn from "./commons/SignIn.vue";
import SignUp from "./commons/SignUp.vue";
</script>

<template>
  <div class="container-xl mt-3">
    <h3 class="row justify-content-center mt-4">
      S'enregistrer ou se connecter
    </h3>
    <div class="row mt-4">
      <div class="col-md my-6 mx-auto">
        <h4 class="mt-2">Connexion</h4>
        <section id="section1">
          <SignIn></SignIn>
        </section>
      </div>
      <div class="col-md my-6 mx-auto">
        <h4 class="mt-2">S'enregistrer</h4>
        <section id="section2">
          <SignUp></SignUp>
        </section>
      </div>
    </div>
  </div>
</template>
<style>
.col-md {
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
}
</style>
