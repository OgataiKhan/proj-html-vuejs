import { createApp } from 'vue';
//font Red Hat Display
import "@fontsource/red-hat-display";
import "@fontsource/red-hat-display/500.css";
import "@fontsource/red-hat-display/700.css";
//fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';
//fontawesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//fontawesome import specific icons
import { faChevronDown, faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

//file di partenza stili progetto
import './assets/scss/style.scss';
//file di partenza Vue
import App from './App.vue';

//fontawesome add icons to library
library.add(faChevronDown, faCartShopping, faMagnifyingGlass, faCircleUser, faSquareFacebook);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
