<template>
  <div id="main-app-wrapper">
    <Navbar id="main-app-nav" />
    <router-view id="main-app" />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'MainApp',
  components: {
    Navbar
  }    
}
</script>

<style>
/* #main-app-wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
}
#main-app-nav {
  flex: 0 0;
}
#main-app {
  flex: 1 1 auto;
  overflow-y: scroll;
} */
</style>