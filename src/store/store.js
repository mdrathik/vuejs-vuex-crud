import { createStore } from 'vuex'
const store = createStore({
  state() {
    return {
      contactList: [
        {
          id: 1,
          email: 'jhone@gmail.com',
          firstName: 'Jhone',
          lastName: 'Doe',
          office: 'Tech Company',
          phone: '0167712112',
        },
        {
          id: 2,
          email: 'rita@yahoo.com',
          firstName: 'Oni',
          lastName: 'Rita',
          office: 'BB Tech',
          phone: '+11 028372923',
        },
        {
          id: 3,
          email: 'James@mailora.com',
          firstName: 'Mr',
          lastName: 'James',
          office: 'Omen Care',
          phone: '+66 038372923',
        },
        {
          id: 3,
          email: 'khalidhasan@gmail.com',
          firstName: 'Khalid',
          lastName: 'Hasan',
          office: 'Drug Supply Gram',
          phone: '01762136217',
        },
      ],
    }
  },
  getters: {
    contactList: (state) => {
      return state.contactList
    },
  },
  mutations: {
    deleteContact(state, id) {
      const index = state.contactList
        .map((x) => {
          return x.id
        })
        .indexOf(id)
      state.contactList.splice(index, 1)
    },
    addContact(state, obj) {
      const contact = {
        id: Date.now(),
        ...obj,
      }
      state.contactList.push(contact)
    },

    editContact(state, item) {
      const items = state.contactList
      var foundIndex = items.findIndex((x) => x.id == item.id)
      items[foundIndex] = item
    },
  },
})

export default store
