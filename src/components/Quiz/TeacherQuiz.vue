<template>
  <div style="background: white">
    <b-field label="Question Type">
      <b-select expanded v-model="type">
        <option value="mc">Multiple Choice</option>
        <option value="tf">True / False</option>
      </b-select>
    </b-field>
    <b-field label="Question?">
      <b-input v-model="question" />
    </b-field>
    <div v-if="type === 'mc'">
      <div 
        v-for="i in 4"
        :key="i"
        class="sselect"
      >
        <b-radio v-model="correctAnswer" :native-value="i" />
        <b-input v-model="answers[i]" />
      </div>
    </div>
    <div v-else-if="type === 'tf'">
      <b-radio v-model="correctAnswer" native-value="0">
        True
      </b-radio>
      <b-radio v-model="correctAnswer" native-value="1">
        False
      </b-radio>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeacherQuiz',
  data() {
    return {
      type: '',
      question: '',
      answers: ['', '', '', ''],
      correctAnswer: 0
    }
  }
}
</script>

<style lang="scss" scoped>
.sselect {
  display: flex;
  flex-direction: row;
  > input {
    flex: 1 1 auto;
  }
}
</style>