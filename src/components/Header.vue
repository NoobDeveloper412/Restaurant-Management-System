<template>
  <div class="navbar">
    <a href="/">Home</a>
    <a href="/add">Add Restaurant</a>
    <a href="/update">Update Restaurant</a>
    <a href="/">Logout</a>
  </div>
</template>

<script>
export default {
  name: 'Main-Header'
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
