<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld/> -->
      <HomeView/>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import HomeView from "./views/HomeView.vue"; 
// import HelloWorld from "./components/HelloWorld.vue"; 
export default {
  name: "App",
  components: {
    HomeView,
    // HelloWorld, // Register the HomeView component
  },

  data: () => ({
    //
  }),
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
} */
</style>
