<template>
  <div class="classroom-link">
    <router-link :to="to">
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
    },
    type: {
      type: String,
      default: 'student'
    }
  },
  computed: {
    to() {
      if (this.type === 'teacher') {
        return { name: 'Teacher Classroom', params: { id: this.classroomId } }
      }
      return { name: 'Student Classroom', params: { id: this.classroomId } }
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
    font-family: 'Coming Soon', cursive;
    color: white;
    font-weight: bold;
    font-size: 40px;
  }
  .class-thumbnail {
    background-size: cover;
    width: 276px; /* 92px */
    height: 201px; /* 67px */ 
  }
</style>