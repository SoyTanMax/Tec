<template>
    <div class="hero">
        <svg class="wave2" viewBox="0 0 1440 815" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 262.547C0 262.547 91 394.061 189.5 461.737C288 529.414 406 560.672 486 547.173C566 532.656 640 532.288 720 436.271C800 340.254 880 449.769 960 436.271C1040 421.754 1092.68 389.779 1177 404.884C1276.8 422.762 1360 517.016 1400 543.248L1440 570.5V0H1400C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0H0V262.547Z" fill="#49CEF8"/>
        </svg>
        <svg class="wave1" viewBox="0 0 1440 779" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 274C0 274 112 423.602 221 478C330 532.398 400 545.3 480 532.398C560 518.522 640 508.776 720 417C800 325.224 880 429.902 960 417C1040 403.124 1092.68 372.562 1177 387C1276.8 404.088 1360 494.178 1400 519.252L1440 545.3V0H1400C1360 0 1280 0 1200 0C1120 0 1040 0 960 0C880 0 800 0 720 0C640 0 560 0 480 0C400 0 320 0 240 0C160 0 80 0 40 0H0V274Z" fill="url(#paint0_linear)"/>
            <defs>
                <linearGradient id="paint0_linear" x1="1440" y1="-4.33836e-05" x2="337.5" y2="475" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#30A8F8"/>
                    <stop offset="0.9999" stop-color="#0584D8"/>
                </linearGradient>
            </defs>
        </svg>
        <div class="hero-head">
            <Navbar class="navbar"/>
        </div>
        <div class="hero-body">
            <p class="has-text-white has-text-weight-bold top-title">Encuentra el proyecto justo para ti.</p>
            <p class="has-text-white bottom-title">Aquí puede ir un texto más pequeño.</p>
            <div class="box">
                <p class="busqueda">Búsqueda personalizada</p>
                <div class="filters-container columns">
                    <div class="filter column">
                        <p class="top-text is-uppercase">Estás viendo</p>
                        <p class="bottom-text">Todas las categorías</p>
                    </div>
                    <div class="filter column">
                        <p class="top-text is-uppercase">En</p>
                        <p class="bottom-text">Todas las ciudades</p>
                    </div>
                    <div class="filter column">
                        <p class="top-text is-uppercase">Por</p>
                        <p class="bottom-text">Popularidad</p>
                    </div>
                </div>
                <button class="button is-rounded has-text-weight-bold has-text-white">
                    <svg class="w-6 h-6 search" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    Buscar
                </button>
            </div>
            <How/>
        </div>
    </div>
</template>

<script>
    import SearchBar from '~/components/SearchBar'
    import Navbar from '~/components/Navbar'
    import How from '~/components/HowItWorks'
    export default {
        name: 'Hero',
        components: {
            Navbar,
            SearchBar,
            How
        }
    }
</script>

<style scoped>
/* waves */
.wave1, .wave2{
    position: absolute;
    top: -5%;
    width: 100%;
}
.wave1{
    z-index: 96;
}
.wave2{
    z-index: 95;
    }
/* navbar */
.navbar{
    z-index: 99;
}
/* hero */
.hero{
    height: 100vh;
    background: #f4fbff;
    font-family: 'Manrope', sans-serif;
}
.hero-body{
    display: flex;
    margin-top: 84px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 97;
}
.top-title{
    margin-bottom: 18px;
    font-size: 32px;
    line-height: 44px;
}
.bottom-title{
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 36px;
}
/* half circles */
.half-circle{
    position: absolute;
    top: 60%;
    left: 90%;
    width: 140px;
    height: 70px;
    background: rgb(235, 161, 52);
    border-bottom-left-radius: 70px;  
    border-bottom-right-radius: 70px;
}
/* filters */
.box{
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 36px;
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 12px;
}
.busqueda{
    font-weight: bold;
    font-size: 20px;
    line-height: 27px;
    color: #249EF0;
}
.filters-container{
    display: flex;
    margin-top: 26px;
    margin-bottom: 24px;
}
.filter{
    border: 1px solid #c4c4c4;
    padding: 8px 12px;
    border-radius: 8px;
    margin: 0 12px;
    width: 100%;
}
.top-text{
    font-weight: bold;
    font-size: 10px;
    line-height: 14px;
    color: #249EF0;
    margin-bottom: 4px;
}
.bottom-text{
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    color: #45494C;
}
.button{
    border: none;
    margin: 0 auto;
    min-width: 180px;
    background: #0584D9;
    font-family: 'Manrope', sans-serif;
    padding: 12px 24px;
}
.search{
    width: 20px;
    margin-right: 8px;
}
/* how it works */
.how{
    margin-top: -3%;
}
@media screen and (max-width: 1024px){
    .wave1, .wave2{
        display: none;
    }
    .hero{
        background: linear-gradient(180deg, #0584D9 46.35%, #f4fbff 100%);
    }
    .hero-body{
        margin-top: 34px;
        align-items: flex-start;
    }
    .how{
        display: none;
    }
    .box{
        width: 100%;
    }
    .top-title{
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        margin-bottom: 26px
    }
    .bottom-title{
        margin-bottom: 32px;
    }
    .box{
        padding: 24px;
    }
    .filters-container{
        flex-direction: column;
        margin: 0 0 24px;
    }
    .filter{
        margin: 24px 0 0;
    }
    .busqueda{
        font-size: 18px;
    }
    .button{
        width: 100%;
    }
}
</style>