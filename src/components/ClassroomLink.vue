<template>
  <router-link :to="{ name: 'Classroom', params: { id: classroomId } }">
    <div class="classroom-link">
      <span>{{ name }}</span>
      <img v-if="image" src="image" />
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'ClassroomLink',
  props: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    classroomId: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
  a {
    justify-content: center;
  }
  .classroom-link {
    background-image: url('../assets/output-onlinepngtools_10.png');
    background-size: cover;
    width: 276px; /* 92px */
    height: 201px; /* 67px */
  }
</style>