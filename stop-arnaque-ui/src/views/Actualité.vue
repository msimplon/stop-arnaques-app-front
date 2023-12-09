<script>
import { onBeforeMount } from "vue";
import { storeToRefs } from "pinia";
import { ArticleStore } from "../stores/article-store";


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
      baseUrl: import.meta.env.VITE_IMG_BASE_URL

    };
  },

};
</script>

<template>
  <h2 class="fancy my-4" style="--w: 50vw;--c: #919191;--b:4px;--g:-5px">A la une</h2>
  <!-- <div class=" col-md-4 col-md-12 p-3 d-flex justify-content-center"> -->
  <div class="row">
    <div class="col-md-4 p-3 d-flex justify-content-center cardo " v-for="article in lastAddedArticles" :key="article.id">
      <div class="cardi w-100">
        <img :src="baseUrl + article.imageUrl" :alt="article.name" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title text-center">
            {{ article.title }}
          </h5>
          <p class="card-subtitle mb-2 text-muted text-center">
            {{ article.introduction }}
          </p>
          <RouterLink :to="{ name: 'article-detail', params: { id: article.id } }" class="link" title="Details..."> Lire
            plus
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
  <!-- </div> -->
</template>

<style>
/* ****DIVIDER**** */


.fancy {

  --c: #0B486B;

  width: fit-content;
  padding: 0 1em;
  line-height: 1.6em;
  border: 1px solid;
  color: #fff;
  background:
    conic-gradient(from 45deg at left, var(--c) 25%, #0000 0) 0,
    conic-gradient(from -135deg at right, var(--c) 25%, #0000 0) 100%;
  background-size: 51% 100%;
  background-origin: border-box;
  background-repeat: no-repeat;
  border-image:
    linear-gradient(#0000 calc(50% - var(--b)/2),
      var(--c) 0 calc(50% + var(--b)/2),
      #0000 0) 1/0 var(--w)/calc(var(--w) + var(--g));
  margin-inline: auto;
}

@media only screen and (max-width: 880px) {
  .cards {
    display: flex;
    flex-direction: column !important;
    align-items: center !important;

  }
}
</style>