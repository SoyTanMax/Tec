<template>
    <div class="section is-medium how">
      <p class="top has-text-centered is-black">¿Qué tengo que hacer?</p>
      <div class="columns">
        <div class="column center" v-for="(column, index) in columns" :key="index">
            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#93C3F1" d="M34.2,-49.2C47.4,-37.5,63.3,-31.6,70.6,-20.3C78,-8.9,76.9,7.9,70.3,21.2C63.7,34.5,51.5,44.3,38.8,49.3C26.2,54.3,13.1,54.6,-1.6,56.8C-16.3,59,-32.5,63.1,-43.1,57.4C-53.7,51.6,-58.6,36.1,-58.8,22.2C-59,8.3,-54.5,-4,-50.7,-16.7C-46.8,-29.3,-43.6,-42.4,-35.2,-55.6C-26.9,-68.9,-13.4,-82.3,-1.5,-80.3C10.5,-78.3,21,-60.8,34.2,-49.2Z" transform="translate(100 100)" />
            </svg>
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
    background:#f4fbff;
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
    font-size: 24px;
    line-height: 32px;
    color: #18191F;
    margin-bottom: 8px;
    z-index: 99;
}
.descripcion{
    font-weight: normal;
    font-size: 16px;
    line-height: 26px;
    color: #817e7e;
    z-index: 99;
}
svg{
    position: absolute;
    top: 42%;
    z-index: 98;
    width: 170px;
}
.column-image{
    height: 150px;
    z-index: 99;
    margin-bottom: 32px;
}
</style>