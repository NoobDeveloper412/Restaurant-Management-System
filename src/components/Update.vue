<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <Header />
  <h1>Hello from Update Page</h1>
</template>

<script>
import Header from './Header.vue'
export default {
  name: 'Update-Page',
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
