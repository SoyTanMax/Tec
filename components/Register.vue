<template>
    <div class="section is-medium register">
        <p class="top is-black has-text-centered is-size-3">¿Buscas publicar tu proyecto?</p>
        <SignUp />
        <div class="half-circle"></div>
        <div class="half-circle-2"></div>
        <div class="half-circle-3"></div>
        <div class="half-circle-4"></div>
    </div>
</template>

<script>
    import SignUp from '~/components/Signup2'
    export default {
        name: 'Register',
        components:{
            SignUp
        }
    }
</script>

<style scoped>
    .register{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-right: 96px;
        padding-left: 96px;
        background: hsl(204, 76%, 65%);
        font-family: 'Manrope', sans-serif;
    }
    .top{
        font-weight: 800;
        font-size: 32px;
        line-height: 64px;
        color: white;
        margin-bottom: 24px;
    }
    .button{
        background: white;
    }
    .half-circle{
        position: absolute;
        top: 20%;
        left: 80%;
        width: 140px;
        height: 70px;
        background: rgb(235, 161, 52);
        border-top-left-radius: 70px;  
        border-top-right-radius: 70px;
        z-index: 98;
    }
    .half-circle-2{
        position: absolute;
        top: 60%;
        left: 25%;
        width: 140px;
        height: 70px;
        background: hsl(305, 67%, 63%);
        border-bottom-left-radius: 70px;  
        border-bottom-right-radius: 70px;
        z-index: 98;
    }
    .half-circle-3{
        position: absolute;
        top: 15%;
        left: 10%;
        width: 70px;
        height: 140px;
        background: rgb(96, 220, 224);
        border-bottom-left-radius: 70px;  
        border-top-left-radius: 70px;
        z-index: 98;
    }
    .half-circle-4{
        position: absolute;
        bottom: 5%;
        left: 70%;
        width: 70px;
        height: 140px;
        background: hsl(210, 92%, 23%);
        border-bottom-right-radius: 70px;  
        border-top-right-radius: 70px;
        z-index: 98;
    }
</style>