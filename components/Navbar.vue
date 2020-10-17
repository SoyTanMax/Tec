<template>
    <nav class="navbar">
        <div class="navbar-brand">
            <div class="navbar-item">
                <nuxt-link to='/'>
                    <div class="logo has-text-weight-bold is-size-4">Proyectos Tec</div>
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
                    <li class="cool-link is-size-5">Inicio</li>
                </nuxt-link>
                <nuxt-link :to="'proyectos'">
                    <li class="cool-link is-size-5">Proyectos</li>
                </nuxt-link>
                <nuxt-link :to="'organizaciones'">
                    <li class="cool-link is-size-5">Organizaciones</li>
                </nuxt-link>
                <nuxt-link :to="'mis-proyectos'">
                    <li class="cool-link is-size-5" v-if="loggedIn">Mis proyectos</li>
                </nuxt-link>
                <nuxt-link :to="'contacto'">
                    <li class="cool-link is-size-5">Contacto</li>
                </nuxt-link>
                <Login />
                <li class="cool-link is-size-5" v-if="loggedIn">Cerrar Sesión</li>
            </ul>
        </div>
      </div>
    </nav>
</template>

<script>
    import Login from "~/components/Login"
    export default {
        name: 'Navbar',
        components: {
            Login
        },
        data () {
            return {
                showNav: false,
                loggedIn: false,
            }
        },
        head() {
            return{
            }
        }
    }
</script>

<style scoped>

.navbar{
    padding-right: 96px;
    padding-left: 96px; 
    font-family: 'Nunito', sans-serif;
}
ul {
    list-style: none;
}
.logo{
    color: #084F95;
}
.cool-link {
    padding: 0;
    margin-right: 42px;
    color: #084F95;
}
.navbar-item{
    padding: 18px 0;
}
li::after{
    content:'';
    display:block;
    width: 0;
    height: 2px;
    background: #084F95;
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