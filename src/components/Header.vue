<template>
  <div class="navbar">
    <a href="/">Home</a>
    <a href="/add">Add Restaurant</a>
    <a href="/update">Update Restaurant</a>
    <a href="#" v-on:click="logout">Logout</a>
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
