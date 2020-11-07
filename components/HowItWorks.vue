<template>
    <div class="container how">
      <div class="columns">
        <div class="column center" v-for="(column, index) in columns" :key="index">
            <img class="column-image" :src="column.image" alt="">
            <p class="titulo">{{ column.title }}</p>
            <p class="descripcion">{{ column.description }}</p>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'HowItWorks',
        data(){
            return{
                columns: [
                    {
                        image: require('@/assets/explora.svg'),
                        title: 'Explora',
                        description: 'Busca el proyecto que más te guste.'
                    },
                    {
                        image: require('@/assets/comunicate.svg'),
                        title: 'Comunícate',
                        description: 'Ponte en contacto con los encargados del proyecto.'
                    },
                    {
                        image: require('@/assets/participa.svg'),
                        title: 'Participa',
                        description: 'Súmate a los voluntarios que cambian el mundo.'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
/* helpers */
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.column{
    flex-direction: column;
}
/* desktop */
.how{
    position: relative;
    font-family: 'Manrope', sans-serif;
    background:transparent;
    padding-right: 96px;
    padding-left: 96px;
}
.top{
    font-weight: 800;
    font-size: 32px;
    line-height: 64px;
    color: #18191F;
}
.columns{
    margin-top: 48px;
}
.titulo{
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    color: #18191F;
    margin-bottom: 8px;
    z-index: 99;
}
.descripcion{
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    color: #817e7e;
    z-index: 99;
    text-align: center;
}
.column-image{
    height: 90px;
    z-index: 99;
    margin-bottom: 32px;
}
</style>