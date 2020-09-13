<template>
  <div>
    <div class="wrapper" v-if="classrooms.length > 0">
      <ClassroomLink
        v-for="(classroom, index) in classrooms"
        :key="index"
        :name="classroom.name"
        :classroomId="classroom.id"
        type="teacher"
      />
      <div class="create-class">
        <b-button>
          Create New Class
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import { firestore } from '@/database';
import ClassroomLink from '@/components/ClassroomLink';

export default {
  name: 'TeacherDashboard',
  components: {
    ClassroomLink
  },
  beforeMount() {
    this.$bind('teacherInfo', firestore.doc(`/teachers/${this.userId}`));
    firestore.collection(`/teachers/${this.userId}/classrooms`).get().then((snapshot) => {
      snapshot.forEach((doc) => {
        this.classrooms.push({ id: doc.id, ...doc.data() })
      })
    });
  },
  data() {
    return {
      teacherInfo: {},
      classrooms: []
    }
  },
  computed: {
    userId() {
      return this.$store.getters.getUserId;
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
    .create-class {
      display: flex;
      flex: 1 1 auto;
      align-items: center;
      justify-content: center;
    }
  }
</style>