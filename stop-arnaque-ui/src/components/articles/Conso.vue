<script>
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { ArticleStore } from "../../stores/article-store";


export default {
  name: "Conso",
  setup() {
    const articleStoreObj = ArticleStore();
    const { lastAddedArticles } = storeToRefs(articleStoreObj);
    onBeforeMount(() => {
      articleStoreObj.get_last_added_articles();
    });
    return {
      lastAddedArticles,
    };
  },

};
</script>

<template>
  <h3 class="my-4 animation">Derniers actualités</h3>
  <div class="row row-cols-2 row-cols-md-4 g-5">
    <div class="col" v-for="article in lastAddedArticles" :key="article.id">
      <RouterLink :to="{ name: 'article-detail', params: { id: article.id } }" class="ms-auto" title="Details...">
        <i class="bi bi-three-dots fs-5 text-primary"></i>
      </RouterLink>
      <div class="card">
        <img src="/images/project.png" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title text-center">
            {{ article.name }}
          </h5>
          <p class="card-subtitle mb-2 text-muted text-center">
            {{ article.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@keyframes animation {

  0%,
  50%,
  100% {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }

}
</style>