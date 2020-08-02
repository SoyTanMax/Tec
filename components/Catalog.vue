<template>
        <nuxt-link :to="id">
            <div class="box">
                <div class="preview-image" :style="{backgroundImage: 'url(' + imagen + ')'}"></div>
                <div class="container">
                    <div class="upper">
                        <div class="tag is-uppercase">{{ categorias }}</div>
                        <div class="lugar">{{ lugar }}</div>
                    </div>
                    <p class="titulo is-size-5 is-capitalized has-text-weight-bold has-text-grey-darker">{{ titulo }}</p>
                    <div class="middle">
                        <div class="horarioBx">
                            <i class="far fa-calendar-alt" :style="{'color':'hsl(210, 0%, 55%)'}"></i>
                            <div class="horario is-size-6"><strong class="has-text-black">{{ horario }}</strong></div>
                        </div>
                        <div class="horasBx">
                            <i class="fas fa-briefcase"></i>
                            <div class="horas is-size-6"> <strong class="has-text-black">{{ horas }}</strong> horas</div>
                        </div>
                    </div>
                    <hr>
                    <p class="descripcion is-size-7 has-text-grey-darker">{{ descripcion }}</p>
                </div>
            </div>   
        </nuxt-link>
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
            ]
        }
    },

    props: {
        id: {
            type: String,
            required: true
        },
        titulo: {
            type: String,
            required: true
        },
        categorias: {
            type: String,
            required: true
        },
        descripcion: {
            type: String,
            required: true
        },
        horario: {
            type: String,
            required: true
        },
        horas: {
            type: String,
            required: true
        },
        lugar: {
            type: String,
            required: true
        },
        imagen: {
            type: String,
            required: true
        }
    }
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
.preview-image{
    background-position: center;
    background-size: cover;
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 192px;
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