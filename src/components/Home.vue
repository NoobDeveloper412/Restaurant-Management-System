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
  </tr>
    <tr v-for="item in restaurants" :key="item.id">
      <td>{{ item?.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
    </tr>
  </table>
</template>

<script>
import Header from './Header.vue'
import axios from 'axios'
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
  async mounted () {
    let user = localStorage.getItem('userInfo')
    this.name = JSON.parse(user)[0].name
    if (!user) {
      this.$router.push({ name: 'SignIn' })
    }

    let result = await axios.get('http://localhost:3000/restaurant')
    // console.warn(result)
    this.restaurants = result.data
  }
}
</script>

<style>
td{
  width: 160px;
  height: 40px;
}
</style>
