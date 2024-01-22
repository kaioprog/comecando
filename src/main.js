import store from './store'
import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles.scss';
import PrimeVue from 'primevue/config';
import router from './router';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import DialogService from 'primevue/dialogservice';

const app = createApp(App) 
app.use(PrimeVue, {ripple: true});
app.use(router);
app.use(DialogService);
app.use(store);
app.component("Button", Button);
app.component("Dialog", Dialog);
app.mount('#app')
