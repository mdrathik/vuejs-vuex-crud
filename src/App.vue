<template>
  <div class="flex p-10 items-center flex-col divide-y divide-black-500">
    <h1 class="text-4xl font-extrabold py-5">
      VueJS Crud + VueX - <span class="text-green-600">Contact List</span>
    </h1>

    <div class="sm:w-11/12 md:w-7/12 py-5">
      <menu-bar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import menu from './components/Menu.vue'
import AddContact from './components/AddContact.vue'
import ContactList from './components/ContactList.vue'
export default {
  components: {
    'menu-bar': menu,
    'add-contact': AddContact,
    'contact-list': ContactList,
  },
}
</script>

<style>
body {
  background: #f3f4f6;
}
</style>
