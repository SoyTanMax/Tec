<template>
    <div class="section is-small projects">
        <p class="top is-black">Todos los proyectos</p>
        <div class="projects-container">
            <Preview v-for="proyecto in proyectos" :key="proyecto.id"
                :image="proyecto.image"
                :title="proyecto.title"
                :org="proyecto.org"
                :description="proyecto.description"
                :etiqueta="proyecto.etiqueta"
                :id="proyecto.id"
            />
        </div>
    </div>
</template>

<script>
    import db from '~/services/firebase'
    import Preview from '~/components/Preview'
    export default {
        layout: 'normal',
        components:{
            Preview
        },
        data() {
            return {
                proyectos: []
            }
        },
        created(){
            db.collection('proyectos').get().then(snapshot => {
                snapshot.docs.forEach(doc => {
                    let proyecto = doc.data()
                    this.proyectos.push(proyecto)
                });
            })
        }
    }
</script>

<style scoped>
.projects{
    background: white;
    padding-right: 96px;
    padding-left: 96px;
    font-family: 'Manrope', sans-serif;
}
.top{
    font-weight: 800;
    font-size: 32px;
    line-height: 64px;
    color: #18191F;
}
.projects-container{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 48px;
    padding: 48px 0;
    font-family: 'Nunito', sans-serif;
}
@media screen and (max-width: 1024px){
    .projects{
        padding-right: 24px;
        padding-left: 24px;
    }
    .projects-container{
        display: flex;
        overflow-x: scroll;
        padding: 24px 0px;
    }
    .top{
        line-height: 38px;
    }
    .projects-container::-webkit-scrollbar{
        display: none;
    } 
}
</style>