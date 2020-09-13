<template>
  <div class="quiz-wrapper">
    <div class="question-wrapper">
      <div class="question">
        {{ quiz.question }}
      </div>
      <b-button class="">Raise Hand</b-button>
      <b-button class="">Text-to-Speech</b-button>
    </div>
    <div class="answers-wrapper">
      <div class="answers" v-if="quiz.type === 'mc'">
        <b-button
          v-for="(answer, index) in quiz.answers"
          :key="index"
          @click="sendAnswer(answer, index)"
          :type="selectedIndex === index ? 'is-primary' : ''"
          outlined
        >
          {{ mcLabel[index] }} {{ answer }}
        </b-button>
      </div>
      <div class="answers" v-else-if="quiz.type === 'tf'">
        <b-button
          @click="sendAnswer(true, 0)"
          :type="selectedIndex === 0 ? 'is-primary' : ''"
          outlined
        >
          True
        </b-button>
        <b-button
          @click="sendAnswer(false, 1)"
          :type="selectedIndex === 1 ? 'is-primary' : ''"
          outlined
        >
          False
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentQuiz',
  props: {
    quiz: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      mcLabel: ['a)', 'b)', 'c)', 'd)'],
      selectedIndex: -1
    }
  },
  methods: {
    sendAnswer(answer, index) {
      this.$emit('answer', answer)
      this.selectedIndex = index;
    }
  }
}
</script>

<style lang="scss" scoped>
* {
  font-family: 'Coming Soon', cursive;
}
.question-wrapper {
  display: grid;
  grid-template-columns: 5fr 1fr;
  grid-template-rows: 1fr 1fr;
  .question {
    font-size: 50px;
    padding: 50px;
    grid-row-start: 1;
    grid-row-end: 3;
    background: pink;
    border: 2px solid black;
  }
  button {
    height: 100%;
  }
}
.answers {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  button {
    font-size: 50px;
    padding: 50px;
  }
}
</style>