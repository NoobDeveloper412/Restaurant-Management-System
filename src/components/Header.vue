<template>
  <div class="navbar">
    <router-link to="/">Home</router-link>
    <router-link to="/add">Add Restaurant</router-link>
    <router-link to="/update">Update Restaurant</router-link>
    <router-link to="#" v-on:click="logout">Logout</router-link>
  </div>
</template>

<script>
export default {
  name: 'Main-Header',
  methods: {
    logout () {
      localStorage.clear()
      this.$router.push('/signin')
    }
  }
}
</script>

<style>
.navbar {
  background: #333;
  overflow: hidden;
}
.navbar a {
  color: white;
  text-decoration: none;
  padding: 14px 16px;
  font-size: 17px;
  margin: 5px;
  cursor: pointer;
  float: left;
}
.navbar a:hover {
  background: #ddd;
  color: #333;
}
</style>
