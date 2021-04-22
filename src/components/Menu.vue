<template>
  <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
      <router-link
        to="/contact-list"
        class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-black bg-white"
      >
        Contact List
      </router-link>
    </li>
    <li class="-mb-px mr-2 last:mr-0 flex-auto text-center">
      <router-link
        to="/add-contact"
        class="text-sm font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal text-black"
      >
        Add Contacts
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {}
</script>

<style scoped>
.router-link-active {
  background-color: #059669;
  color: white;
}
</style>
