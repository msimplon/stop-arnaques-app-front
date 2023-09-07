<script>
import useValidate from "@vuelidate/core";
import { reactive, computed } from "vue";
import { required, maxLength, minLength, minValue, requiredIf, between, helpers } from "@vuelidate/validators";
import ValidationMessage from "./ValidationMessage.vue";

export default {
    name: "Create",
    components: {
        ValidationMessage,
    },
    setup() {
        const state = reactive({
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
        });


        const rules = computed(() => {
            return {
                inputs: {
                    title: {
                        required: helpers.withMessage(
                            "Veuillez renseigner ce champ.",
                            required
                        ),
                        minLength: helpers.withMessage(
                            "Veuillez saisir au moins 2 caractères.",
                            minLength(2)
                        ),
                        maxLength: helpers.withMessage(
                            "Veuillez saisir moins de 30 caractères.",
                            maxLength(30)
                        ),
                    },
                    subTitle: {
                        required: helpers.withMessage(
                            "Veuillez renseigner ce champ.",
                            required
                        ),
                        minLength: helpers.withMessage(
                            "Veuillez saisir au moins 2 caractères.",
                            minLength(2)
                        ),
                        maxLength: helpers.withMessage(
                            "Veuillez saisir moins de 30 caractères.",
                            maxLength(30)
                        ),
                    },
                    editor: {
                        required: helpers.withMessage(
                            "Veuillez renseigner ce champ.",
                            required
                        ),
                        minLength: helpers.withMessage(
                            "Veuillez saisir au moins 2 caractères.",
                            minLength(2)
                        ),
                        maxLength: helpers.withMessage(
                            "Veuillez saisir moins de 30 caractères.",
                            maxLength(30)
                        ),
                    },
                    description: {
                        required: helpers.withMessage(
                            "Veuillez renseigner ce champ.",
                            required
                        ),
                        minLength: helpers.withMessage(
                            "Veuillez saisir au moins 2 caractères.",
                            minLength(2)
                        ),
                        maxLength: helpers.withMessage(
                            "Veuillez saisir moins de 30 caractères.",
                            maxLength(30)
                        ),
                    },
                    introduction: {
                        required: helpers.withMessage(
                            "Veuillez renseigner ce champ.",
                            required
                        ),
                        minLength: helpers.withMessage(
                            "Veuillez saisir au moins 2 caractères.",
                            minLength(2)
                        ),
                        maxLength: helpers.withMessage(
                            "Veuillez saisir moins de 30 caractères.",
                            maxLength(30)
                        ),
                    },
                    imageUrl: {
                        required: helpers.withMessage(
                            "Veuillez renseigner ce champ.",
                            required
                        ),
                        // maxValue: helpers.withMessage(
                        //     this.file === null || file.size < 512000)

                    },
                    date: {
                        required: helpers.withMessage(
                            "Veuillez renseigner ce champ.",
                            required
                        ),
                    },
                    categoryId: {
                        required: helpers.withMessage(
                            "Veuillez renseigner ce champ.",
                            required
                        ),
                    }




                },
            };
        });
        const v$ = useValidate(rules, state);
        return {
            state,
            v$,
            validator: useValidate({ $autoDirty: true }),
        };

    },

    // validations() {
    //     return {
    //         inputs: {
    //             title: { required, maxLength: maxLength(100) },
    //             subTitle: { required, maxLength: maxLength(100) },
    //             editor: { required, maxLenght: maxLength(100) },
    //             introduction: { required, maxLength: maxLength(700) },
    //             description: { required, maxLength: maxLength(1000) },
    //             imageUrl: {
    //                 required,
    //                 maxValue: (file) => {
    //                     return file === null || file.size < 512000
    //                 },

    //             },
    //             categoryId: { required, minValue: minValue(1) },
    //             date: {
    //                 required, minValue: () => {
    //                     return this.inputs.date == this.inputs.date ? true : false
    //                 }
    //             }
    //         },
    //     };

    // },
    methods: {
        async submit() {
            const formData = new FormData()
            const valid = await this.validator.$validate()
            // console.log(this.validator.inputs.imageUrl.$errors)
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
                        <input v-model.trim="state.inputs.title" name="title" id="title" type="text" class="form-control"
                            :class="{
                                'is-invalid': v$.inputs.title.$error,
                            }" />

                        <ValidationMessage :model="v$.inputs.title" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="name" class="form-label required">Sous-titre</label>
                        <input v-model.trim="state.inputs.subTitle" name="subTitle" id="subTitle" type="text"
                            class="form-control" :class="{
                                'is-invalid': v$.inputs.subTitle.$error,
                            }" />

                        <ValidationMessage :model="v$.inputs.subTitle" />
                    </div>

                    <div class="col-md-4 mb-3">
                        <label for="editor" class="form-label required">Editeur</label>
                        <input v-model.trim="state.inputs.editor" name="editor" id="editor" type="text" class="form-control"
                            :class="{
                                'is-invalid': v$.inputs.editor.$error,
                            }" />

                        <ValidationMessage :model="v$.inputs.editor" />
                    </div>

                    <div class="col-12">
                        <label for="description" class="form-label required">{{
                            $t("categoryFormLabels.formDescription")
                        }}</label>
                        <textarea v-model.trim="state.inputs.description" name="description" id="description" type="text"
                            class="form-control" :class="{
                                'is-invalid': v$.inputs.description.$error,
                            }"></textarea>

                        <ValidationMessage :model="v$.inputs.description" />
                    </div>

                    <div class="col-12">
                        <label for="introduction" class="form-label required">Introduction</label>
                        <textarea v-model.trim="state.inputs.introduction" name="introduction" id="introduction" type="text"
                            class="form-control" :class="{
                                'is-invalid': v$.inputs.introduction.$error,
                            }"></textarea>

                        <ValidationMessage :model="v$.inputs.introduction" />
                    </div>

                    <div class="row mt-4">
                        <div class="mb-3">
                            <div class="mb-3">
                                <label for="imageUrl" class="form-label required">Ajouter une image</label>
                                <input v-model.trim="state.inputs.imageUrl" name="imageUrl" id="imageUrl" type="input"
                                    accept="images/png,images/jpeg,images/jpg" class="form-control"
                                    @change="handleFileUpload">

                                <ValidationMessage :model="v$.inputs.imageUrl" />
                            </div>

                        </div>
                    </div>


                    <div class="col-md-4 mb-3">
                        <label for="name" class="form-label required">Date</label>
                        <input v-model.trim="state.inputs.date" name="date" id="date" type="date" class="form-control"
                            :class="{
                                'is-invalid': v$.inputs.date.$error,
                            }" />

                        <ValidationMessage :model="v$.inputs.date" />
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="categoryId" class="form-label required">Catégorie</label>
                        <select v-model.trim="state.inputs.categoryId" id="categoryId" name="categoryId" class="form-select"
                            for="name">categoryId</select>

                        <ValidationMessage :model="v$.inputs.categoryId" />
                    </div>
                    <div class="text-center d-flex justify-content-end">
                        <button class="btn btn-outline-primary col-12 col-md-2 mt-3" type="submit">
                            Créer
                        </button>
                    </div>
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
