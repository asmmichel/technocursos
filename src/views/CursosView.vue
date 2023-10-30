<template>
  <div>
    <h1>Pagina Cursos</h1>
    <p>{{api}}</p>
  </div>
</template>

<script>
import fazerFetchDaAPI from "@/mixins/fazerFetchDaAPI.js"

export default {
  name: 'CursosView',
  mixins: [fazerFetchDaAPI],
  created() {
    this.fazerFetchDaAPI("/cursos");
  }
}
</script>