<template>
  <div class="classroom-wrapper">
    <div v-if="userType === 'student'">
      <section class="hero">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              Welcome to {{'[teacher]'}}'s Classroom
            </h1>
            <h2 class="subtitle">
              {{ classroomId }}
            </h2>
          </div>
        </div>
      </section>
      <div class="container" v-if="quizzes != null && quizzes.length > 0">
        <StudentQuiz :quiz="quizzes[quizIndex]" @answer="handleAnswer" :key="quizIndex" />
        <b-button icon-right="delete" @click="quizIndex = Math.max(0, quizIndex - 1)">Prev</b-button>
        <b-button icon-right="delete" @click="quizIndex = Math.min(quizzes.length - 1, quizIndex + 1)">Next</b-button>
      </div>
      <div class="container" v-else>
        No Quizzes
      </div>
    </div>
    <div v-else-if="userType === 'teacher'">

    </div>
  </div>
</template>

<script>
import { database } from '@/database'
import StudentQuiz from '@/components/quiz/StudentQuiz'

export default {
  name: 'StudentClassroom',
  components: {
    StudentQuiz
  },
  mounted() {
    // database.ref(`${this.classroomId}/quiz`).on('value', (snapshot) => {
    //   this.quizzes = snapshot.val();
    // });
  },
  data() {
    return {
      quizIndex: 0,
      quizzes: [
      ],
      myAnswers: [
      ]
    }
  },
  computed: {
    userId() {
      return this.$store.getters.getUserId;
    },
    userType() {
      return this.$store.getters.getUserType;
    },
    classroomId() {
      return this.$route.params.id
    }
  },
  methods: {
    handleAnswer(answer) {
      this.myAnswers[this.quizIndex] = answer;
      database.ref(`${this.classroomId}/responses/${this.userId}`).update({
        [this.quizIndex]: answer
      });
    }
  },
  watch: {
    classroomId: {
      immediate: true,
      handler(id) {
        database.ref(`${id}/quiz`).on('value', (snapshot) => {
          this.quizzes = snapshot.val();
        });
      }
    }
  }
}
</script>

<style scoped>
.classroom-wrapper {
  background: #89CFF0;
  /* height: 200vh; */
  width: 100%
}
</style>