<template>
  <div>
    <div class="question">

    </div>
  </div>
</template>

<script>
export default {
  name: 'StudentQuiz',
  props: {
    type: {
      type: String,
      required: true
    },
    question: {
      required: true
    }
  }
}
</script>