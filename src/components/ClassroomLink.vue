<template>
  <router-link :to="{ name: 'Classroom', params: { id: classroomId} }">
    
    <div class="outline">
    <!--<span>{{ name }}</span>     name shown on thumbnail--> 
    <div class="class-thumbnail">
      <img v-if="image" v-bind:src="image" />
      <img v-if="!image" src= "../assets/default_class_banner.png"/>
    </div>
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
  .outline{
  }
  .class-thumbnail {
    background-size: cover;
    width: 276px; /* 92px */
    height: 201px; /* 67px */ 
  }
</style>