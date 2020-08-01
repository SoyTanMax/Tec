<template>
  <div class="Home">
    <div class="hero is-medium">
      <div class="hero-head">
        <Navbar/>
      </div>
      <div class="hero-body">
        <p class="is-size-2 has-text-weight-bold has-text-centered has-text-white">Hay mil maneras de ayudar</p>
        <div class="container">
          <SearchBar/>
        </div>
      </div>
      <svg class="tec" width="765" height="759" viewBox="0 0 476 472" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M364.993 193.317C348.856 209.443 316.862 239.945 291.203 265.36C230.625 320.531 229.657 356.088 232.914 372.746C188.321 320.561 223.688 281.455 246.372 259.311C256.776 249.099 321.045 186.047 335.763 172.043C387.809 122.484 387.794 107.651 387.794 107.651C407.574 154.254 381.116 177.217 364.993 193.317ZM363.449 270.65C347.609 286.116 353.968 279.923 328.304 304.993C286.561 345.666 286.324 372.746 286.324 372.746C263.026 347.27 277.326 304.921 302.381 280.491C312.787 270.314 332.164 252.018 345.967 238.962C374.169 212.313 382.977 204.513 386.968 194.232C397.765 238.909 374.04 259.366 363.449 270.65ZM190.683 238.473C202.247 227.327 275.859 155.216 289.912 141.605C335.521 97.391 333.468 83.5086 333.468 83.5086C353.162 130.106 326.169 155.571 309.936 171.552C292.25 188.969 247.486 232.782 221.7 258.031C156.949 321.423 180.156 372.734 180.156 372.734C139.044 342.395 148.265 279.739 190.683 238.473ZM163.807 188.717C175.447 177.271 237.985 116.189 259.156 95.6785C303.615 52.5892 301.037 35.4705 303.047 26.4951C334.19 58.3083 315.075 90.5876 298.182 107.352C283.384 122.04 213.94 191.877 185.71 217.508C178.518 224.041 131.767 266.737 134.813 306.309C108.722 273.414 115.74 231.723 163.807 188.717ZM106.645 171.258C117.124 160.393 196.624 83.1744 210.104 69.6645C242.992 36.7904 236.488 10.2853 236.488 10.2853C274.547 39.1178 260.551 70.251 239.902 90.1616C223.148 106.401 163.78 165.849 136.355 192.03C92.8281 233.668 98.1133 268.052 106.347 297.478C74.4515 264.876 59.9754 219.661 106.645 171.258ZM238.003 0C106.556 0 0 106.072 0 236.922C0 357.741 90.856 457.431 208.269 472V438.459C169.04 432.588 129.899 419.361 103.815 383.731H372.185C346.096 419.361 306.96 432.588 267.731 438.459V472C385.144 457.431 476 357.741 476 236.922C476 106.072 369.441 0 238.003 0Z" fill="#0033A0"/>
      </svg>
    </div>
    <div class="section is-small catalogo">
      <div class="columns is-paddingless">
        <div class="column is-2 is-mobile">
          <p class="is-left is-size-4">Filtros</p>
          <Filters/>
        </div>
        <div class="column">
          <p class="has-text-centered is-size-3">Catálogo de proyectos</p>
          <Catalog/>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "~/components/Navbar"
import SearchBar from "~/components/SearchBar"
import Catalog from "~/components/Catalog"
import Filters from "~/components/Filters"
import Footer from "~/components/Footer"

export default {
  components: {
    Navbar,
    SearchBar,
    Catalog,
    Filters,
    Footer
  },
  head() {
    return{
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Nunito&display=swap'
        }
      ]
    }
  }
}
</script>

<style scoped>
.hero{
  position: relative;
  padding-right: 96px;
  padding-left: 96px;
  background:#137EE9;
  font-family: 'Nunito', sans-serif;
}
.is-size-2 {
  position: relative;
  margin-bottom: 42px;
  z-index: 1000;
}
.container{
  position: relative;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;

}
.catalogo{
  background: #edf2f7;
  padding-right: 96px;
  padding-left: 96px;
}
.tec{
  position: absolute;
  opacity: 0.4;
  bottom: 24px;
  left: -5%;
  z-index: 0;
}
.columns{
  font-family: 'Nunito', sans-serif;
}
/* mobile */
@media screen and (max-width: 769px) {
    .hero{
      padding-right: 24px;
      padding-left: 24px;
    }
    .catalogo{
      padding-right: 24px;
      padding-left: 24px;
    }
    svg{
      width:338px;
      height:335px;
      top: -10%;
    }
}
</style>

