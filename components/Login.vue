<template>
    <div>
        <button class="button login-button" @click="showModal = !showModal">
            Ingresar
        </button>
        <div class="modal" :class="{ 'is-active': showModal, 'is-clipped': showModal }">
            <div class="modal-background"></div>
            <div class="modal-content">
                <div class="box">
                    <div class="has-text-centered has-text-weight-medium is-size-5 inicia">Inicia sesión como organización</div>
                    <form @submit.prevent>
                        <div class="field">
                            <div class="control">
                                <label for="correo" class="label">Correo electrónico</label>
                                <input type="email" class="input" id="correo" v-model="account.email">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <label for="correo" class="label">Contraseña</label>
                                <input type="password" class="input" id="correo" v-model="account.password">
                            </div>
                        </div>
                        <button class="button is-fullwidth login has-text-white has-text-weight-bold" @click="login">Ingresar</button>
                    </form>
                </div>
            </div>
            <button class="modal-close is-large" @click="showModal = !showModal"></button>
        </div>

    </div>
</template>

<script>
    import db from '~/services/firebase'
    import { auth } from '~/services/firebase'
    export default {
        name: 'Login',
        data() {
            return {
                showModal: false,
                account: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            login(){
                auth.signInWithEmailAndPassword(this.account.email, this.account.password).then(
                    user => {
                        this.$router.push('publicaciones')
                    },
                    error => {
                        this.isError = true;
                        this.errorMsg = error.code
                    }
                )
            }
        }
    }
</script>

<style scoped>
.login-button{
    border: none;
    background: white;
    font-family: 'Manrope', sans-serif;
    border-radius: 8px;
    font-size: 14px;
    color: hsl(209, 75%, 45%);
    padding: 20px 32px;
    font-weight: 700;
    margin-right: 14px;
}
/* modal */
.box{
    padding: 48px 84px;
    font-family: 'Manrope', sans-serif;
}
.inicia{
    margin-bottom: 48px;
}
.label{
    color: rgb(116, 116, 116);
    font-weight: 500;
}
.field{
    margin-bottom: 24px;
}
.login{
    border: none;
    border-radius: 8px;
    background:  hsl(209, 75%, 45%);
    height: 48px;
    font-family: 'Manrope', sans-serif;
}
.modal{
    z-index: 99;
}
@media screen and (max-width: 1024px){
    .login-button{
        background:  hsl(209, 75%, 45%);
        color: white;
        margin-bottom: 18px;
        width: 100%;
    }
    .box{
        padding: 48px 24px;
        margin: 0 12px;
    }
    .modal{
        z-index: 99;
    }
}
</style>