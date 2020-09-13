<template>
  <div id="teacher-app-wrapper">
    <Navbar id="teacher-app-nav" />
    <router-view id="teacher-app" />
  </div>
</template>

<script>
import Navbar from '@/components/TeacherNavbar'
export default {
  name: 'TeacherApp',
  components: {
    Navbar
  }    
}
</script>