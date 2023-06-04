<script>
import { useRoute } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, minValue, between } from "@vuelidate/validators";

export default {
  setup() {
    return {
      route: useRoute(),
      validator: useVuelidate({ $autoDirty: true }),
    };
  },
  data() {
    return {
      id: this.route.params.id,
      baseUrl: import.meta.env.VITE_IMG_BASE_URL,
      categoryId: [],
      inputs: {
        title: null,
        subTitle: null,
        description: null,
        imageUrl: null,
        date: null,
        categoryId: 0,
      },
    };
  },
  validations() {
    return {
      inputs: {
        title: { required, maxLength: maxLength(100) },
        subTitle: { required, maxLength: maxLength(100) },
        description: { required, maxLength: maxLength(1000) },
        imageUrl: { required, maxLength: maxLength(50) },
        categoryId: { required },
        date: { required }
      },
    };
  },
  methods: {
    async submit() {
      const resp = await this.$http.put(`/articles/${this.id}`, this.inputs);
      if (resp.status === 200) {
        this.$toast.success("toast-global", "Article modifié avec succès");
        this.$router.push({ name: "articles-edit" });
      } else {
        console.error(resp);
        this.$toast.error("toast-global", "validation erreur.");
      }
    },
    async initcategory() {
      const resp = await this.$http.get("/categories");
      this.categoryId = resp.body;
      // this = l'instance du componsant
      // $http = l'instance d'axios telle que declarer dans les
      // proprietes globales en s'appuyant sur un plugin pour l'enregsitrer dans l'application
      // resp = reponse "simplifiee" grace a l'interceptor (cf. plugin axios)
    },
    async initInputs() {
      const resp = await this.$http.get(`/articles/article-view/${this.id}`);
      this.inputs = resp.body;
    },
  },
  beforeMount() {
    this.initcategory();
    this.initInputs();
  },
};
</script>

<template>
  <div
    class="row justify-content-center"
    data-aos="fade-up"
    data-aos-delay="300"
  >
    <div class="col-xl-9 col-lg-12">
      <h1>Update article</h1>
      <form novalidate @submit.prevent="submit">
        <!-- <div class="row mb-3"> -->
   <div class="col-12">
          <label for="name" class="form-label required">Titre</label>
          <input
            v-model.trim="inputs.title"
            id="title"
            name="title"
            type="text"
            maxlength="100"
            class="form-control"
            :class="{ 'is-invalid': validator.inputs.title.$error }"
          />
        </div>
        <div class="col-12">
          <label for="name" class="form-label required">Sous-titre</label>
          <input
            v-model.trim="inputs.subTitle"
            id="subTitle"
            name="subTitle"
            type="text"
            maxlength="100"
            class="form-control"
            :class="{ 'is-invalid': validator.inputs.subTitle.$error }"
          />
        </div>
        <div class="col-12">
          <label for="description" class="form-label required">{{
            $t("categoryFormLabels.formDescription")
          }}</label>
          <textarea
            v-model.trim="inputs.description"
            id="description"
            name="description"
            maxlength="1000"
            rows="12"
            class="form-control"
            :class="{ 'is-invalid': validator.inputs.description.$error }"
          ></textarea>
        </div>
        <div class="col-12">
          <label for="imageUrl" class="form-label required">{{
            $t("categoryFormLabels.formImageUrl")
          }}</label>
          <div class="input-group">
            <span class="input-group-text">{{ baseUrl }}</span>
            <input
              v-model.trim="inputs.imageUrl"
              id="imageUrl"
              name="imageUrl"
              type="text"
              maxlength="50"
              class="form-control"
              :class="{ 'is-invalid': validator.inputs.imageUrl.$error }"
            />
          </div>
        </div>
        <div class="col-12">
          <label for="name" class="form-label required">date</label>
          <input
            v-model.trim="inputs.date"
            id="date"
            name="date"
            type="date"
            class="form-control"
            :class="{ 'is-invalid': validator.inputs.date.$error }"
          />
        </div>
        <div class="row">
          <div class="col-md-4 mt-2">
            <label for="categoryId" class="form-label required"
              >Catégorie</label
            >
            <select
              v-model.number="inputs.categoryId"
              id="categoryId"
              name="categoryId"
              class="form-select"
              :class="{ 'is-invalid': validator.inputs.categoryId.$error }"
            >
              <option selected disabled value="0">Choisir une catégorie</option>
              <LabelValues :items="categoryId" />
            </select>
          </div>
        </div>
        <div class="text-center d-flex justify-content-end">
          <button
            class="btn btn-outline-primary col-12 col-md-2 mt-3"
            type="submit"
          >
            Créer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
form {
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 30px;
}

button[type="submit"] {
  background: rgb(0, 119, 255);
  border: 20px;
  padding: 10px 10px;
  color: #fff;
  transition: 0.4s;
}

button[type="submit"]:hover {
  background: #78cbec;
}
</style>
