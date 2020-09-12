<template>
  <div>
    <Navbar />
    <p>
      {{ this.$store.getters.getUserId }}
      You are {{ this.$store.getters.getUserType }}
    </p>
    <div class="wrapper">
      <ClassroomLink
        v-for="(classroom, index) in classrooms"
        :key="index"
        :name="classroom.name"
        :classroomId="classroom.classroomId"
      />
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar';
import ClassroomLink from '@/components/ClassroomLink';

export default {
  name: 'Dashboard',
  components: {
    Navbar,
    ClassroomLink
  },
  data() {
    return {
      classrooms: [
        { name: '5th Grade Math', classroomId: '10' },
        { name: '3rd Grade Reading', classroomId: '255' },
        { name: '4th Grade Science', classroomId: '1111' }
      ]
    }
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .wrapper a {
    display: flex;
    flex: 1 1 auto;
  }
</style>