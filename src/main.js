import { createApp } from 'vue';
import './assets/styles/index.scss';
import App from './App.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faXmark);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
