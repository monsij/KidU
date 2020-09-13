<template>
  <div class="quiz-editor" style="background: white">
    <div class="quiz-title">
      <b-input 
        v-model="quizName"
        placeholder="Quiz Name..."
      />
    </div>
    <div class="quiz-wrapper" 
      v-for="(question, index) in questions"
      :key="index"
      v-show="index === activeIndex"
    >
      Question {{index + 1}}
      <b-select v-model="question.type">
        <option value="mc">Multiple Choice</option>
        <option value="tf">True / False</option>
      </b-select>
      <div class="question">
        <b-input v-model="question.question" placeholder="Your Question Here..."/>
      </div>
      <div class="answers-wrapper">
        <div class="answers" v-if="question.type === 'mc'">
          <div 
            v-for="(answer, i) in question.answers"
            :key="i"
            class="answer-option"
          >
            <b-radio v-model="question.correctAnswer" :native-value="answer" />
            <b-input
              v-model="question.answers[i]"
              :placeholder="'Answer Choice ' + (i + 1)"
            />
          </div>
        </div>
        <div class="answers" v-else-if="question.type === 'tf'">
          <div class="answer-option">
            <b-radio v-model="question.correctAnswer" :native-value="true" />
            <div>
              True
            </div>
          </div>
          <div class="answer-option">
            <b-radio v-model="question.correctAnswer" :native-value="false" />
            <div>
              False
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-button 
      class="add-new"
      @click="addNewQuestion"
      v-show="questions.length === activeIndex"
    >
      Add New Question
    </b-button>
    <div class="level edit-controls">
      <b-button class="level-left" @click="removeQuestion(activeIndex)">Remove Question</b-button>
      <b-numberinput class="level-right" v-model="activeIndex" placeholder="0" :min="0" :max="questions.length"></b-numberinput>
    </div>
    
    <b-button @click="saveQuiz">Save Quiz</b-button>
  </div>
</template>

<script>
export default {
  name: 'QuizEditor',
  data() {
    return {
      activeIndex: 0,
      quizName: '',
      questions: [
        {
          type: 'mc',
          question: '',
          answers: ['', '', '', ''],
          correctAnswer: ' '
        }
      ]
    }
  },
  methods: {
    addNewQuestion() {
      this.questions.push({
        type: 'mc',
        question: '',
        answers: ['', '', '', ''],
        correctAnswer: ''
      });
    },
    removeQuestion(index) {
      if (this.questions.length > 1 && index < this.questions.length) {
        this.questions.splice(index, 1);
      }
    },
    saveQuiz() {
      if (this.quizName != '' && this.questions.every((question) => question.type != '' && question.question != '')) {
        this.$emit('saveQuiz', { quizName: this.quizName, questions: { ...this.questions } });
      }

    }
  }
}
</script>

<style lang="scss" scoped>
.quiz-editor {
  padding: 5vmin;
}

.quiz-title {
  padding-bottom: 5vmin;
}

.edit-controls {
  padding-top: 5vmin;
}

.answer-choice {
  display: flex;
  flex-direction: row;
  width: 100%;
  > div {
    flex: 1 1 auto;
  }
}

.question-wrapper {
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 1fr 1fr;
  .question {
    grid-row-start: 1;
    grid-row-end: 3;
    background: pink;
    border: 2px solid black;
  }
}
.answers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  .answer-option {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    > label {
      flex: 0 0 auto;
    }
    > div {
      flex: 1 1 auto;
    }
  }
}

.add-new {
  border: 3px dashed black;
  border-radius: 15px;
  width: 100%;
  height: 10vh;
}
</style>