<script>
import AppCard from "./components/AppCard.vue"
import AppSearch from "./components/AppSearch.vue"
import axios from 'axios';
import { store } from "./store"

export default {
  components: {
    AppCard,
    AppSearch

  }, data() {
    return {
      store,
      
    }
  },
  mounted() {
    this.richiestaGet();
  


  },
  methods: {
    richiestaGet() {
      axios.get(this.store.apiUrl).then(risultato => {
        this.store.birrerie = risultato.data;

      })
        .catch(error => {
          console.error('Errore nella richiesta API:', error); // Verifica eventuali errori nella richiesta API
        });
    },
    searchBirrerie() {
      let dati = `${this.store.apiUrl}&by_city=${this.store.searchBirre}`;
      console.log("richiama: ", dati);
      
      axios.get(dati).then(risultato => {
        this.store.birrerie = risultato.data;

        console.log("risultato filtro" + risultato.data.result)
      })

     
      

    }
  }
}
</script>

<template>
  <main>
    <AppSearch @search="searchBirrerie" />
    <div class="containerCard">
      <AppCard v-for="birre in store.birrerie" :info="birre" />
    </div>

  </main>
</template>

<style scoped>
.containerCard {
  width: 90%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;

}
</style>




