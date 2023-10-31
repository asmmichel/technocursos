<template>
  <div v-if="api" class="conteudo">
    <div>
      <div>
        <h1>Sobre a {{api.titulo}}</h1>
        <p>{{api.descricao}}</p>
      </div>
      <div>
        <h2>Avaliações</h2>
        <ul>
          <li v-for="avaliacao in api.avaliacoes" :key="avaliacao.nome">
            <p>{{avaliacao.nome}}</p>
            <p>{{avaliacao.descricao}}</p>
          </li>
        </ul>
      </div>
    </div>
    <div>
      <img src="@/assets/aprender.png" alt="Aprenda Web Desing">
    </div>
  </div>
</template>

<script>
import fazerFetchDaAPI from "@/mixins/fazerFetchDaAPI.js"

export default {
  name: 'HomeView',
  mixins: [fazerFetchDaAPI],
  created() {
    this.fazerFetchDaAPI("/home");
  },
}
</script>


<style scoped>
  .conteudo {
    display: grid;
    grid-template-columns: 1fr minmax(200px, 400px);
    grid-gap: 30px;
    margin: 30px;
  }
  img {
    max-width: 100%;
    padding-top: 50px;
  }
</style>