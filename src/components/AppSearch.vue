<script>
import { store} from "../store.js"
export default{
    name: "AppSearch",
    data(){
        return {
            store
        };
    },
    methods:{
        search(){
            console.log("Cerca", this.store.searchBirre);
            this.$emit("search")
        }

    }
}

</script>

<template>
<input type="text" placeholder="Search"
v-model="store.searchBirre"
@keyup.enter="$emit('search')">
</template>

<style scoped></style>