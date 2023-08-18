<script>
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, minValue, between } from "@vuelidate/validators";

export default {
    setup() {
        // return {
        //     validator: useVuelidate({ $autoDirty: true }),
        // };
    },
    // data() {
    //     return {
    //         categoryId: [],
    //         inputs: {
    //             title: null,
    //             subTitle: null,
    //             editor: null,
    //             description: null,
    //             imageUrl: null,
    //             date: null,
    //             categoryId: 0,
    //         },


    //     };
    // },
    // validations() {
    //     return {
    //         inputs: {
    //             title: { required, maxLength: maxLength(100) },
    //             subTitle: { required, maxLength: maxLength(100) },
    //             editor: { required, maxLenght: maxLength(100) },
    //             description: { required, maxLength: maxLength(1000) },
    //             imageUrl: {
    //                 maxValue: (imageUrl) => {
    //                     return imageUrl === null || imageUrl.size < 512000
    //                 }
    //             },
    //             categoryId: { required },
    //             date: { required }
    //         },
    //     };
    // },
    // methods: {
    //     async submit() {
    //         const formData = new FormData()
    //         const valid = await this.validator.$validate()
    //         if (valid) {
    //             const [year, month, day] = this.inputs.date.toString().split("-")
    //             if (this.inputs.imageUrl != null) {
    //                 formData.append("imageUrl", this.inputs.imageUrl)
    //             }
    //             formData.append("title", this.inputs.title);
    //             formData.append("subTitle", this.inputs.subTitle);
    //             formData.append("editor", this.inputs.editor);
    //             formData.append("description", this.inputs.description);
    //             formData.append("date", `${day}/${month}/${year}`);
    //             formData.append("categoryId", this.inputs.categoryId);

    //             console.log(formData)
    //             const resp = await this.$http.post("/articles", formData);
    //             console.log(formData)
    //             console.log(resp, "resp")

    //             if (resp.status === 201) {
    //                 Object.assign(this.inputs, this.$options.data().inputs);

    //                 this.$toast.success("toast-global", "Votre signalement a bien été envoyé");
    //             } else {
    //                 console.error(resp);
    //                 this.$toast.error("toast-global", "problème de validation");
    //             }
    //         }

    //     },

    //     handleFileUpload(event) {
    //         this.inputs.imageUrl = event.target.files[0]
    //     },
    //     async initcategory() {
    //         const resp = await this.$http.get("/categories");
    //         this.categoryId = resp.body;
    //     },
    // },
    // beforeMount() {
    //     this.initcategory();
    // },
};
</script>

<template>
    <div class="row justify-content-center mt-2" data-aos="fade-up" data-aos-delay="300">
        <div class="col-xl-9 col-lg-12">
            <h1 class="row justify-content-center mt-2 mb-3">
                Formulaire de signalement </h1>
            <form novalidate @submit.prevent="submit">
                <div class="row">
                    <div class="col-12">
                        <label for="name" class="form-label required">Votre e-mail</label>
                        <input id="title" name="title" type="text" maxlength="100" class="form-control" />
                    </div>
                </div>
                <div class="fieldarnaque mt-4">
                    <hr>
                    <i class="bi bi-exclamation-triangle"></i>
                    <p> DÉCRIVEZ L'ARNAQUE</p>
                    <i class="bi bi-exclamation-triangle"></i>
                    <hr>
                </div>
                <fieldset>
                    <legend class="w-auto px-2 mt-4">
                        <p>Que souhaitez-vous signaler ?
                        </p>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Site Internet
                            </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                E-mail </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Instagram </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Facebook </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Telegram </label>
                        </div>
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                            <label class="form-check-label" for="flexCheckDefault">
                                Snapchat
                            </label>
                        </div>
                    </legend>
                </fieldset>
                <div class=" dropdown d-grid gap-3 mt-4">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Raison </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Publicité mensongère</a></li>
                        <li><a class="dropdown-item" href="#">Phishing(hameconnage)</a></li>
                        <li><a class="dropdown-item" href="#">Fraude en ligne</a></li>
                        <li><a class="dropdown-item" href="#">Arnaque au don</a></li>
                        <li><a class="dropdown-item" href="#">Pyramide de Ponzi</a></li>
                        <li><a class="dropdown-item" href="#">Arnaque sentimentale</a></li>
                        <li><a class="dropdown-item" href="#">Autre arnaque et escroquerie</a></li>
                    </ul>

                </div>
                <div class="col-12 mt-4">
                    <label for="description" class="form-label required">Message</label>
                    <textarea id="description" name="description" maxlength="1000" rows="12"
                        class="form-control"></textarea>
                </div>
                <div class="row mt-4">
                    <div class="col-md-4 mb-3">
                        <div class="mb-3">
                            <div class="mb-3">
                                <label for="imageUrl" class="form-label required">Ajouter un document</label>
                                <input name="imageUrl" id="imageUrl" type="file" class="form-control">
                            </div>
                        </div>
                    </div>
                </div>
                <!-- <fieldset class="reset">
                    <legend class="w-auto px-1">
                        <p>Ne signalez que des arnaques ou publicités trompeuses avérées. En incluant aucune
                            preuve ou
                            élément factuel, votre signalement ne sera pas publié. Dans le cas où vous souhaiteriez
                            simplement partager un avis ou retour d'expérience, merci d'utiliser Trustpilot.
                        </p>
                    </legend>
                </fieldset> -->
                <div class="text-center d-flex justify-content-end">
                    <button class="btn btn-outline-primary col-12 col-md-2 mt-3" type="submit">
                        Confirmer
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
<style>
.hr-sect {
    display: flex;
    flex-basis: 100%;
    align-items: center;
    /* margin: 8px 0; */
    justify-content: center;
}

.legend {
    margin-top: 3%;

}

.reset {
    all: revert;
}

.dropdown-toggle {}

.fieldarnaque {
    width: 100%;
    margin-top: 3%;
    display: flex;
    flex-direction: row !important;
    align-items: center !important;
    justify-content: space-around;

}

.fieldarnaque>p {
    color: var(--color-white);
    margin: 0;
    width: 12rem;
    text-align: center;
}

.fieldarnaque>hr {
    width: 40%;
    size: 1px;
    color: var(--color-white);
}


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

.form-check {
    font-size: 15px;
}

button[type="submit"]:hover {
    background: #78cbec;
}
</style>
