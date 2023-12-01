<script>

export default {
    name: "AppCard",
    props: ["info"],
    mounted() {
        console.log('Informazioni ricevute:', this.info); // Verifica se le prop sono ricevute correttamente
       
    },
    
}







</script>

<template>
    <div>
        <div class="card">
            <h4>Name: {{ info.name }}</h4>
            <p>Cita: {{info.city }}</p>
            <p>Codice Postal: {{ info.postal_code }}</p>
            <p>{{ info.street }}</p>
        </div>
    </div>
</template>



<style scoped>
.card {
    padding: 1rem;
    background: red;
    margin: 1rem;
    min-width: 30%;
}
</style>