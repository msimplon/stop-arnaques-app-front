<script>
import { useVuelidate } from "@vuelidate/core";
import { required, maxLength, minValue, minLength, between, helpers } from "@vuelidate/validators";

export default {

    setup() {

        return {
            validator: useVuelidate({ $autoDirty: true }),

        };

    },
    data() {
        return {
            inputs: {
                username: null,
                password: null,

            },


        };
    },
    validations() {
        return {
            inputs: {
                username: { required, maxLength: maxLength(200) },
                password: {
                    required, maxLength: maxLength(120), minLength: minLength(2)
                }

            },
        };
    },
    methods: {
        async submit() {
            const resp = await this.$http.post('/users/sign-in', this.inputs);

            if (resp.status === 200) {
                Object.assign(this.inputs, this.$options.data().inputs);
                this.validator.$reset();
                this.$toast.success("toast-global", "Bienvenue sur Stop Arnaques!!!");
                this.$router.push({ name: "articles-home" });

            } else {
                console.error(resp);
                this.$toast.error("toast-global", "problème de validation");
            }
        }

    },

    beforeMount() {

    },

};
</script>

<template>
    <main>
        <div class="container-xl mt-2">

            <div class="row mt-4">
                <div class="col-md my-6 mx-auto">
                    <section id="section1">
                        <form novalidate @submit.prevent="submit">
                            <fieldset>
                                <legend class="w-auto px-2">
                                    <h4>Formulaire de connexion</h4>
                                </legend>

                                <div class="form-floating">
                                    <input v-model.trim="inputs.username" id="username" name="username" type="text"
                                        maxlength="100" class="form-control"
                                        :class="{ 'is-invalid': validator.inputs.username.$error }" />
                                    <label for="name" class="form-label required"><i class="bi bi-envelope-at"></i> Adresse
                                        e-mail</label>
                                    <div class="form-text text-danger" v-if="validator.inputs.username.$error">
                                        Veuillez renseigner ce champs.
                                    </div>

                                    <div class="form-text mb-3" v-else>Email.</div>
                                </div>
                                <div class="form-floating">
                                    <input v-model.trim="inputs.password" id="password" name="password" type="text"
                                        maxlength="100" class="form-control"
                                        :class="{ 'is-invalid': validator.inputs.password.$error }" />
                                    <label for="name" class="form-label required"><i class="bi bi-key"></i> password</label>
                                    <div class="form-text text-danger" v-if="validator
                                        .inputs.password.$error">
                                        Veuillez saisir au moins 2 caractères..
                                    </div>

                                    <div class="form-text mb-3" v-else>Mot de passe.</div>
                                </div>
                                <!-- <div id="passwordHelp" class="form-text">
                                    <RouterLink :to="{ name: 'ResetPassword' }">
                                        Mot de passe oublier ? </RouterLink>
                                </div> -->
                                <div class="aside-text-info">
                                    Vous n'avez pas encore de compte ?
                                    <RouterLink :to="{ name: 'signUp' }">
                                        Inscription </RouterLink>
                                </div>

                                <div class="text-center d-flex justify-content-end">
                                    <button class="btn btn-outline-primary col-12 col-md-3 mt-3" type="submit">
                                        Se connecter
                                    </button>
                                </div>
                            </fieldset>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    </main>
</template>

<style>
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

fieldset {
    padding: 0 1em 1em;
    border: 1pt solid;
    border-radius: 4px;
    margin: 0 auto 0.5em;
    background: white;
}

legend {
    float: none;
    margin-bottom: 0;
    width: auto;
    padding: 0 0.1em;
    text-transform: uppercase;
    white-space: nowrap;


}


.presentation {
    text-align: center;
    margin-top: 1em;
}

.welcome {
    margin-bottom: 0.25em;
    font-weight: bold;
    font-size: 2.25em;
    color: rgb(0, 119, 255);
}

.description {
    font-weight: bold;
    font-size: 1.25em;
}

.p {
    font-size: 1em;
}
</style>
