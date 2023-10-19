import { createApp } from 'vue';
import './assets/styles/styles.scss';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import i18n from './locales';

library.add(faBars, faXmark);

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(i18n)
	.mount('#app');
