import DefaultLayout from '~/layouts/Default.vue'
import Vue from 'vue'
import { Navbar, Hero } from 'buefy'
import 'buefy/dist/buefy.css'
Vue.use(Navbar)
export default function (Vue, { router, head, isClient }) {
  Vue.component('Layout', DefaultLayout)
}
