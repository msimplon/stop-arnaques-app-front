<script>
import { useVuelidate } from "@vuelidate/core";
// import { required } from "@vuelidate/validators";
import { reactive, computed } from "vue";
import useValidate from "@vuelidate/core";
import {
  helpers,
  minLength,
  maxLength,
  required,
} from "@vuelidate/validators";
import { AuthStore } from "../../stores/auth-store.js";

export default {
  setup() {
    const state = reactive({
      user: {
        username: null,
        password: null,
      },
    });

    const validateEmailError = function (email) {
      const pattern = /^\w+([\.-]?\w+)*@/;
      if (
        pattern.test(email) &&
        (email.endsWith("@gmail.com") ||
          email.endsWith("@hotmail.com"))
      ) {
        return true;
      }
    }

    const validPassword = helpers.regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&*?]).{8,42}$/
    )

    const rules = computed(() => {
      return {
        user: {
          username: {
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
          password: {
            required: helpers.withMessage(
              "Veuillez renseigner ce champ.",
              required
            ),
            validPassword: helpers.withMessage(
              "Mot de passe non valide.",
              validPassword
            ),
          },

        },
      };
    })

    const v$ = useValidate(rules, state);
    return {
      state,
      v$,
      validPassword,
      validateEmailError
    };
  },

  methods: {
    async submit() {
      const auth_store = AuthStore();
      his.v$.$validate();
      if (!this.v$.$error) {
        const my_user = this.state.user;
        console.log(my_user);
        const resp = await auth_store.register(my_user);
        console.log(resp);
        if (resp.status === 204) {
          alert(
            `Utilisateur ${my_user.username} a été créer avec success.`
          );
        } else {
          alert(
            `Nous n'avons pas pu créer utilisateur ${my_user.username}.`
          );
        }
      }
    }
  }
}
</script>

<template>
  <main>
    <form>
      <fieldset>
        <legend class="w-auto px-2">
          <h4>Formulaire d'insription</h4>
        </legend>
        <!-- <img
          class="mb-4"
          src="/images/login.png"
          alt=""
          width="52"
          height="47"
        /> -->

        <div class="form-floating">
          <input v-model.trim="state.user.username" type="email" class="form-control" id="username"
            placeholder="name@example.com" :class="{
              'is-invalid': v$.user.username.$error,
            }" />
          <label for="username" class="form-label required"><i class="bi bi-envelope-at"></i> Adresse e-mail</label>
        </div>
        <div id="emailHelp" class="form-text">
          ex.: prenom.nom@domain.com
        </div>
        <div class="form-floating mt-3">
          <input v-model.trim="state.user.password" type="password" class="form-control" id="password"
            placeholder="Password" :class="{ 'is-invalid': v$.user.password.$error }" />
          <label for="password" class="form-label required"><i class="bi bi-key"></i> Mot de passe</label>
        </div>
        <div id="passwordHelp" class="form-text">
          Vous avez oublié votre mot de passe ?
        </div>
        <div class="text-center d-flex justify-content-end">
          <button class="btn btn-outline-primary col-12 col-md-3 mt-3" type="submit">
            Se connecter
          </button>
        </div>
      </fieldset>
    </form>
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

  /* h1 {
    font-size: 0.7em;
    text-transform:uppercase;
    white-space:nowrap;
  } */
}
</style>
