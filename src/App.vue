<template>
  <div>
    <TheHeader/>
    <router-view/>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue" 

export default {
  components: {
    TheHeader
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
  }
  body {
    margin: 0;
  }
  nav {
    padding: 30px;
  }

  nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  nav a.router-link-exact-active {
    color: #42b983;
  }

  ul {
      list-style: none;
      padding: 0px;
      margin: 0px;
  }

  a {
      text-decoration: none;
  }
</style>
