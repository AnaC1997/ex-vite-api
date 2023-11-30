<script>

export default {
    name: "AppCard",
    props: ["info"],
mounted() {
    console.log('Informazioni ricevute:', this.info); // Verifica se le prop sono ricevute correttamente
}
}

</script>

<template>
    <div>
        <div class="card">
            <h4>{{ info.name }}</h4>
            <p>{{ info.brewery_type }}</p>
            <p>Address: 1 {{ info.address_1 }}</p>
            <p>Address: 2 {{ info.address_2 }}</p>
            <p>Address: 3 {{ info.address_3 }}</p>
            <p>{{ info.city }}</p>
            <p>{{ info.state_province }}</p>
            <p>{{ info.postal_code }}</p>
            <p>{{ info.country }}</p>
            <p>{{ info.longitude }}</p>
            <p>{{ info.latitude }}</p>
            <p>{{ info.website_url }}</p>
            <p>{{ info.state }}</p>
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