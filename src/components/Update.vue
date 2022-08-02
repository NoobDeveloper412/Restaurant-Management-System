<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header />
  <h1>Hello from Update Page</h1>
   <form action="#" v-on:submit="updateRestaurant($event)" class="add_form">
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
    <button type="submit">Update</button>
  </form>
</template>

<script>
import { Axios } from 'axios'
import Header from './Header.vue'
export default {
  name: 'Update-Page',
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
    async addRestaurant (event) {
      event.preventDefault()
      const result = await Axios.post('http://localhost:3000/restaurant', {
        name: this.restaurant.name,
        address: this.restaurant.address,
        contact: this.restaurant.contact
      })
      console.log(result)
      if (result.status == 201) {
        this.$router.push({ name: 'Home-Page' })
      }
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
