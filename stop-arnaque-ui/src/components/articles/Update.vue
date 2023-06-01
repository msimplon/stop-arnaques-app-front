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
      category: [],
      inputs: {
        title: null,
        subTitle: null,
        description: null,
        imageUrl: null,
        category: 0,
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
        category: { minValue: minValue(1) },
      },
    };
  },
  methods: {
    async submit() {
      const resp = await this.$http.put(`/articles/${this.id}`, this.inputs);
      if (resp.status === 204) {
        this.$toast.success("toast-global", "Article modifié avec succès");
        this.$router.push({ name: "articles-edit" });
      } else {
        console.error(resp);
        this.$toast.error("toast-global", "validation erreur.");
      }
    },
    async initcategory() {
      const resp = await this.$http.get("/categories");
      this.category = resp.body;
      // this = l'instance du componsant
      // $http = l'instance d'axios telle que declarer dans les
      // proprietes globales en s'appuyant sur un plugin pour l'enregsitrer dans l'application
      // resp = reponse "simplifiee" grace a l'interceptor (cf. plugin axios)
    },
    async initInputs() {
      const resp = await this.$http.get(`/articles/${this.id}/for-update`);
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
    <div class="col-xl-9 col-lg-12 mt-4">
      <h1>Update article</h1>
      <form novalidate @submit.prevent="submit">
        <div class="row mb-3">
          <div class="col-12">
            <label for="title" class="form-label required">Titre</label>
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
        </div>
        <div class="row mb-3">
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
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label for="description" class="form-label required"
              >Description</label
            >
            <textarea
              v-model.trim="inputs.description"
              id="description"
              name="description"
              maxlength="1000"
              rows="3"
              class="form-control"
              :class="{ 'is-invalid': validator.inputs.description.$error }"
            ></textarea>
          </div>
        </div>
        <div class="row mb-3">
          <div class="col-12">
            <label for="imageUrl" class="form-label required">Image URL</label>
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
        </div>
        <div class="row">
          <div class="col-md-4 mb-3">
            <label for="category" class="form-label required">Category</label>
            <select
              v-model.number="inputs.category"
              id="categoryId"
              name="category"
              class="form-select"
              :class="{ 'is-invalid': validator.inputs.categoryId.$error }"
            >
              <option selected disabled value="0">Choose a category</option>
              <LabelValues :items="category" />
            </select>
          </div>
          <div class="d-grid d-md-flex justify-content-md-end mb-3">
            <button
              type="submit"
              class="btn btn-dark"
              :disabled="validator.$invalid"
            >
              Sauvegarder
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
