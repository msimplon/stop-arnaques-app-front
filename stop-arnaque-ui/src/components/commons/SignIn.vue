<script>
import { useVuelidate } from "@vuelidate/core";
import { required } from "@vuelidate/validators";

export default {
  data() {
    return {
      inputs: {
        emailOrIdentifier: null,
        password: null,
      },
    };
  },

  validations() {
    inputs: {
      emailOrIdentifier: {
        required;
      }
      password: {
        required;
      }
    }
  },

  methods: {
    async submitForm() {
      const test = await this.$axios.get("user-accounts");
      if (test) {
        console.log("goood");
      }
    },
  },
};
</script>

<template>
  <main>
    <form>
      <fieldset>
        <legend class="w-auto px-2">
          <h4>Formulaire de connexion</h4>
        </legend>
        <!-- <img
          class="mb-4"
          src="/images/login.png"
          alt=""
          width="52"
          height="47"
        /> -->

        <div class="form-floating">
          <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
          <label for="floatingInput" class="form-label required"><i class="bi bi-envelope-at"></i> Email address</label>
        </div>
        <div id="emailHelp" class="form-text">
          ex.: prenom.nom@domain.com
        </div>
        <div class="form-floating mt-3">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
          <!-- <i class="bi bi-key"></i> -->
          <label for="floatingPassword" class="form-label required"><i class="bi bi-key"></i> Password</label>
        </div>
        <div id="passwordHelp" class="form-text">
          Vous avez oublié votre mot de passe ?
        </div>
        <div class="text-center d-flex justify-content-end">
          <button class="btn btn-outline-primary col-12 col-md-3 mt-3" type="submit">
            Connexion
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
