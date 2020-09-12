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
      <div class="container">
        <StudentQuiz :quiz="quizes[quizIndex]" @answer="handleAnswer" />
        <b-button icon-right="delete" @click="quizIndex = Math.max(0, quizIndex - 1)">Prev</b-button>
        <b-button icon-right="delete" @click="quizIndex = Math.min(quizes.length - 1, quizIndex + 1)">Next</b-button>
      </div>
    </div>
    <div v-else-if="userType === 'teacher'">

    </div>
  </div>
</template>

<script>
import StudentQuiz from '@/components/quiz/StudentQuiz'

export default {
  name: 'Classroom',
  components: {
    StudentQuiz
  },
  data() {
    return {
      quizes: [
        {
          type: 'mc',
          question: 'Some multiple choice question',
          answers: ['Answer A', 'Answer B', 'Answer C', 'Answer D']
        },
        {
          type: 'tf',
          question: 'True False?'
        }
      ],
      quizIndex: 0
    }
  },
  computed: {
    userType() {
      return this.$store.getters.getUserType;
    },
    classroomId() {
      return this.$route.params.id
    }
  },
  methods: {
    handleAnswer(answer) {
      alert(answer);
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