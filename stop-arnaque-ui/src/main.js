import { createApp } from 'vue';
import { createPinia } from 'pinia'
import App from './App.vue';
import router from './router';
import LabelValues from './components/commons/LabelValues.vue';
import toast from './plugins/toast';
import i18n from './i18n/i18n.js';
import VueSkeletor from 'vue-skeletor';
import httpCommon from './services/http-common.js';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/styles.css';

// Instanciation de l'application Vue a partir du "root component" App.vue :
const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.component('LabelValues', LabelValues);
app.use(toast);
app.use(pinia);
app.use(httpCommon);
app.use(VueSkeletor);

// Gestionnaire global des erreurs qui ne sont pas gerees ailleurs(selon les besoins) :
// app.config.errorHandler = (err, comp) => {
//     console.error('ErrorHandler', err);
//     comp.$toast.error('toast-global', 'Oupssss, un problème est survenu');
// };

app.use(i18n)

// On "monte" l'application dans l'element racine (lien avec le DOM) :
app.mount('#app');
