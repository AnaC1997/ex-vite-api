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
	width: 80%;
	margin: 0 auto;

	display: flex;
	flex-wrap: wrap;
}

</style>