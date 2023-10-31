<template>
  <div v-if="api" class="conteudo">
    <h1>{{api.titulo}}</h1>
    <p>{{api.descricao}}</p>
    <ul>
      <li v-for="(value, key) in api.contato" :key="key">
        <b>{{key.charAt(0).toUpperCase() + key.slice(1)}}:</b> {{value}}
      </li>
    </ul>
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

<style>
  .conteudo {
    text-align: left;
    margin: 30px;
  }
  li {
    padding-bottom: 5px;
  }
</style>