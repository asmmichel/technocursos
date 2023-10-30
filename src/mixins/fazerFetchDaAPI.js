export default {
  data() {
    return {
      api: null
    }
  },
  methods: {
    async fazerFetchDaAPI(caminho) {
      this.api = await (await fetch(`http://localhost:3000${caminho}`)).json();
    }
  }
}