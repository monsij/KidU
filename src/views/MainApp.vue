<template>
  <div>
    <Navbar />
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