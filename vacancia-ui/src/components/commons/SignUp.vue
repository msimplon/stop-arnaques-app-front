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
      <img class="mb-4" src="/images/login.png" alt="" width="52" height="47" />

      <div class="form-floating">
        <input
          type="email"
          name="internalEmail"
          placeholder="email"
          class="form-control"
          id="internalEmail"
          v-model="inputs.internalEmail"
          :class="{ 'is-invalid': validator.inputs.internalEmail.$error }"
        />
        <label for="internalEmail" class="form-label required"
          >Adresse email</label
        >
        <span v-if="validator.inputs.internalEmail.$error">
          {{ validator.inputs.internalEmail.$errors[0].$message }}
        </span>
      </div>
      <div class="form-floating mt-3">
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          name="password"
          id="password"
          v-model="inputs.password"
          :class="{ 'is-invalid': validator.inputs.password.$error }"
        />
        <label for="password" class="form-label required">Password</label>
        <span v-if="validator.inputs.password.$error">
          {{ validator.inputs.password.$errors[0].$message }}
        </span>
      </div>
      <div class="text-end">
        <button
          class="btn btn-outline-primary col-12 col-md-3 mt-2"
          type="submit"
        >
          Se connecter
        </button>
      </div>
    </form>
  </main>
</template>

<!-- <style scoped></style> -->

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
</style>
