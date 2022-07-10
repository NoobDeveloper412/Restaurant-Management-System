<template>
  <img class="logo" alt="Vue logo" src="../assets/logo.png" />
  <h1>Sign In</h1>
  <div class="signin">
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button v-on:click="signin">
      Signin
    </button>
    <p>
      <router-link to="/signup"> Create an account</router-link>
    </p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'SignIn',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async signin () {
      let response = await axios.post('http://localhost:3000/user', {
        name: this.name,
        email: this.email,
        password: this.password
      })
      if (response.status == 201) {
        alert('Signed up!')
        localStorage.setItem('userInfo', JSON.stringify(response.data))
        this.$router.push({ name: 'Home-Page' })
      } else {
        alert('Failed! Make sure to check that the data entered is correct.')
      }
    }
  }
}
</script>

<style>
.logo {
  width: 100px;
  height: 100px;
  margin: 20px auto;
}
.signin input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  display: block;
}
.signin button {
  width: 320px;
  height: 40px;
  background: skyblue;
  color: white;
  cursor: pointer;
  border: none;
}
</style>
