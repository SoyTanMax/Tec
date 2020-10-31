<template>
    <div class="section is-small">
        <p class="top has-text-centered is-black">Nuestros colaboradores</p>
        <p class="has-text-centered is-black">Más de 10 organizaciones disponibles para ti.</p>
        <img src="@/assets/Logos.jpeg" alt="">
    </div>
</template>

<script>
    export default {
        name: 'Orgs'
    }
</script>

<style scoped>
.section{
    background: #F4F5F7;
    font-family: 'Manrope', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.top{
    font-weight: 800;
    font-size: 32px;
    line-height: 64px;
    color: #18191F;
}
img{
    width: 640px;
    margin: 24px auto;
}
</style>