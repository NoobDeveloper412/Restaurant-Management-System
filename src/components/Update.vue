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
import Axios from 'axios'
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
    async updateRestaurant (event) {
      event.preventDefault()
      const result = await Axios.put(
        'http://localhost:3000/restaurant/' + this.$route.params.id,
        {
          name: this.restaurant.name,
          address: this.restaurant.address,
          contact: this.restaurant.contact
        }
      )
      console.log(result)
      if (result.status == 200) {
        this.$router.push({ name: 'Home-Page' })
      }
    }
  },
  async mounted () {
    let user = localStorage.getItem('userInfo')
    if (!user) {
      this.$router.push({ name: 'SignIn' })
    }
    const restaurant = await Axios.get(
      'http://localhost:3000/restaurant/' + this.$route.params.id
    )
    console.warn(restaurant)
    this.restaurant = restaurant.data
  }
}
</script>

<style></style>
