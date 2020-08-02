<template>
    <div class="proyecto">
        <div class="hero">
            <div class="hero-head">
                <Navbar/>
            </div>
        </div>
        <div class="section info" :style="{background:'#edf2f7'}">
            <div class="columns">
                <div class="column is-4">
                    <div class="imagen" :style="{backgroundImage: 'url('+ imagen +')'}"></div>
                </div>
                <div class="column">
                    <p class="is-size-2">{{ titulo }}</p>
                    <p class="is-size-5">{{ descripcion }}</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Navbar from '~/components/Navbar'
    import Footer from '~/components/Footer'
    export default {
        components:{
            Navbar
        },
        asyncData(context) {
            return context.app.$storyapi.get('cdn/stories/catalogo/' + context.params.proyectoId, {
                version: 'draft',
            }).then(res => {
                return {
                    imagen: res.data.story.content.image,
                    titulo: res.data.story.content.titulo,
                    descripcion: res.data.story.content.descripcion,
                }
            })
        }
    }
</script>

<style scoped>
.proyecto{
    font-family: 'Nunito', sans-serif;
}
.hero {
    background: #137EE9;
    padding-right: 96px;
    padding-left: 96px;
}
.info{
    height: 90vh;
    padding-right: 96px;
    padding-left: 96px;
}
.imagen{
    background-position: center;
    background-size: cover;
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 256px;
}
</style>