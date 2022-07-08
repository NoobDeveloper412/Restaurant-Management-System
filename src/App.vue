<template>
  <img class="logo" alt="Vue logo" src="./assets/logo.png" />
  <SignUp />
  <div class="register">
    <input type="text" placeholder="Enter Your Name" />
    <input type="email" placeholder="Email" />
    <input type="password" placeholder="Password" />

    <button>
      Signup
    </button>
  </div>
</template>

<script>
import SignUp from './components/Signup.vue'

export default {
  components: {
    SignUp
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.logo {
  width: 100px;
  height: 100px;
  margin: 20px auto;
}
.register input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
  display: block;
}
.register button {
  width: 320px;
  height: 40px;
  background: skyblue;
  color: white;
  cursor: pointer;
  border: none;
}
</style>
