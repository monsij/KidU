<template>
  <div>
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
        :image="classroom.image"
      />
    </div>
  </div>
</template>

<script>
import ClassroomLink from '@/components/ClassroomLink';

export default {
  name: 'Dashboard',
  components: {
    ClassroomLink
  },
  data() {
    return {
      classrooms: [
        { name: '5th Grade Math', classroomId: '10', image: require("../assets/5_maths.png") },
        { name: '3rd Grade Reading', classroomId: '255', image: require("../assets/3_reading.png") },
        { name: '4th Grade Science', classroomId: '1111', image: require("../assets/4_science.png")}
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