<script>
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, minValue, requiredIf, between, helpers } from "@vuelidate/validators";

export default {

  setup() {
    return {
      validator: useVuelidate({ $autoDirty: true }),
    };
  },
  data() {
    return {
      categoryId: [],
      inputs: {
        title: null,
        subTitle: null,
        editor: null,
        introduction: null,
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
        editor: { required, maxLenght: maxLength(100) },
        introduction: { required, maxLength: maxLength(700) },
        description: { required, maxLength: maxLength(1000) },
        imageUrl: {
          required,
          maxValue: (file) => {
            return file === null || file.size < 512000
          },

        },
        categoryId: { required, minValue: minValue(1) },
        date: {
          required, minValue: () => {
            return this.inputs.date == this.inputs.date ? true : false
          }
        }
      },
    };
  },
  methods: {
    async submit() {
      const formData = new FormData()
      const valid = await this.validator.$validate()
      console.log(this.validator.inputs.imageUrl.$errors)
      if (valid) {
        const [year, month, day] = this.inputs.date.toString().split("-")
        if (this.inputs.imageUrl != null) {
          formData.append("imageUrl", this.inputs.imageUrl)
        }
        formData.append("title", this.inputs.title);
        formData.append("subTitle", this.inputs.subTitle);
        formData.append("editor", this.inputs.editor);
        formData.append("description", this.inputs.description);
        formData.append("introduction", this.inputs.introduction);
        formData.append("date", `${day}/${month}/${year}`);
        formData.append("categoryId", this.inputs.categoryId);

        console.log(formData)

        const resp = await this.$http.post("/articles", formData);

        console.log(formData)
        console.log(resp, "resp")

        if (resp.status === 201) {
          Object.assign(this.inputs, this.$options.data().inputs);
          // this.validator.$reset();
          this.$toast.success("toast-global", "L'article a été créé !!!");
          // this.$router.push({ name: "articles-edit" });
          this.$router.push({ name: "articles-home" });
        } else {
          console.error(resp);
          this.$toast.error("toast-global", "problème de validation");
        }
      }

    },

    handleFileUpload(event) {
      this.inputs.imageUrl = event.target.files[0]
    },
    async initcategory() {
      const resp = await this.$http.get("/categories");
      this.categoryId = resp.body;
    },
  },
  beforeMount() {
    this.initcategory();
  },

};
// const imageUrlPattern = helpers.$error(imageUrl === null)
</script>

<template>
  <div class="row justify-content-center mt-2" data-aos="fade-up" data-aos-delay="300">
    <div class="col-xl-9 col-lg-12">
      <h1 class="row justify-content-center mt-2 mb-3">
        Créer un article
      </h1>
      <form novalidate @submit.prevent="submit">
        <div class="row">
          <div class="col-md-4 mb-3">
            <label for="name" class="form-label required">Titre</label>
            <input v-model.trim="inputs.title" id="title" name="title" type="text" maxlength="100" class="form-control"
              :class="{ 'is-invalid': validator.inputs.title.$error }" />
            <div class="form-text text-danger" v-if="validator.inputs.title.$error">
              Veuillez renseigner ce champs.
            </div>

            <div class="form-text mb-3" v-else>Titre de l'article.</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="name" class="form-label required">Sous-titre</label>
            <input v-model.trim="inputs.subTitle" id="subTitle" name="subTitle" type="text" maxlength="100"
              class="form-control" :class="{ 'is-invalid': validator.inputs.subTitle.$error }" />
            <div class="form-text text-danger" v-if="validator.inputs.subTitle.$error">
              Veuillez renseigner ce champs.
            </div>

            <div class="form-text mb-3" v-else>Sous-titre de l'article.</div>
          </div>

          <div class="col-md-4 mb-3">
            <label for="editor" class="form-label required">Editeur</label>
            <input v-model.trim="inputs.editor" id="editor" name="editor" type="text" maxlength="100" class="form-control"
              :class="{ 'is-invalid': validator.inputs.editor.$error }" />
            <div class="form-text text-danger" v-if="validator.inputs.editor.$error">
              Veuillez renseigner ce champs.
            </div>

            <div class="form-text mb-3" v-else>Editeur de l'article.</div>
          </div>
        </div>
        <div class="col-12">
          <label for="description" class="form-label required">{{
            $t("categoryFormLabels.formDescription")
          }}</label>
          <textarea v-model.trim="inputs.description" id="description" name="description" maxlength="1000" rows="12"
            class="form-control" :class="{ 'is-invalid': validator.inputs.description.$error }"></textarea>
          <div class="form-text text-danger" v-if="validator.inputs.description.$error">
            Veuillez renseigner ce champs.
          </div>
          <div class="form-text mb-3" v-else>Contenu de l'article.</div>
        </div>

        <div class="col-12">
          <label for="introduction" class="form-label required">Introduction</label>
          <textarea v-model.trim="inputs.introduction" id="introduction" name="introduction" maxlength="1000" rows="12"
            class="form-control" :class="{ 'is-invalid': validator.inputs.introduction.$error }"></textarea>
          <div class="form-text text-danger" v-if="validator.inputs.introduction.$error">
            Veuillez renseigner ce champs.
          </div>
          <div class="form-text mb-3" v-else>Introduction de l'article.</div>
        </div>

        <div class="row mt-4">
          <div class="col-md-4 mb-3">
            <div class="mb-3">
              <div class="mb-3">
                <label for="imageUrl" class="form-label required">Ajouter une image</label>
                <input :class="{ 'is-invalid': validator.inputs.imageUrl.$error }" name="imageUrl" id="imageUrl"
                  type="file" accept="images/png,images/jpeg,images/jpg" class="form-control" @change="handleFileUpload">

                <div class="form-text text-danger"
                  v-if="validator.inputs.imageUrl.$error || validator.inputs.imageUrl.maxValue.$invalid">
                  Veillez renseiger ce champs et la taille de l'image ne peut pas dépasser 500ko. </div>

                <!-- <div class="form-text text-danger" v-else-if="validator.inputs.imageUrl.maxValue.$invalid">
                  La taille de l'image ne peut pas dépasser 500ko
                </div> -->

                <div class="form-text mb-3" v-else>Photo ou image.</div>
              </div>
            </div>


          </div>
          <div class="col-md-4 mb-3">
            <label for="name" class="form-label required">Date</label>
            <input v-model.trim="inputs.date" id="date" name="date" type="date" class="form-control"
              :class="{ 'is-invalid': validator.inputs.date.$error }" />

            <div class="form-text text-danger" v-if="validator.inputs.date.$error">
              Veuillez renseigner ce champs.
            </div>

            <div class="form-text mb-3" v-else>Date de publication.</div>
          </div>
          <div class="col-md-4 mb-3">
            <label for="categoryId" class="form-label required">Catégorie</label>
            <select v-model.number="inputs.categoryId" id="categoryId" name="categoryId" class="form-select"
              :class="{ 'is-invalid': validator.inputs.categoryId.$error }">
              <option selected disabled value="0">Choisir une catégorie</option>
              <LabelValues :items="categoryId" />
            </select>

            <div class="form-text text-danger" v-if="validator.inputs.categoryId.$error">
              Veuillez saisir une catégorie
            </div>

            <div class="form-text mb-3" v-else>Actualité ou conseil.</div>
          </div>
        </div>
        <div class="text-center d-flex justify-content-end">
          <button class="btn btn-outline-primary col-12 col-md-2 mt-3" type="submit">
            Créer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
form {
  padding: 30px;
}

.form-control {
  background-color: whitesmoke
}

.form-control:focus {
  border: 3px solid grey;
  border-color: grey;
  box-shadow: 0px 0px 1px 1px grey;
}

input {
  background-color: grey;
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
