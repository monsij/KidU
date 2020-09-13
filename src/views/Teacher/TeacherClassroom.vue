<template>
  <div class="classroom-wrapper">
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Your Classroom
          </h1>
          <h2 class="subtitle">
            <!-- {{ classroomId }} -->
          </h2>
        </div>
      </div>
    </section>
    <div class="container" v-if="false">
      <QuizResults :quiz="activeQuiz" :responses="quizResponses" :roster="roster" />
    </div>
    <div class="container" v-else-if="activeQuiz.name != 'undefined'">
      <QuizResults :quiz="activeQuiz" :responses="quizResponses" :roster="roster" />
      {{ quizResponses }}
    </div>
    <div class="container" v-else>
      <h3>How would you like to poll your class?</h3>
      <div class="poll-options">
        <b-button @click="queueQuiz">
          Pre-fill the question bank
        </b-button>
        <b-button @click="createQuiz">
          Type Questions On-the-Fly
        </b-button>
        <b-button @click="postQuiz(testQuiz)">
          Post Test Quiz
        </b-button>
      </div>
      <div>
        <h3>Quiz Queue</h3>
        <div class="queue-wrapper">
          <div 
          class="card"
          v-for="(quiz, index) in queuedQuizzes"
          :key="index"
        >
          <div class="card-content">
            <div class="title">
              {{ quiz.quizName }}
            </div>
            <div class="subtitle">
              {{ quiz.questions.length }} question(s)
            </div>
          </div>
          <footer class="card-footer">
            <b-button
              @click="postQuiz(quiz.questions)"
              type="is-success is-light"
              class="card-footer-item"
            >
              Post Quiz
            </b-button>
            <b-button
              @click="deleteQuiz(index)"
              type="is-danger is-light"
              class="card-footer-item"
            >
              Delete Quiz
            </b-button>
          </footer>
        </div>
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
import QuizEditor from '@/components/Quiz/QuizEditor'
import QuizResults from '@/components/Quiz/QuizResults'

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
              correctAnswer: 'pretty'
            }
          ]
        },
        {
          quizName: 'Quiz 3',
          questions: [
            {
              type: 'mc',
              question: '534 rounded to the nearest ten is which number?',
              answers: ['500', '530', '540', '600'],
              correctAnswer: '530'
            }
          ]
        }
      ],
      testQuiz: [
        {
          type: 'mc',
          question: 'Choose the antonym of this word: wild',
          answers: ['tame', 'crazy', 'loud', 'aggressive'],
          correctAnswer: 'tame'
        }
      ],
      createQuizModal: false,
      wantToQueue: false,
      roster: {
        Q9U7SfGghfuMXd8WepnL: {
          first:"Bob",
          last:"Ross"
        },
        rpVBpm6fkqdmMlMkXgb0: {
          first: "Fred",
          last: "Rogers"
        }
      }
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
    deleteQuiz(index) {
      this.queuedQuizzes.splice(index, 1);
    },
    closeQuiz() {
      this.activeQuiz = []
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
  }
}
</script>

<style lang="scss" scoped>
.classroom-wrapper {
  background: #89CFF0;
  min-height: 100vh;
  width: 100%;
  padding-bottom: 5vh;
}

h3 {
  font-family: 'Coming Soon', cursive;
  font-size: 60px;
}

.poll-options {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: center;
  button {
    margin: 5vmin 1vmin;
    flex: 1 1 auto;
    border: 5px solid purple;
    border-radius: 0;
    font-family: 'Coming Soon', cursive;
    font-size: 50px;
    max-width: 40vw;
  }
}

.queue-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .card {
    flex: 1 1 auto;
    max-width: 25%;
  }
}
</style>