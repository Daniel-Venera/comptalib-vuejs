import { Navbar, Button } from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Navbar)
Vue.use(Button)
import DefaultLayout from '~/layouts/Default.vue'
import { faHeart} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Vue from 'vue'
export default function (Vue, { router, head, isClient }) {
  library.add(faHeart)
  Vue.component('Layout', DefaultLayout)
  Vue.component('AppIcon', FontAwesomeIcon)
}
