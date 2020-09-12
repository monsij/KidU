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
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>