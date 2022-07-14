<template>
  <img class="logo" alt="Vue logo" src="../assets/logo.png" />
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Your Name" />
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />

    <button v-on:click="signup">
      Signup
    </button>
    <p><router-link to="/signin"> Already loggedin?</router-link></p>
  </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'SignUp',
  data () {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    async signup () {
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
  },
  mounted () {
    let user = localStorage.getItem('userInfo')
    if (user) {
      this.$router.push({ name: 'Home-Page' })
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
.register input ,.add_form input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  display: block;
}
.register button, .add_form button {
  width: 320px;
  height: 40px;
  background: skyblue;
  color: white;
  cursor: pointer;
  border: none;
}
</style>
