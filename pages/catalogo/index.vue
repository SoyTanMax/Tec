<template>
    <div class="catalogo">
        <div class="hero">
            <div class="hero-head">
                <Navbar/>
            </div>
        </div>
        <div class="section proyectos" :style="{background:'#edf2f7'}">
            <div class="catalogo-container">
                <Catalog
                    v-for="proyecto in proyectos" :key="proyecto.id"
                    :titulo="proyecto.titulo"
                    :id="proyecto.id"
                    :descripcion="proyecto.descripcion"
                    :categorias="proyecto.categorias"
                    :horario="proyecto.horario"
                    :horas="proyecto.horas"
                    :lugar="proyecto.lugar"
                    :imagen="proyecto.imagen"/>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Navbar from '~/components/Navbar'
    import Catalog from '~/components/Catalog'
    import Footer from '~/components/Footer'
    export default {
        components: {
            Navbar,
            Catalog,
            Footer
        },
        asyncData(context) {
            return context.app.$storyapi.get('cdn/stories', {
                version: 'draft',
                starts_with:'catalogo/'
            }).then(res => {
                console.log(res)
                return {
                    proyectos : res.data.stories.map( bp => {
                    return{
                        id: bp.slug,
                        titulo: bp.content.titulo,
                        descripcion: bp.content.descripcion,
                        categorias: bp.content.categorias,
                        horario: bp.content.horario,
                        horas: bp.content.horas,
                        lugar: bp.content.lugar,
                        imagen: bp.content.image
                    }
                })
            }
        })
    }
    }
</script>

<style scoped>
.hero{
  position: relative;
  padding-right: 96px;
  padding-left: 96px;
  background:#137EE9;
  font-family: 'Nunito', sans-serif;
}
.proyectos{
    height: 90vh;
    padding-right: 96px;
    padding-left: 96px;
}
.catalogo-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 24px;
    padding: 0;
    font-family: 'Nunito', sans-serif;
}
</style>