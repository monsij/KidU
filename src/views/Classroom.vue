<template>
    <div>{{ classroomId }}</div>
</template>

<script>
export default {
  name: 'Classroom',
  data() {
    return {
      
    }
  },
  computed: {
    classroomId() {
      return this.$route.params.id
    }
  }
}
</script>