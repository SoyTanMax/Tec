<template>
    <div class="catalogo">
        <div class="box" v-for="proyecto in proyectos" :key="proyecto.id">
            <img src="@/assets/placeholder.png" width="230"/>
            <div class="container">
                <div class="upper">
                    <div class="tag is-uppercase">{{ proyecto.categorias }}</div>
                    <div class="lugar">{{ proyecto.lugar }}</div>
                </div>
                <p class="titulo is-size-5 is-capitalized has-text-weight-bold has-text-grey-darker">{{ proyecto.titulo }}</p>
                <div class="middle">
                    <div class="horarioBx">
                        <i class="far fa-calendar-alt" :style="{'color':'hsl(210, 0%, 55%)'}"></i>
                        <div class="horario is-size-6"><strong>{{ proyecto.horario }}</strong></div>
                    </div>
                    <div class="horasBx">
                        <i class="fas fa-briefcase"></i>
                        <div class="horas is-size-6"> <strong>{{ proyecto.horas }}</strong> horas</div>
                    </div>
                </div>
                <hr>
                <p class="descripcion is-size-7 has-text-grey-darker">{{ proyecto.descripcion }}</p>
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    name: 'Catalog',
    head() {
        return{
            script: [
                {
                    src:'https://use.fontawesome.com/releases/v5.3.1/js/all.js'
                }
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Nunito&display=swap'
                }
            ]
        }
    },
    data() {
        return {
            proyectos: [
                {
                    id: '1',
                    titulo: 'proyecto uno',
                    descripcion: 'Este es un ejemplo, aquí va la descripción.',
                    categorias: 'tecnología',
                    horario: '10:00 a.m.',
                    horas: '60',
                    lugar: 'Campus Monterrey' 
                },
                {
                    id: '2',
                    titulo: 'proyecto dos',
                    descripcion: 'Este es un ejemplo, aquí va la descripción.',
                    categorias: 'ciencia',
                    horario: '12:00 p.m.',
                    horas: '80',
                    lugar: 'San Nicolás' 
                },
                {
                    id: '3',
                    titulo: 'proyecto tres',
                    descripcion: 'Este es un ejemplo, aquí va la descripción.',
                    categorias: 'tecnología',
                    horario: '11:00 a.m.',
                    horas: '60',
                    lugar: 'San Pedro' 
                },
                {
                    id: '4',
                    titulo: 'proyecto cuatro',
                    descripcion: 'Este es un ejemplo, aquí va la descripción.',
                    categorias: 'enseñanza',
                    horario: '12:00 p.m.',
                    horas: '120',
                    lugar: 'Guadalupe' 
                },
                {
                    id: '5',
                    titulo: 'proyecto cinco',
                    descripcion: 'Este es un ejemplo, aquí va la descripción.',
                    categorias: 'ciencia',
                    horario: '1:00 p.m.',
                    horas: '100',
                    lugar: 'Campus Monterrey' 
                },
                {
                    id: '6',
                    titulo: 'proyecto seis',
                    descripcion: 'Este es un ejemplo, aquí va la descripción.',
                    categorias: 'ciencia',
                    horario: '1:00 p.m.',
                    horas: '100',
                    lugar: 'Campus Monterrey' 
                }
            ]
        }
    },
}
</script>

<style scoped>
/* helpers */
.center{
    display: flex;
    justify-content: center;
    justify-items: center;
}
.box{
    padding:0;
    border-radius: 12px;
    transition: 300ms;
    color:hsl(210, 0%, 55%);
}
.box:hover{
    transform: scale(1.03);
}
.catalogo{
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    gap: 24px;
    padding-top: 24px;
    font-family: 'Nunito', sans-serif;
}
.column{
    display: flex;
}
.container{
    padding: 24px 12px;
}
.middle{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 16px;
}
img{
    border-radius: 8px 8px 0 0;
    width: 100%;
}
.titulo{
    line-height: 24px;
    margin-bottom: 16px;
}
.tag{
    margin-bottom: 12px;
    border: 1.5px solid hsl(210, 0%, 80%);
}
.upper{
    display: flex;
    justify-content: space-between;
}
.horario, .horas{
    margin-left: 8px;
}
.horarioBx, .horasBx{
    display:flex;
    align-items: baseline;
    margin-right: 18px;
}
.lugar {
    color: hsl(210, 0%, 55%)
}
hr{
    margin: 12px 0;
    background-color: rgb(228, 228, 228);
}
</style>