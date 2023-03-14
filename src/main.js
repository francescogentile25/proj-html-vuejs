import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faCartShopping, faUserCircle, faMagnifyingGlass, faChevronDown, faCheck, faArrowRight, } from '@fortawesome/free-solid-svg-icons'
import { faCalendar, faEye, faFile, faUser } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faUserSecret, faCartShopping, faUserCircle, faMagnifyingGlass, faChevronDown, faCheck, faFile, faUser, faArrowRight, faCalendar, faEye,)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
