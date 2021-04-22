import { createRouter, createWebHashHistory } from 'vue-router'
import AddContact from './components/AddContact.vue'
import ContactList from './components/ContactList.vue'

const routes = [
  {
    path: '/',
    redirect: '/contact-list',
  },

  {
    path: '/contact-list',
    component: ContactList,
    name: ContactList,
  },

  {
    path: '/add-contact',
    component: AddContact,
    name: AddContact,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
