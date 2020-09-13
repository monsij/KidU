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
      <QuizResults :quiz="activeQuiz" :responses="quizResponses" :roster="roster" />
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
import { database, firestore } from '@/database'
import QuizEditor from '@/components/quiz/QuizEditor'
import QuizResults from '@/components/quiz/QuizResults'

export default {
  name: 'TeacherClassroom',
  components: {
    QuizEditor,
    QuizResults
  },
  mounted() {
    firestore.doc(`/teachers/${this.userId}/classrooms/${this.classroomId}`).get().then((snapshot) => {
      let roster = snapshot.data().roster;
      roster.forEach((studentId) => {
        firestore.doc(`/students/${studentId}`).get().then((snap) => {
          this.roster[studentId] = snap.data().name;
        });
      });
    })
    database.ref(`${this.classroomId}/quiz`).once('value').then((snapshot) => {
      this.activeQuiz = snapshot.val();
    });
    
  },
  data() {
    return {
      activeQuiz: [],
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
      wantToQueue: false,
      roster: {}
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
    },
    quizResponses() {
      let responses = {}
      database.ref(`${this.classroomId}/responses`).on('value', (snapshot) => {
        responses = snapshot.val();
      });
      return responses;
    }
  },
  methods: {
    postQuiz(quiz) {
      database.ref(`${this.classroomId}/quiz`).set(quiz);
      this.activeQuiz = quiz;
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