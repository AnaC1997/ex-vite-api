<script>
import AppCard from "./components/AppCard.vue"
import axios from 'axios';
import{ store } from "./store"

export default{
  components:{
    AppCard

  },data(){
    return{
      store
    }
  },
  mounted(){
    this.richiestaGet();

  },
  methods:{
    richiestaGet(){
      axios.get(this.store.apiUrl).then(risultato => {
        this.store.birrerie = risultato.data.results;
      })
      .catch(error => {
                console.error('Errore nella richiesta API:', error); // Verifica eventuali errori nella richiesta API
            });
		},
	}
}
</script>

<template>
  <main>
    <AppCard v-for="birre in  this.store.birrerie" :info="birre"/>
  </main>
 
</template>

<style scoped>

main {
	width: 90%;
	margin: 0 auto;

	display: flex;
	flex-wrap: wrap;

}

</style>




