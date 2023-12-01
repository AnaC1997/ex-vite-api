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
       // Ricerca per città
  let datiByCity = `${this.store.apiUrl}&by_city=${this.store.searchBirre}`;
  axios.get(datiByCity).then(risultato => {
    this.store.birrerie = risultato.data;
    this.store.searchBirre = ""; //
    console.log("Risultato ricerca per città:", risultato.data);
  });

   // Ricerca per nome
   let datiByName = `${this.store.apiUrl}&by_name=${this.store.searchBirre}`;
  axios.get(datiByName).then(risultato => {
    this.store.birrerie = risultato.data;
    this.store.searchBirre = ""; //
    console.log("Risultato ricerca per nome:", risultato.data);
  });

    // Ricerca per codice postal 
    let datiCodicePostal = `${this.store.apiUrl}&by_postal=${this.store.searchBirre}`;
  axios.get(datiCodicePostal).then(risultato => {
    this.store.birrerie = risultato.data;
    this.store.searchBirre = ""; //
    console.log("Risultato ricerca per codice postal:", risultato.data);
  });

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




