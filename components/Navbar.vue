<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <div class="navbar-item">
                <nuxt-link :to="'/'">
                    <div class="has-text-white has-text-weight-bold is-size-4">Proyectos Tec</div>
                </nuxt-link>
            </div>
        <!--
    Using the v-on: directive to listen for the click event and toggle the data property showNav. Also, using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
        <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
          <span class="has-text-white"></span>
          <span class="has-text-white"></span>
          <span class="has-text-white"></span>
        </div>
      </div>
      <!--
    Using the v-bind: directive to reactively update the class attribute 'is-active' based on the showNav property.
    -->
      <div class="navbar-menu" :class="{ 'is-active': showNav }">
        <div class="navbar-end">
            <ul class="navbar-item">
                <nuxt-link :to="'/'">
                    <li class="cool-link has-text-white is-size-5">Inicio</li>
                </nuxt-link>
                <router-link :to="{ name: ''}">
                    <li class="cool-link has-text-white is-size-5">Catálogo</li>
                </router-link>
                <router-link :to="{ name: ''}">
                    <li class="cool-link has-text-white is-size-5">Contacto</li>
                </router-link>
                <router-link :to="{ name: ''}">
                    <li class="has-text-white is-size-5">Ayuda</li>
                </router-link>
            </ul>
        </div>
      </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data () {
            return {
            showNav: false
            }
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

ul {
    list-style: none;
}
.cool-link {
    padding: 0;
    margin-right: 42px;
}
.navbar-item{
    padding: 36px 0;
}
li::after{
    content:'';
    display:block;
    width: 0;
    height: 2px;
    background: white;
    transition: width .3s;
    border-radius: 1px;
}
li:hover:after{
    width: 100%;
    transition: width .3s;
}
/* mobile */
@media screen and (max-width: 769px) {
    .navbar-item{
        padding: 0;
    }
}
</style>