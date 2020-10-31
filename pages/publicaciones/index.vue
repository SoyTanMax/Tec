<template>
    <div v-if="user">
        <div class="section message" v-if="proyectos.length == 0">
            <img src="~/assets/parece.svg" class="man" alt="">
            <p class="has-text-centered is-size-4 has-text-weight-bold has-text-black">Por el momento no tienes publicaciones activas.</p>
            <button class="button is-medium is-rounded" @click="showModal = !showModal">
                <svg class="w-6 h-6" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
                Crear publicación
            </button>
        </div>
        <div class="section mis-proyectos" v-if="proyectos.length != 0">
            <div class="header">
                <p class="top is-black">Mis proyectos</p>
                <button class="button is-medium is-rounded crear" @click="showModal = !showModal">
                    <svg class="w-6 h-6" fill="#FFFFFF" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
                    Crear publicación
                </button>
            </div>
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
        <div class="modal" :class="{ 'is-active': showModal, 'is-clipped': showModal }">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <div class="has-text-centered has-text-weight-medium is-size-5 inicia has-text-white">Realiza una nueva publicación</div>
                    <form @submit.prevent>
                        <div class="drop-zone" @dragover.prevent="dragOver = true" @dragend="dragOver = false" @dragleave="dragOver = false" @drop.prevent="drop" :class="{'drop-zone--over': dragOver}" >
                            <div class="drop-zone__msg" v-if="imageData == null">
                                <svg class="w-6 h-6 upload" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                                <span class="drop-zone-text has-text-white">Arrastra archivos aquí o da click para elegir la foto del proyecto.</span>
                            </div>
                            <img v-if="newProject.image" :src="newProject.image" class="preview" alt="">
                            <p class="has-text-white has-text-centered">{{parseInt(this.uploadValue)}}%</p>
                        </div>
                        <div class="field">
                            <div class="control">
                                <label for="nombre" class="label">Nombre del proyecto</label>
                                <input type="text" class="input" id="nombre" v-model="newProject.name">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <label for="descripcion" class="label">Descripción</label>
                                <textarea name="descripcion" id="descripcion" cols="30" rows="10" class="text" v-model="newProject.description"></textarea>
                            </div>
                        </div>
                        <button class="button is-fullwidth login has-text-weight-bold" @click="publicar">Publicar</button>
                    </form>
                </div>
            </div>
            <button class="modal-close is-large" @click="showModal = !showModal"></button>
        </div>
    </div>
</template>

<script>
    const cryptoRandomString = require('crypto-random-string');
    var slugify = require('slugify');
    
    import db from '~/services/firebase'
    import { auth } from '~/services/firebase'
    import {storage} from '~/services/firebase'
    import Preview from '~/components/Preview'

    export default {
        layout: 'normal',
        components: {
            Preview
        },
        data(){
            return{
                user: '',
                proyectos: [],
                showModal: false,
                dragOver: false,
                imageData: null,
                uploadValue: 0,
                newProject: {
                    name: '',
                    description: '',
                    title: '',
                    image: '',
                    org: '',
                    etiqueta: ''
                }
            }
        },
        created(){
            auth.onAuthStateChanged(user => {
                if(user){
                    this.user = user;
                    let ref = db.collection('proyectos').where('owner', '==', this.user.email);
                    ref.get().then(snapshot => {
                        snapshot.forEach(doc => {
                            let proyecto = doc.data();
                            this.proyectos.push(proyecto)
                        })
                    });
                }
            });
        },
        methods:{
            drop(e){
                this.imageData = e.dataTransfer.files[0];
                const storageRef = storage.ref(`${this.imageData.name}`).put(this.imageData);
                storageRef.on(`state_changed`, snapshot => {
                    this.uploadValue = (snapshot.bytesTransferred / snapshot.totalBytes)*100;
                }, error => {
                    console.log(error.message)
                }, () => {
                    this.uploadValue = 100;
                    storageRef.snapshot.ref.getDownloadURL().then( url => {
                        this.newProject.image = url
                    })
                })
            },
            publicar(){
                const id = cryptoRandomString({length: 10, type: 'url-safe'});

                db.collection('proyectos').doc(id).set({
                    title: this.newProject.name,
                    description: this.newProject.description,
                    time: new Date(),
                    owner: this.user.email,
                    org: this.newProject.org,
                    image: this.newProject.image,
                    etiqueta: this.newProject.etiqueta,
                    id: slugify(id)
                }, error => {
                    console.log(error.message)
                });
                this.showModal = false
            }
        }
    }
</script>

<style scoped>
.message{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
}
.header{
    display: flex;
    align-items: baseline;
    justify-content: space-between;
}

.mis-proyectos{
    padding-right: 96px;
    padding-left: 96px;
    font-family: 'Manrope', sans-serif;
    height: fit-content;
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
img{
    width: 300px;
    margin-bottom: 24px;
}
.is-size-4{
    margin-bottom: 18px;
    
}
.button{
    background: #6367FD;
    color: white;
    margin-top: 18px;
    border: none;
    transition: 300ms;
}
.crear{
    background: hsl(209, 75%, 45%);
    color: white;
    margin-top: 18px;
    border: none;
    transition: 300ms;
}
.button:hover{
    transform: scale(1.03);
}
svg{
    width: 26px;
    margin-right: 8px;
}
/* modal */
.box{
    padding: 48px 84px;
    font-family: 'Manrope', sans-serif;
    background: hsl(209, 75%, 45%);
}
.drop-zone{
    margin: 12px auto 24px;
    max-width: 60%;
    min-height: 200px;
    max-height:fit-content;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 2px dashed white;
    border-radius: 12px;
}
.drop-zone__msg{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}
.drop-zone--over{
    border-style: solid;
}
.drop-zone--input{
    display: none;
}
.preview{
    width: 100%;
    border-radius: 12px;
}
.upload{
    width: 54px;
    margin-bottom: 8px;
}
.inicia{
    margin-bottom: 48px;
}
.label{
    color: white;
    font-weight: 500;
}
.input{
    background: white;
    border: none;
}
textarea{
    background: white;
    border: none;
    border-radius: 8px;
    padding: 8px;
    width: 100%;
}
.field{
    margin-bottom: 24px;
}
.login{
    border: none;
    border-radius: 8px;
    color:  white;
    background: hsl(209, 75%, 65%);
    height: 48px;
    font-family: 'Manrope', sans-serif;
}
.modal{
    z-index: 99;
}
</style>