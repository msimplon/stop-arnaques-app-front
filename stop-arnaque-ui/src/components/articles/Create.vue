<script>
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, minValue, between } from "@vuelidate/validators";
// import { Carousel, Slide, Pagination } from 'vue3-carousel'


export default {
  // name: "articles-create",
  // components: {
  //   Carousel,
  //   Slide,
  //   Pagination
  // },
  setup() {
    return {
      validator: useVuelidate({ $autoDirty: true }),
    };
  },
  data() {
    return {
      // baseUrl: import.meta.env.VITE_IMG_BASE_URL,
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
    // problème ici car form data a faire et non input 
  },
  methods: {
    async submit() {
      const formData = new FormData()
      const valid = await this.validator.$validate()
      formData.append('ossama', 99999)
      // console.log("test", formData.get('ossama'), formData)


      if (valid) {
        const [year, month, day] = this.inputs.date.toString().split("-")
        // console.log("ok", this.inputs, formData)
        if (this.inputs.imageUrl != null) {
          formData.append("imageUrl", this.inputs.imageUrl)
        }
        formData.append("title", this.inputs.title);
        formData.append("subTitle", this.inputs.subTitle);
        formData.append("actor", this.inputs.actor);
        formData.append("description", this.inputs.description);
        formData.append("date", `${day}/${month}/${year}`);
        formData.append("categoryId", this.inputs.categoryId);

        console.log(formData)

        const resp = await this.$http.post("/articles", formData);
        // this.inputs = resp.data;
        //   const resp = await this.$http.post("/articles", {
        //     method: 'POST',
        //     headers: {
        //     'method': 'Post',
        //       'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify(
        //     formData)

        // })
        console.log(formData)
        console.log(resp, "resp")

        if (resp.status === 201) {
          Object.assign(this.inputs, this.$options.data().inputs);
          // this.validator.$reset();
          this.$toast.success("toast-global", "L'article a été créé !!!");
          this.$router.push({ name: "articles-edit" });
          // this.router.navigateByUrl('my-articles');
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
  // mounted() {
  //   let user = localStorage.getItem("user-info");
  //   if (!user) {
  //     this.$router.push({ name: "home" });
  //   }
  // },
  //redirection à decommenter une fois le create marche
};
</script>

<template>
  <div class="row justify-content-center mt-2" data-aos="fade-up" data-aos-delay="300">
    <div class="col-xl-9 col-lg-12">
      <h1 class="row justify-content-center mt-2 mb-3">
        Créer un article
      </h1>
      <form novalidate @submit.prevent="submit">
        <div class="row">
          {{ (inputs) }}""""
          <div class="col-md-4 mb-3">
            <label for="name" class="form-label required">Titre</label>
            <input v-model.trim="inputs.title" id="title" name="title" type="text" maxlength="100" class="form-control"
              :class="{ 'is-invalid': validator.inputs.title.$error }" />
          </div>
          <div class="col-md-4 mb-3">
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
                <input name="imageUrl" id="imageUrl" type="file" accept="images/png,image/jpeg,image/jpg"
                  class="form-control" @change="handleFileUpload">

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
            Créer
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
form {
  /* box-shadow: 0 0 30px rgba(214, 215, 216, 0.6); */
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
