import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router';
import LabelValues from './components/commons/LabelValues.vue';
// Import de nos plugins :
import toast from './plugins/toast';
import axios from './plugins/axios';
import dayjs from 'dayjs';
import i18n from './i18n/i18n.js';
import VueSkeletor from 'vue-skeletor';
// // import { Keyframes } from 'keyframes';
// import VueGoogleMaps from '@fawmi/vue-google-maps'







// Importer les styles en JS pour que Vite "inline" les styles
// dans index.html (cf. avec outils dev dans le navigateur)
import './assets/styles.css';

// Instanciation de l'application Vue a partir du "root component" App.vue :
const app = createApp(App);
const pinia = createPinia();
// app.use(Keyframes);

// Enregistrement du router comme un plugin :
app.use(router);
// Composant global, pas utile de l'importer ou on en a besoin :
app.component('LabelValues', LabelValues);
// Enregistrement des plugins :
app.use(toast);
app.use(pinia);
app.use(axios);
app.use(VueSkeletor);

// Gestionnaire global des erreurs qui ne sont pas gerees ailleurs (selon les besoins) :
// app.config.errorHandler = (err, comp) => {
//     console.error('ErrorHandler', err);
//     comp.$toast.error('toast-global', 'Oups, un problème est survenu');
// };
// Day JS, enregistrement d'une propriete globale pour faciliter l'utilisation de Day JS
app.config.globalProperties.$fmt = {
    date: (str) => {
        if (str === null) {

            return 'N/A';
        }
        const date = dayjs(str);
        return date.format('YYYY/MM/DD');
    }
};

app.use(i18n)

// app.use(VueGoogleMaps, {
//     load: {
//         key: `https://www.google.com/maps/embed/v1/view?key=${key}&center= 4.9370748,-52.3346534&zoom=15&language=fr`,
//     },
// })

// On "monte" l'application dans l'element racine (lien avec le DOM) :
app.mount('#app');
