<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header />
  <h1>Hello from Add Page</h1>
  <form
    action="#"
    v-on:submit="addRestaurant($event)"
    class="add_form"
  >
    <input
      type="text"
      name="name"
      placeholder="Enter your restaurant name:"
      v-model="restaurant.name"
    />
    <input
      type="text"
      name="address"
      v-model="restaurant.address"
      placeholder="Enter your restaurant address:"
    />
    <input
      type="text"
      name="contact"
      v-model="restaurant.contact"
      placeholder="Enter your restaurant contact:"
    />
    <button type="submit">Submit</button>
  </form>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'Add-Page',
  components: {
    Header
  },
  data () {
    return {
      restaurant: {
        name: '',
        address: '',
        contact: ''
      }
    }
  },
  methods: {
    addRestaurant (event) {
      event.preventDefault();
    
      console.log(this.restaurant)
    }
  },
  mounted () {
    let user = localStorage.getItem('userInfo')
    if (!user) {
      this.$router.push({ name: 'SignIn' })
    }
  }
}
</script>

<style></style>
