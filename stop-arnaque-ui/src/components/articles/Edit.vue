<script>
// import TableSkeleton from '../skeletons/TableSkeleton.vue';
export default {
  //  component: {
  //  TableSkeleton
  //  },
  data() {
    return {
      baseUrl: import.meta.env.VITE_IMG_BASE_URL,
      articles: [],
      // value2: true,
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
  // mounted() {
  //   let user = localStorage.getItem("user-info");
  //   if (!user) {
  //     this.$router.push({ name: "home" });
  //   }
  // },
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
          <th scope="col">Date d'ajout</th>
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
          <td class="text-center">{{ this.$fmt.date(article.dateAdded) }}</td>
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
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style>
img {
  padding: 5px;
  width: 150px;
}

thead {
  border: 1px solid #185999;
  background: #f2f2f2;
}

tbody {
  border: 1px solid #185999;
}

.bi-pencil-square {
  color: #185999 !important;
}

.bi-trash3 {
  color: red !important;
}

/* .col {
  border: 4px solid #185999;
  background: #f2f2f2;
} */
/* .table-bordered {
  border: 2px solid #185999;
} */
.page-link {
  color: #185999 !important;
}
</style>
