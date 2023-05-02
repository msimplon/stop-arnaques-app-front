<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      baseUrl: import.meta.env.VITE_IMG_BASE_URL,
      articles: [],
      value2: true,
    };
  },
  methods: {
    async initArticles() {
      const resp = await this.$http.get("/articles/for-edit");
      this.articles = resp.body;
    },
    async remove(id) {
      const resp = await this.$http.delete(`/articles/${id}`);
      if (resp.status === 204) {
        this.$toast.success("toast-global", "Article deleted with success.");
        await this.initArticles();
      } else {
        console.error(resp);
        this.$toast.error("toast-global", "Server error.");
      }
    },
  },
  beforeMount() {
    this.initArticles();
  },
};
</script>
<template>
  <h4>Edit articles</h4>
  <div>
    <input type="search" id="form1" class="form-control mg-3" />
    <label class="form-label" for="form1"></label>
  </div>

  <div v-show="value2" class="table-responsive">
    <table class="table table-hover">
      <thead>
        <tr class="text-center align-middle">
          <th scope="col">Image</th>
          <th class="w-100" scope="col">Title</th>
          <th scope="col">Date added</th>
          <th scope="col">Update</th>
          <th scope="col">Delete</th>
        </tr>
      </thead>
      <tbody class="text-nowrap align-middle">
        <tr v-for="article in articles">
          <td class="text-center">
            <img
              :src="baseUrl + article.imageUrl"
              class="img-fluid"
              :alt="article.title"
            />
          </td>
          <td>{{ article.title }}</td>
          <td>{{ this.$fmt.date(article.dateAdded) }}</td>
          <td class="text-center">
            <RouterLink
              :to="{ name: 'article-update', params: { id: article.id } }"
              title="Update article"
            >
              <i class="bi bi-pencil-square text-primary"></i>
            </RouterLink>
          </td>
          <td class="text-center">
            <a href="#" @click="remove(article.id)"
              ><i class="bi bi-trash3 text-danger"></i
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
