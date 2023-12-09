<template>
    <div>
        <form @submit.prevent="submitForm">
            <div class="col-md-4 mb-3">
                <label for="datePicker" class="form-label required">Date</label>
                <input type="date" id="datePicker" v-model="selectedDate"
                    :class="{ 'is-invalid': $v.selectedDate.$error }" />
                <span v-if="$v.selectedDate.$dirty" class="text-danger">
                    <span v-if="!$v.selectedDate.required">La date est obligatoire.</span>
                    <span v-else-if="!$v.selectedDate.dateValidator">La date ne peut pas être antérieure à
                        aujourd'hui.</span>
                </span>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </div>
</template>

<script>
import { ref, computed } from 'vue';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

export default {
    setup() {
        const selectedDate = ref('');
        const today = new Date().toISOString().slice(0, 10);

        const dateValidator = computed(() => {
            return selectedDate.value === '' || new Date(selectedDate.value) >= new Date(today);
        });

        const rules = {
            selectedDate: {
                required: required,
                dateValidator: dateValidator,
            },
        };

        const $v = useVuelidate(rules, { selectedDate });

        const submitForm = () => {
            $v.$touch();
            if ($v.$error) {
                return;
            }
            alert('Formulaire soumis avec succès!');
        };

        return {
            selectedDate,
            submitForm,
            $v,
        };
    },
};
</script>
