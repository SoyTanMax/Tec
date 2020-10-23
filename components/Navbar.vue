<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <div class="navbar-item">
                <div class="logo"> <p class="proyectos">Proyectos</p><p class="tec">Tec</p></div>
            </div>
            <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                <span class="has-text-white"></span>
                <span class="has-text-white"></span>
                <span class="has-text-white"></span>
            </div>
        </div>
        <div class="navbar-end">
            <div class="navbar-menu" :class="{ 'is-active': showNav }">
                <div class="navbar-start">
                    <ul class="navbar-item">
                        <nuxt-link :to="'/'">
                            <li class="cool-link is-size-6 has-text-weight-semibold">Inicio</li>
                        </nuxt-link>
                        <nuxt-link :to="'proyectos'">
                            <li class="cool-link is-size-6 has-text-weight-semibold">Proyectos</li>
                        </nuxt-link>
                        <nuxt-link :to="'organizaciones'">
                            <li class="cool-link is-size-6 has-text-weight-semibold">Organizaciones</li>
                        </nuxt-link>
                        <Login />
                        <Signup />
                        <li class="cool-link is-size-5" v-if="loggedIn">Cerrar Sesión</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </nav>
</template>

<script>
    import Login from "~/components/Login"
    import Signup from "~/components/Signup"
    export default {
        name: 'Navbar',
        components: {
            Login,
            Signup
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
    position: absolute;
    width: 100%;
    padding: 16px 96px;
}
.navbar-center{
    display: flex;
    justify-content: center;
    align-items: center;
}
ul{
    padding-right: 0;
    padding-left: 0;
}
.cool-link{
    font-family: 'Manrope', sans-serif;
    line-height: 20px;
    color: rgb(99, 99, 99);
    padding-right: 32px;
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
.nuxt-link-exact-active li{
    color:hsl(209, 75%, 45%);
}
li:hover{
    color:hsl(209, 75%, 45%);
}
</style>