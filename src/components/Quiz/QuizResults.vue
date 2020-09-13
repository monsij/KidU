<template>
  <div>
    <div>
      Class average: {{}}%
    </div>
    <div>
      <b-table
        :bordered="true"
        :striped="true"
        :narrowed="true"
        :hoverable="true"
        :data="quizData"
      >
        <b-table-column field="name" label="Name" v-slot="props">
          {{props.row.name}}
        </b-table-column>
        <b-table-column v-for="(question, index) in quiz" :field="index" :key="index">
          {{props.row[index]}}
        </b-table-column>
      </b-table>
      {{quizData}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'QuizResults',
  props: {
    quiz: {
      type: Array
    },
    responses: {
      type: Object
    },
    roster: {
      type: Object
    }
  },
  data() {
    return {
      m_quiz: []
    }
  },
  mounted() {
    this.m_quiz = this.quiz;
  },
  watch: {
    quiz: {
      immediate: true,
      handler(val) {
        this.m_quiz = val;
      }
    }
  },
  methods: {
  },
  computed: {
    quizData() {
      let dt = []
      for (const [key, value] of Object.entries(this.responses)) {
        let d = {
          // grab the student name (also undefined??)
      //     // name: `${this.roster[key].first} ${this.roster[key].last}`
          name: key
        }
        console.log(value);
        value.forEach((v, i) => {
          // console.log(this.quiz[i].correctAnswer)
          // check if student solution is equal to correct answer
          // for some reason i can console log it but not use the value???
          d[i] = v == this.m_quiz[i].correctAnswer
        })
      //   for (let qNumber in value) {
      //     d[qNumber] = value[qNumber] == this.quiz.questions[qNumber].correctAnswer;
      //   }
          
        dt.push(d);
      }
      return dt;
    }
  }
}
</script>