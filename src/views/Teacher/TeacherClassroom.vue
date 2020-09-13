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
      <b-button @click="queueQuiz">
        Pre-fill the question bank
      </b-button>
      <b-button @click="createQuiz">
        Type Questions On-the-Fly
      </b-button>
      <b-button @click="postQuiz(testQuiz)">
        Post Test Quiz
      </b-button>
      <div>
        <div 
          class="card"
          v-for="(quiz, index) in queuedQuizzes"
          :key="index"
        >
          <div class="card-content">
            <div class="content">
              {{ quiz.quizName }}
            </div>
          </div>
          <footer class="card-footer">
            <b-button @click="postQuiz(quiz.questions)">Post Quiz</b-button>
          </footer>
        </div>
      </div>
    </div>
    <b-modal v-model="createQuizModal">
      <QuizEditor @saveQuiz="handleSaveQuiz" />
    </b-modal>
  </div>
</template>

<script>
import { database } from '@/database'
import StudentQuiz from '@/components/quiz/StudentQuiz'
import QuizEditor from '@/components/quiz/QuizEditor'

export default {
  name: 'TeacherClassroom',
  components: {
    StudentQuiz,
    QuizEditor
  },
  data() {
    return {
      activeQuiz: {

      },
      queuedQuizzes: [
        {
          quizName: 'Quiz 2',
          questions: [
            {
              type: 'mc',
              question: 'Choose the synonym of this word: beautiful',
              answers: ['ugly', 'smart', 'pretty', 'quiet'],
              correctAnswer: 2
            }
          ]
        }
      ],
      testQuiz: [
        {
          type: 'mc',
          question: 'Choose the antonym of this word: wild',
          answers: ['tame', 'crazy', 'loud', 'aggressive'],
          correctAnswer: 0
        }
      ],
      createQuizModal: false,
      wantToQueue: false
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
    createQuiz() {
      this.createQuizModal = true;
    },
    queueQuiz() {
      this.createQuizModal = true;
      this.wantToQueue = true;
    },
    handleSaveQuiz(quiz) {
      if (this.wantToQueue) {
        this.queuedQuizzes.push(quiz);
      } else {
        this.postQuiz(quiz.questions);
      }
      this.createQuizModal = false;
      this.wantToQueue = false;
    }
  },
  watch: {
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