<script>
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";

const emailValidator = helpers.regex(
  /[A-Za-z]+\.[A-Za-z]+@[A-Za-z]+\.[A-Za-z]{2,4}$/
);
const passwordValidator = helpers.regex(
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[%||!||*])(?!.* ).{8,42}/
);

export default {
  setup() {
    return {
      validator: useVuelidate(),
    };
  },
  data() {
    return {
      inputs: {
        internalEmail: "manal.ben@domain.com",
        password: "manal2022!",
      },
    };
  },
  validations() {
    return {
      inputs: {
        internalEmail: { required, emailValidator },
        password: { required, passwordValidator },
      },
    };
  },
  methods: {
    async submit() {
      const valid = await this.validator.$validate();
      if (valid) {
        const response = await this.$axios.post("/user-accounts", this.inputs);
        console.log(response.status);
        if (response.status == 204) {
          this.$router.push("sign-in");
        } else {
          console.log("Server Error");
        }
      }
    },
  },
};
</script>

<template>
  <main class="form-signin w-100 m-auto">
    <form id="sign-up" @submit.prevent="submit">
      <fieldset>
        <legend class="w-auto px-2">
          <h4>Formulaire d'inscription</h4>
        </legend>
        <!-- <img
          class="mb-4"
          src="/images/login.png"
          alt=""
          width="52"
          height="47"
        /> -->

        <div class="form-floating">
          <input type="email" name="internalEmail" placeholder="email" class="form-control" id="internalEmail"
            v-model="inputs.internalEmail" :class="{ 'is-invalid': validator.inputs.internalEmail.$error }" />
          <label for="internalEmail" class="form-label required">Adresse email</label>
          <span v-if="validator.inputs.internalEmail.$error">
            {{ validator.inputs.internalEmail.$errors[0].$message }}
          </span>
        </div>
        <div id="emailHelp" class="form-text">
          ex.: prenom.nom@domain.com
        </div>
        <div class="form-floating mt-3">
          <input type="password" class="form-control" placeholder="Password" name="password" id="password"
            v-model="inputs.password" :class="{ 'is-invalid': validator.inputs.password.$error }" />
          <label for="password" class="form-label required">Password</label>
          <span v-if="validator.inputs.password.$error">
            {{ validator.inputs.password.$errors[0].$message }}
          </span>
          <div id="passwordHelp" class="form-text">
            Au moins 1 majuscule et 1 miniscule, au moins un nombre
            au moins 1 de !@#%&*?
          </div>
        </div>
        <div class="text-center d-flex justify-content-end">
          <button class="btn btn-outline-primary col-12 col-md-3 mt-3" type="submit">
            S'inscrire
          </button>
        </div>
      </fieldset>
    </form>
  </main>
</template>

<style>
.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

img {
  text-align: center;
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
