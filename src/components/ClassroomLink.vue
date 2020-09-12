<template>
  <div class="classroom-link">
    <router-link :to="{ name: 'Classroom', params: { id: classroomId } }">
      <div class="outline">
        <div class="class-thumbnail">
          <img v-if="image" v-bind:src="image" />
          <img v-else src= "../assets/default_class_banner.png"/>
        </div>
        <div v-if="!image" class="class-name">
          <span>{{ name }}</span>
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
    position: relative;
  }
  .class-name {
    position: absolute;
    display: flex;
    flex: 1 1;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    right: 0;
    color: black;
    height: 100%;
  }
  .class-thumbnail {
    background-size: cover;
    width: 276px; /* 92px */
    height: 201px; /* 67px */ 
  }
</style>