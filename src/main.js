import { createApp } from 'vue';
//font Red Hat Display
import "@fontsource/red-hat-display";
import "@fontsource/red-hat-display/500.css";
import "@fontsource/red-hat-display/700.css";
import "@fontsource/red-hat-display/900.css";
//fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core';
//fontawesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
//fontawesome import specific icons
import { faChevronDown, faCartShopping, faCircleUser, faMagnifyingGlass, faCheck, faEye, faGear, faLifeRing, faDisplay } from '@fortawesome/free-solid-svg-icons';
import { faFileLines, faUser, faCalendar, faFlag } from '@fortawesome/free-regular-svg-icons';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

//file di partenza stili progetto
import './assets/scss/style.scss';
//file di partenza Vue
import App from './App.vue';

//fontawesome add icons to library
library.add(faChevronDown, faCartShopping, faMagnifyingGlass, faCircleUser, faCheck, faFileLines, faUser, faCalendar, faEye, faFlag, faGear, faLifeRing, faDisplay, faSquareFacebook);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
