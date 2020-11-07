<template>
    <div class="preview">
        <div class="titulo">{{ title }}</div>
        <div class="image" :style="{backgroundImage: 'url(' + image + ')'}"></div>
        <div class="org"> {{ org }} </div>
        <div class="bottom">
            <p class="etiqueta is-uppercase">{{ etiqueta }}</p>
            <nuxt-link :to="id">
                <button class="button is-rounded has-text-weight-semibold">Ver más</button>
            </nuxt-link>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'Preview',
        props: {
            image: {
                type: String
            },
            title: {
                type: String
            },
            org: {
                type: String
            },
            description: {
                type: String
            },
            etiqueta: {
                type: String
            },
            id: {
                type: String
            }
        }
    }
</script>

<style scoped>
.preview{
    font-family: 'Manrope', sans-serif;
}
.image{
    background-position: center;
    background-size: cover;
    height: 280px;
    margin-bottom: 12px;
    border-radius: 8px;
}
.titulo{
    min-height: 60px;
    font-weight: 800;
    font-size: 20px;
    line-height: 30px;
    color: #18191F;
    margin-bottom: 12px;
}
.info{
    padding: 24px;
}
.org{
    margin-bottom: 12px;
}
.button{
    background: hsl(209, 75%, 45%);
    color: white;
    font-family: 'Manrope', sans-serif;
    padding: 10px 18px;
    font-size: 14px;
    border: none;
    transition: 300ms;
}
.button:hover{
    transform: scale(1.03);
}
.bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 2px;
    font-weight: 800;
    font-size: 14px;
    color: #18191F;
}
@media screen and (max-width: 1024px){
    .image{
        height: 240px;
        width: 240px;
    }
}
</style>