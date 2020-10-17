<template>
    <div class="catalogo">
        <div class="section proyectos" :style="{background:'#edf2f7'}">
            <div class="catalogo-container">
                
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Footer from '~/components/Footer'
    export default {
        components: {
            Catalog,
            Footer
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