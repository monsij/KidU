<template>
  <div class="classroom-link">
    <router-link :to="{ name: 'Classroom', params: { id: classroomId} }">
      
      <div class="outline">
      <!--<span>{{ name }}</span>     name shown on thumbnail--> 
        <div class="class-thumbnail">
          <img v-if="image" v-bind:src="image" />
          <img v-else src= "../assets/default_class_banner.png"/>
        </div>
      </div>    
    </router-link>
  </div>
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
  .classroom-link {
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