<template>
  <div>
    <p>
      You are {{ this.$store.getters.getUserType }}
    </p>
    <div class="wrapper">
      <ClassroomLink
        v-for="(classroom, index) in studentInfo.classrooms"
        :key="index"
        :name="classroom.name"
        :classroomId="classroom.id"
      />
      <div class="join-class">
        <b-button>
          Join New Class
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { firestore } from '@/database';
import ClassroomLink from '@/components/ClassroomLink';

export default {
  name: 'Dashboard',
  components: {
    ClassroomLink
  },
  data() {
    return {
      studentInfo: {
        classrooms: []
      }
    }
  },
  computed: {
    userId() {
      return this.$store.getters.getUserId;
    }
  },
  watch: {
    userId: {
      immediate: true,
      handler(userId) {
        this.$bind('studentInfo', firestore.doc(`/students/${userId}`))
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    .classroom-link {
      display: flex;
      flex: 1 1 auto;
    }
    .join-class {
      display: flex;
      flex: 1 1 auto;
      align-items: center;
      justify-content: center;
    }
  }
</style>