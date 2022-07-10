<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h1>Hello from Home</h1>
</template>

<script>
export default {
  name: 'Home-Page',
  mounted () {
    let user = localStorage.getItem('userInfo')
    if (!user) {
      this.$router.push({ name: 'SignIn' })
    }
  }
}
</script>

<style></style>
