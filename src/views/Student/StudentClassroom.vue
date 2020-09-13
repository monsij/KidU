<template>
  <div class="classroom-wrapper">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Welcome to {{'[teacher]'}}'s Classroom
          </h1>
          <h2 class="subtitle">
            <!-- {{ classroomId }} -->
          </h2>
        </div>
      </div>
    </section>
    <div class="container" v-if="quizzes != null && quizzes.length > 0">
      <StudentQuiz :quiz="quizzes[quizIndex]" @answer="handleAnswer" :key="quizIndex" />
      <b-numberinput v-model="quizIndex" placeholder="0" :min="0" :max="quizzes.length - 1" size="is-medium"></b-numberinput>
    </div>
    <div class="container no-quiz" v-else>
      No Quizzes
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
  height: 100vh;
  width: 100%
}
.title {
  font-family: 'Noto Sans', sans-serif;
  font-size: 60px;
}

.no-quiz {
  font-family: 'Coming Soon', cursive;
  font-size: 50px;
}
</style>