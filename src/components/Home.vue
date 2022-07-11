<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header />
  <h1>Hello from Home</h1>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'Home-Page',
  components: {
    Header
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
