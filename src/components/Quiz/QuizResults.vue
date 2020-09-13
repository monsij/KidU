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
      >
        <b-table-column field="name" label="Name" v-slot="props">
          {{props.row.name}}
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
  methods: {
  },
  computed: {
    quizData() {
      let dt = []
      for (const [key, value] of Object.entries(this.responses)) {
        let d = {
      //     // name: `${this.roster[key].first} ${this.roster[key].last}`
          name: key
        }
        console.log(value);
        value.forEach((v, i) => {
          d[i] = v == this.quiz[i].correctAnswer
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