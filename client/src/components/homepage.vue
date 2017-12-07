<template>
<div>
  <navbar></navbar>
  <detailForm></detailForm>
</div>
</template>

<script>
import navbar from '@/components/navbar'
import detailForm from '@/components/detailForm'
export default {
  data() {
    return {

    }
  },
  components: {
    navbar,
    detailForm
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
