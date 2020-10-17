<template>
    <div>
        <button class="button login-button has-text-white is-rounded" @click="showModal = !showModal">
            Inicia sesión
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
                                <input type="email" class="input" id="correo">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <label for="correo" class="label">Contraseña</label>
                                <input type="password" class="input" id="correo">
                            </div>
                        </div>
                        <button class="button is-fullwidth login has-text-white has-text-weight-bold">Ingresar</button>
                    </form>
                </div>
            </div>
            <button class="modal-close is-large" @click="showModal = !showModal"></button>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                showModal: false
            }
        },
    }
</script>

<style scoped>
.login-button{
    border: none;
    background: linear-gradient(90deg, #396ad3 0%,  #804bd6 110%);
    font-family: 'Nunito', sans-serif;
    width: 156px;
    height: 48px;
    letter-spacing: 1px;
}
/* modal */
.box{
    padding: 48px 84px;
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
    background: linear-gradient(90deg, #4384d3 0%, #5db8ed 100%);
    font-family: 'Nunito', sans-serif;
    height: 48px;
}
</style>