<script>
import { useRoute } from "vue-router";
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, minValue, between } from "@vuelidate/validators";

export default {
  setup() {
    return {
      route: useRoute(),
      // v$: useVuelidate(),
      validator: useVuelidate({ $autoDirty: true }),
    };
  },
  data() {
    return {
      id: this.route.params.id,

      categoryId: [],
      inputs: {
        title: null,
        subTitle: null,
        actor: null,
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
        actor: { required, maxLenght: maxLength(100) },
        description: { required, maxLength: maxLength(1000) },
        imageUrl: {
          maxValue: (imageUrl) => {
            return imageUrl === null || imageUrl.size < 512000
          }
        },
        categoryId: { required },
        date: { required }
      },
    };
  },
  methods: {
    async initInputs() {
      const resp = await this.$http.get(`/articles/article-view/${this.id}`);
      // const data = response.data
      this.inputs = resp.body;
    },
    async updateArticle() {
      const formData = new FormData()
      const valid = await this.validator.$validate()
      if (valid) {
        const [year, month, day] = this.inputs.date.toString().split("-")
        if (this.inputs.imageUrl != null) {
          formData.append('imageUrl', this.inputs.imageUrl)
        }
        formData.append('title', this.inputs.title)
        formData.append('subTitle', this.inputs.subTitle)
        formData.append('actor', this.inputs.actor)
        formData.append('date', `${day}/${month}/${year}`)
        formData.append('description', this.inputs.description)
        formData.append('categoryId', this.inputs.categoryId)
        console.log(formData)

        const response = await this.$http.patch(`/articles/${this.id}`, formData)

        console.log(formData)

        if (response.status === 200) {
          Object.assign(this.inputs, this.$options.data().inputs);
          this.$toast.success("toast-global", "Article modifié avec succès");
          this.$router.push({ name: "articles-edit" });
        } else {
          console.error(response);
          this.$toast.error("toast-global", "validation erreur.");
        }
      }

    },

    handleFileUpload(event) {
      this.inputs.imageUrl = event.target.files[0]
    },
    async initcategory() {
      const resp = await this.$http.get("/categories");
      this.categoryId = resp.body;
      // this = l'instance du componsant
      // $http = l'instance d'axios telle que declarer dans les
      // proprietes globales en s'appuyant sur un plugin pour l'enregsitrer dans l'application
      // resp = reponse "simplifiee" grace a l'interceptor (cf. plugin axios)
    },

  },
  beforeMount() {
    this.initcategory();
    this.initInputs();
  }
}
</script>

<template>
  <div class="row justify-content-center" data-aos="fade-up" data-aos-delay="300">
    <div class="col-xl-9 col-lg-12">
      <h1 class="row justify-content-center mt-2 mb-3">Modifier l'article</h1>
      <form novalidate @submit.prevent="updateArticle">
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="name" class="form-label required">Titre</label>
            <input v-model.trim="inputs.title" id="title" name="title" type="text" maxlength="100" class="form-control"
              :class="{ 'is-invalid': validator.inputs.title.$error }" />
          </div>
          <div class="col-md-6 mb-3">
            <label for="name" class="form-label required">Sous-titre</label>
            <input v-model.trim="inputs.subTitle" id="subTitle" name="subTitle" type="text" maxlength="100"
              class="form-control" :class="{ 'is-invalid': validator.inputs.subTitle.$error }" />
          </div>

          <div class="col-md-4 mb-3">
            <label for="actor" class="form-label required">Acteur</label>
            <input v-model.trim="inputs.actor" id="actor" name="actor" type="text" maxlength="100" class="form-control"
              :class="{ 'is-invalid': validator.inputs.actor.$error }" />
          </div>
        </div>
        <div class="col-12">
          <label for="description" class="form-label required">{{
            $t("categoryFormLabels.formDescription")
          }}</label>
          <textarea v-model.trim="inputs.description" id="description" name="description" maxlength="1000" rows="12"
            class="form-control" :class="{ 'is-invalid': validator.inputs.description.$error }"></textarea>
        </div>
        <div class="row mt-4">
          <div class="col-md-4 mb-3">
            <div class="mb-3">
              <div class="mb-3">
                <label for="imageUrl" class="form-label required">Ajouter une image</label>
                <input name="imageUrl" id="imageUrl" type="file" class="form-control"
                  accept="image/png,image/gif,image/jpg" @change="handleFileUpload">

                <div class="form-text text-danger" v-if="validator.inputs.imageUrl.$error">
                  Image size must be less than 500ko
                </div>

                <div class="form-text mb-3" v-else>Photo or any image.</div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="name" class="form-label required">Date</label>
            <input v-model.trim="inputs.date" id="date" name="date" type="date" class="form-control"
              :class="{ 'is-invalid': validator.inputs.date.$error }" />
          </div>
          <div class="col-md-4 mb-3">
            <label for="categoryId" class="form-label required">Catégorie</label>
            <select v-model.number="inputs.categoryId" id="categoryId" name="categoryId" class="form-select"
              :class="{ 'is-invalid': validator.inputs.categoryId.$error }">
              <option selected disabled value="0">Choisir une catégorie</option>
              <LabelValues :items="categoryId" />
            </select>
          </div>
        </div>
        <div class="text-center d-flex justify-content-end">
          <button class="btn btn-outline-primary col-12 col-md-2 mt-3" type="submit">
            Modifier
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
