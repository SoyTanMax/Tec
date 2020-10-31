<template>
    <div class="proyecto-id section">
        <div v-if="proyecto" class="image" :style="{backgroundImage: 'url(' + proyecto.image + ')'}"></div>
        <div class="info">
            <h1 v-if="proyecto" class="titulo">{{ proyecto.title }}</h1>
            <p v-if="proyecto" class="descripcion">{{ proyecto.description }}</p>
        </div>
    </div>
</template>

<script>
    import db from '~/services/firebase'
    export default {
        layout: 'normal',
        data(){
            return {
                proyectos: []
            }
        },
        computed: {
            proyecto(){
                let id = this.$route.params.proyectoId
                return this.proyectos.find( proyecto => {
                    return proyecto.id == id
                })
            }
        },
        created(){
            db.collection('proyectos').onSnapshot( (snapshot) => {
                snapshot.docs.forEach( doc => {
                    let proyecto = doc.data();
                    this.proyectos.push(proyecto)
                })
            });
        }
    }
</script>

<style scoped>
    .proyecto-id{
        height: 100vh;
        background: #EDEFF3;
        padding-right: 96px;
        padding-left: 96px;
        display: flex;
        font-family: 'Manrope', sans-serif;
    }
    .image{
        background-position: center;
        background-size: cover;
        width: 380px;
        height: 320px;
        margin-bottom: 12px;
        border-radius: 8px;
        margin-right: 24px;
    }
    .info{
        display: flex;
        flex-direction: column;
        max-width: 60%;
    }
    .titulo{
        font-weight: 800;
        font-size: 32px;
        line-height: 64px;
        color: #18191F;
        margin-bottom: 24px;
    }
    .descripción{
        color: #18191F;
        font-size: 20px;
    }
</style>