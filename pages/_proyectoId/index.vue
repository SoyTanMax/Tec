<template>
    <div class="proyecto-id section" v-if="proyecto">
        <div class="image" :style="{backgroundImage: 'url(' + proyecto.image + ')'}"></div>
        <div class="info">
            <header class="top">
                <h1 class="titulo" v-if="!edit">{{ proyecto.title }}</h1>
                <input v-if="edit" type="text" class="input" v-model="title" placeholder="Título del proyecto">
                <div class="icons" v-if="isOwner && edit">
                    <svg @click="edit = !edit" class="w-6 h-6 cancel" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    <svg @click="save" class="w-6 h-6 save" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                </div>
                <div class="icons" v-if="isOwner && !edit">
                    <svg @click="edit = !edit" class="w-6 h-6 edit" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    <svg @click="showModal = !showModal" class="w-6 h-6 errase" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                </div>
            </header>
            <div class="modal" :class="{ 'is-active': showModal, 'is-clipped': showModal }">
                <div class="modal-background"></div>
                <div class="modal-content">
                    <div class="box borrar">
                        <form @submit.prevent>
                            <p class="is-uppercase has-text-weight-bold has-text-centered is-size-3">Cuidado!</p>
                            <p class="has-text-centered" :style="{'margin-top':'24px'}">Estás apunto de borrar esta publicación. Deseas continuar?</p>
                            <button class="button is-fullwidth borrar-button has-text-weight-bold" @click="errase">Borrar publicación</button>
                        </form>
                    </div>
                </div>
                <button class="modal-close is-large" @click="showModal = !showModal"></button>
            </div>
            <p class="descripcion" v-if="!edit">{{ proyecto.description }}</p>
            <textarea v-if="edit" v-model="description" cols="30" rows="10" placeholder="Descripción del proyecto"></textarea>
        </div>
    </div>
</template>

<script>
    import db from '~/services/firebase'
    import { auth } from '~/services/firebase'

    export default {
        layout: 'normal',
        data(){
            return {
                proyecto: [], 
                user: null,
                isOwner: false,
                edit: false,
                title: '',
                description: '',
                showModal: false
            }
        },
        created(){
            auth.onAuthStateChanged(user => {
                this.user = user.email
            });
            let proyecto = db.collection('proyectos').where('id', '==', this.$route.params.proyectoId);
            proyecto.get().then(snapshot => {
                snapshot.forEach(doc => {
                    this.proyecto = doc.data()
                    if(this.proyecto.owner === this.user){
                        this.isOwner = true
                    }
                })
            });
        },
        methods:{
            save(){
                this.proyecto.title = this.title
                this.proyecto.description = this.description
                db.collection('proyectos').doc(this.proyecto.id).update({
                    title: this.title,
                    description: this.description
                });
                this.edit = false;
            },
            errase(){
                db.collection('proyectos').doc(this.proyecto.id).delete();
                this.$router.push('publicaciones')
            }
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
    .top{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 24px;
    }
    .info{
        display: flex;
        flex-direction: column;
        width: 60%;
    }
    .titulo{
        font-weight: 800;
        font-size: 32px;
        line-height: 64px;
        color: #18191F;
    }
    .descripción{
        color: #18191F;
        font-size: 20px;
    }
    .icons{
        display: flex;
        align-items: baseline;
    }
    .cancel{
        width: 22px;
        color: rgb(180, 180, 180);
        margin-right: 12px;
    }
    .edit, .save, .errase{
        width: 26px;
        color: rgb(180, 180, 180);
    }
    .edit{
        margin-right: 12px;
    }
    .edit:hover, .save:hover, .cancel:hover, .errase:hover{
        color: rgb(122, 122, 122);
    }
    .input{
        max-width: 350px;
        border: none;
        box-shadow: none;
        background: #EDEFF3;
        border-bottom: 1px solid rgb(180, 180, 180);
        border-radius: 0;
    }
    textarea{
        padding: 12px;
        border: none;
        box-shadow: none;
        background: #EDEFF3;
    }
    /* modal */
    .borrar{
        padding: 48px;
    }
    .borrar-button{
        margin-top: 24px;
        border: none;
        border-radius: 8px;
        color:  white;
        background: hsl(209, 75%, 45%);
        height: 48px;
        font-family: 'Manrope', sans-serif;
    }
</style>