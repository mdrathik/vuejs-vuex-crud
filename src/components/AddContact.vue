<template>
  <form
    @submit.prevent="submitContactData"
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
  >
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-first-name"
        >
          First Name
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"
          id="grid-first-name"
          type="text"
          v-model="firstName"
          placeholder="Jane"
        />
      </div>
      <div class="md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-last-name"
        >
          Last Name
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-last-name"
          v-model="lastName"
          type="text"
          placeholder="Doe"
        />
      </div>
    </div>
    <div class="-mx-3 md:flex mb-6">
      <div class="md:w-full px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-password"
        >
          Email
        </label>
        <input
          class="block appearance-none w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3"
          id="grid-password"
          type="email"
          v-model="email"
          placeholder="Enter your email"
        />
      </div>
    </div>
    <div class="-mx-3 md:flex mb-2">
      <div class="md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
          for="grid-city"
        >
          Phone
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-city"
          type="text"
          v-model="phone"
          placeholder="017**********"
        />
      </div>

      <div class="md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
        >
          Office
        </label>
        <input
          class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4"
          id="grid-zip"
          type="text"
          v-model="office"
          placeholder="Office Name"
        />
      </div>
    </div>
    <button
      type="submit"
      class="bg-black my-5 px-4 py-2 text-lg font-semibold tracking-wider text-white rounded hover:bg-green-600 w-4/12"
    >
      Sbumit
    </button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      office: '',
    }
  },

  methods: {
    submitContactData() {
      const contact = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phone: this.phone,
        office: this.office,
      }
      if (
        this.firstName != '' &&
        this.lastName != '' &&
        this.email != '' &&
        this.phone != '' &&
        this.office != ''
      ) {
        this.$store.commit('addContact', contact)
        this.firstName = ''
        this.lastName = ''
        this.email = ''
        this.phone = ''
        this.office = ''
        this.$router.push({ path: '/contact-list' })
      } else alert('Please fillup all the input box')
    },
  },
}
</script>

<style></style>
