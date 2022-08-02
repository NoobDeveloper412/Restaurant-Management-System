<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header />
  <h1>Hello {{ name }} from Home</h1>
  <table border="1">
    <tr>
      <td>ID</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item?.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="'/update/' + item.id">Update</router-link>
        <button v-on:click="deleteRestaurant($event, item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import Header from './Header.vue'
import Axios from 'axios'
export default {
  name: 'Home-Page',
  data () {
    return {
      name: '',
      restaurants: []
    }
  },
  components: {
    Header
  },
  methods: {
    async deleteRestaurant (event, itemId) {
      event.preventDefault()
      const result = await Axios.delete(
        'http://localhost:3000/restaurant/' + itemId
      )
      console.log(result)
      if (result.status == 200) {
        this.loadData()
      }
    },
    async loadData () {
      let user = localStorage.getItem('userInfo')
      // this.name = JSON.parse(user)[0]
      // console.log(this.name)
      if (!user) {
        this.$router.push({ name: 'SignIn' })
      }

      let result = await Axios.get('http://localhost:3000/restaurant')
      // console.warn(result)
      this.restaurants = result.data
    }
  },
  async mounted () {
    this.loadData()
  }
}
</script>

<style>
td {
  width: 160px;
  height: 40px;
}
</style>
