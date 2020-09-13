<template>
  <div class="classroom-wrapper">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Your Classroom
          </h1>
          <h2 class="subtitle">
            {{ classroomId }}
          </h2>
        </div>
      </div>
    </section>
    <div class="container" v-if="false">
      <StudentQuiz :quiz="quizzes[quizIndex]" @answer="handleAnswer" :key="quizIndex" />
      <b-button icon-right="delete" @click="quizIndex = Math.max(0, quizIndex - 1)">Prev</b-button>
      <b-button icon-right="delete" @click="quizIndex = Math.min(quizzes.length - 1, quizIndex + 1)">Next</b-button>
    </div>
    <div class="container" v-else>
      <h1>How would you like to poll your class?</h1>
      <b-button>
        Pre-fill the question bank
      </b-button>
      <b-button>
        Type Questions On-the-Fly
      </b-button>
      <b-button @click="postQuiz(testQuiz)">
        Post
      </b-button>

    </div>
    <b-modal v-model="createQuizModal">
      <TeacherQuiz />
    </b-modal>
    <b-button @click="createQuizModal = true">Show</b-button>
  </div>
</template>

<script>
import { database } from '@/database'
import StudentQuiz from '@/components/quiz/StudentQuiz'
import TeacherQuiz from '@/components/quiz/TeacherQuiz'

export default {
  name: 'StudentClassroom',
  components: {
    StudentQuiz,
    TeacherQuiz
  },
  data() {
    return {
      activeQuiz: {

      },
      queuedQuizzes: [

      ],
      testQuiz: [
        {
          type: 'mc',
          question: 'Choose the antonym of this word: wild',
          answers: ['tame', 'crazy', 'loud', 'aggressive'],
          correctAnswer: 0
        },
        {
          type: 'tf',
          question: 'True or False?',
          correctAnswer: 1
        }
      ],
      createQuizModal: true
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
    postQuiz(quiz) {
      database.ref(`${this.classroomId}/quiz`).set(quiz);
    },
    closeQuiz() {

    },
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