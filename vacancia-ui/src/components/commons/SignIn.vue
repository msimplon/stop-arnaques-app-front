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
      <img class="mb-4" src="/images/login.png" alt="" width="52" height="47" />

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating mt-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <div class="text-end">
        <button
          class="btn btn-outline-primary col-12 col-md-3 mt-2"
          type="submit"
        >
          S'enregistrer
        </button>
      </div>
    </form>
  </main>
</template>

<style>
/* button {
  display: flex;
  align-items: end;
  justify-content: end;
} */
</style>
