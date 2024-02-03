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
    async remove(id) {
      const resp = await this.$http.delete(`/articles/byId/${id}`);
      if (resp.status === 200) {
        this.$toast.success("toast-global", "Article supprimé avec succes.");
        this.$router.push({ name: "articles-edit" });
        await this.initArticles();
      } else {
        console.error(resp);
        this.$toast.error("toast-global", "erreur.");
      }
    },


  },
  beforeMount() {
    this.initArticles();
  },

};
</script>
<template>
  <h1 class="row justify-content-center mt-2 mb-3">Modifier un article</h1>
  <div class="table-responsive">

    <table class="table table-hover table-bordered">
      <thead>
        <tr class="text-center align-middle">
          <th scope="col">Image</th>
          <th scope="col">Titre</th>
          <th scopr="col">Editeur</th>
          <th scope="col">Date de publication</th>
          <th scope="col">Modifier</th>
          <th scope="col">Supprimer</th>
        </tr>
      </thead>
      <tbody class="text-nowrap align-middle">
        <tr v-for="article in articles">
          <td class="text-center">
            <img :src="baseUrl + article.imageUrl" class="img-fluid rounded-top" :alt="article.title" />
          </td>
          <td class="text-center">{{ article.title }}</td>
          <td class="text-center">{{ article.editor }}</td>
          <td class="text-center">{{ $d(article.date, 'long') }}</td>
          <td class="text-center">
            <RouterLink :to="{ name: 'article-update', params: { id: article.id } }" title="Update article">
              <i class="bi bi-pencil-square"></i>
            </RouterLink>
          </td>
          <td class="text-center">
            <a href="#" @click="remove(article.id)"><i class="bi bi-trash3"></i></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>