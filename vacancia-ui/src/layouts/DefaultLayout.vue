<script setup>
import { RouterView } from "vue-router";
import Header from "../components/commons/Header.vue";
import Toast from "../components/commons/Toast.vue";
import Footer from "../components/commons/Footer.vue";
</script>

<template>
  <Header />
  <main class="container-xl">
    <RouterView />
  </main>
  <Footer />
  <Toast id="toast-global" />
</template>
