<template>
    <div class="hero">
        <div class="hero-head">
            <Navbar class="navbar"/>
        </div>
        <div class="hero-body">
            <div class="layer">
                <img src="~/assets/remote-work-man.svg" class="man" alt="">
                <img src="~/assets/remote-work-woman.svg" class="woman" alt="">
                <div class="half-circle"></div>
                <div class="half-circle-2"></div>
                <div class="half-circle-3"></div>
            </div>
            <div class="container">
                <div class="slogan">Encuentra el proyecto justo para ti.</div>
                <div class="descripcion">Necesitamos voluntarios que busquen experiencias increíbles.</div>
                <SearchBar/>
            </div>
        </div>
    </div>
</template>

<script>
    import SearchBar from '~/components/SearchBar'
    import Navbar from '~/components/Navbar'
    export default {
        name: 'Hero',
        components: {
            Navbar,
            SearchBar
        }
    }
</script>

<style scoped>
    .hero{
        height: 100vh;
        background: #f4fbff;
    }
    .hero-body{
        padding: 0;
        display: flex;
    }
    .layer{
        position: relative;
        height: 100vh;
        background: hsl(210, 92%, 23%);
        width: 47%;
    }
    .half-circle{
        position: absolute;
        top: 60%;
        left: 90%;
        width: 140px;
        height: 70px;
        background: rgb(235, 161, 52);
        border-bottom-left-radius: 70px;  
        border-bottom-right-radius: 70px;
        z-index: 99;
    }
    .half-circle-2{
        position: absolute;
        top: 20%;
        left: -50px;
        width: 140px;
        height: 70px;
        background: hsl(305, 67%, 63%);
        border-top-left-radius: 70px;  
        border-top-right-radius: 70px;
    }
    .half-circle-3{
        position: absolute;
        bottom: -5%;
        left: 40%;
        width: 70px;
        height: 140px;
        background: rgb(96, 220, 224);
        border-bottom-right-radius: 70px;  
        border-top-right-radius: 70px;
        z-index: 99;
    }
    .woman{
        position: absolute;
        top: 20%;
        left: 60%;
        width: 150px;
    }
    .man{
        position: absolute;
        top: 50%;
        left: 10%;
        width: 300px;
    }
    .container{
        position: relative;
        display: flex;
        flex-direction: column;
        padding-left: 96px;
        justify-content: center;
        align-items: flex-start;
        height: 100vh;
    }
    .slogan{
        display: flex;
        font-weight: bolder;
        font-size: 42px;
        line-height: 48px;
        color: #18191F;
        font-family: 'Manrope', sans-serif;
        letter-spacing: 2px;
        max-width: 500px;
    }
    .highlight{
        color: hsl(209, 75%, 45%);
        font-weight: bolder;
        font-size: 32px;
        line-height: 98px;
        font-family: 'Manrope', sans-serif;
        letter-spacing: 2px;
    }
    .descripcion{
        margin-top: 64px;
        font-size: 16px;
    }
</style>