<template>
    <div class="organizaciones section">
        <h1 class="titulo">Todas las organizaciones</h1>
    </div>
</template>

<script>
    export default {
        layout: 'normal'
    }
</script>

<style scoped>
.organizaciones{
    padding-right: 96px;
    padding-left: 96px;
    font-family: 'Manrope', sans-serif;
    height: 100vh;
}
.titulo{
    font-weight: 800;
    font-size: 32px;
    line-height: 64px;
    color: #18191F;
    margin-bottom: 24px;
}
@media screen and (max-width: 1024px){
    .organizaciones{
        padding-right: 24px;
        padding-left: 24px;
    }
    .titulo{
        line-height: 38px;
    }
}
    
</style>