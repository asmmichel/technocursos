<template>
  <div>
    <h1>Pagina Contato</h1>
    <p>{{api}}</p>
  </div>
</template>

<script>
import fazerFetchDaAPI from "@/mixins/fazerFetchDaAPI.js"

export default {
  name: 'ContatoView',
  mixins: [fazerFetchDaAPI],
  created() {
    this.fazerFetchDaAPI("/contato");
  }
}
</script>