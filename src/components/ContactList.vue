<template>
  <edit-contact
    :showing="exampleModalShowing"
    :editContactId="editContactId"
    @close="exampleModalShowing = false"
  ></edit-contact>
  <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
    <div class="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th
              class="px-5 py-3 border-b-2 border-green-200 bg-black text-center text-xs font-semibold text-white uppercase tracking-wider"
            >
              Name
            </th>
            <th
              class="px-5 py-3 border-b-2 border-green-200 bg-black text-left text-xs font-semibold text-white uppercase tracking-wider"
            >
              Company
            </th>
            <th
              class="px-5 py-3 border-b-2 border-green-200 bg-black text-left text-xs font-semibold text-white uppercase tracking-wider"
            >
              Email
            </th>
            <th
              class="px-5 py-3 border-b-2 border-green-200 bg-black text-left text-xs font-semibold text-white uppercase tracking-wider"
            >
              Phone
            </th>
            <th
              class="px-5 py-3 border-b-2 border-green-200 bg-black text-right text-xs font-semibold text-white"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in getContacts" :key="item.id">
            <td class="px-5 py-1 border-b border-gray-200 bg-white text-sm">
              <div class="flex">
                <div class="flex-shrink-0 w-10 h-10">
                  <svg
                    class="w-full h-full rounded-full"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div class="ml-3 py-2">
                  <p class="text-gray-900 text-center">
                    {{ item.firstName + ' ' + item.lastName }}
                  </p>
                </div>
              </div>
            </td>
            <td class="px-2 py-2 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">{{ item.office }}</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-900 whitespace-no-wrap">{{ item.email }}</p>
            </td>
            <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
              <p class="text-gray-600 whitespace-no-wrap">{{ item.phone }}</p>
            </td>
            <td
              class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
            >
              <button @click="deleteContact(item.id)" class="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>

              <button @click="editContact(item)" class="px-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div></div>
</template>

<script>
import EditContac from './EditContact.vue'
export default {
  components: {
    'edit-contact': EditContac,
    contactList: [],
  },
  data() {
    return {
      exampleModalShowing: false,
      editContactId: null,
    }
  },
  computed: {
    getContacts() {
      return this.$store.getters.contactList
    },
  },

  methods: {
    deleteContact(id) {
      this.$store.commit('deleteContact', id)
    },
    editContact(id) {
      this.editContactId = id
      this.exampleModalShowing = true
    },
  },
}
</script>

<style></style>
