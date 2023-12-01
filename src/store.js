import { reactive }  from 'vue'

// Definisco lo "store"  come oggetto reattivo con la URL del'Api e un array vuoto per avere l'informazioni ottenuto del'Api
export const store = reactive({
    apiUrl: "https://api.openbrewerydb.org/v1/breweries?by_country=poland&per_page=10",
    birrerie: [],
    searchBirre :" "
});