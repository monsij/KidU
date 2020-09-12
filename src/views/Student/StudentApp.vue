<template>
  <div id="student-app-wrapper">
    <Navbar id="student-app-nav" />
    <router-view id="student-app" />
  </div>
</template>

<script>
import Navbar from '@/components/StudentNavbar'

export default {
  name: 'StudentApp',
  components: {
    Navbar
  }    
}
</script>