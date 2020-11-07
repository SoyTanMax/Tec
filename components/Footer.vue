<template>
    <footer class="section footer">
        <div class="logo"> 
            <p class="proyectos">Proyectos</p>
            <p class="tec">Tec</p>
        </div>
        <p class="has-text-white is-size-7 derechos">@2020 Tecnológico de Monterrey. Todos los derechos reservados.</p>
        <div class="social">
            <div class="social-container">
                <i class="fab fa-facebook-f"></i>
            </div>
            <div class="social-container">
                <i class="fab fa-instagram"></i>
            </div>
            <div class="social-container">
                <i class="fab fa-twitter"></i>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.section{
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: black;
    padding-right: 96px;
    padding-left: 96px;
    font-family: 'Manrope', sans-serif;
}
.logo{
    display: flex;
}
.proyectos{
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color:  hsl(209, 75%, 45%);
}
.tec{
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: white;
}
.social{
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
}
.social-container{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: #FFFFFF;
    border-radius: 50%;
    margin-right: 12px;
    color: black;
}
.social-container:hover{
    background: hsl(209, 75%, 45%);
    color: white;
}
@media screen and (max-width: 1024px){
    .footer{
        flex-direction: column;
        padding-right: 24px;
        padding-left: 24px;
    }
    .derechos{
        text-align: center;
        margin-bottom: 12px;
    }
    .logo{
        margin-bottom: 12px
    }
}
</style>