<template>
  <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
      <router-link
        to="/contact-list"
        class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-white bg-green-600"
      >
        Contact List
      </router-link>
    </li>
    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
      <router-link
        to="/add-contact"
        class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-green-600 bg-white"
      >
        Add Contacts
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style></style>
