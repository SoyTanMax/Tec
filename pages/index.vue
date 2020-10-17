<template>
  <div class="Home">
    <Hero />
    <div class="section is-small">
      <div class="catalogo">
        <div v-for="proyecto in proyectos" :key="proyecto.id">
          <Preview 
            :image="proyecto.image"
            :title="proyecto.title"
            :org="proyecto.org"
            :description="proyecto.description"
          /> 
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import db from '~/services/firebase'
import Hero from '~/components/Hero'
import Footer from "~/components/Footer"

export default {
  components: {
    Hero,
    Footer
  },
  data(){
    return{
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
/* helpers */
.center{
  display: flex;
  justify-content: center;
  align-items: center;
}
/* desktop */
.section{
  padding-left: 128px;
  padding-right: 128px;
}
.catalogo{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 360px));
  gap: 48px;
  padding: 0;
  margin-bottom: 64px;
}
/* mobile */
@media screen and (max-width: 769px) {
    .hero{
      padding-right: 24px;
      padding-left: 24px;
    }
    .catalogo{
      padding-right: 24px;
      padding-left: 24px;
    }
    svg{
      width:338px;
      height:335px;
      top: -10%;
    }
}
</style>

