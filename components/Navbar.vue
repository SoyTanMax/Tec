<template>
    <nav class="navbar is-transparent">
        <div class="nav-overlay" @click="showNav = !showNav" :class="{ 'is-active': showNav }"></div>
        <div class="navbar-brand">
            <div class="navbar-item is-paddingless">
                <div class="logo"><p class="proyectos">Proyectos</p><p class="tec">Tec</p></div>
            </div>
            <div class="navbar-burger" @click="showNav = !showNav" :class="{ 'is-active': showNav }">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
        <div class="navbar-end">
            <div class="navbar-menu" :class="{ 'is-active': showNav }">
                <div class="navbar-start">
                    <ul class="navbar-item">
                        <nuxt-link :to="'/'">
                            <li class="cool-link is-size-6 has-text-weight-semibold">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                Inicio
                            </li>
                        </nuxt-link>
                        <nuxt-link :to="'publicaciones'">
                            <li class="cool-link is-size-6 has-text-weight-semibold" v-if="loggedIn">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                Mis publicaciones
                            </li>
                        </nuxt-link>
                        <nuxt-link :to="'proyectos'">
                            <li class="cool-link is-size-6 has-text-weight-semibold">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                Proyectos
                            </li>
                        </nuxt-link>
                        <nuxt-link :to="'organizaciones'">
                            <li class="cool-link is-size-6 has-text-weight-semibold organizaciones">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                Organizaciones
                            </li>
                        </nuxt-link>
                        <Login v-if="!loggedIn"/>
                        <Signup v-if="!loggedIn"/>
                        <Logout v-if="loggedIn" />
                    </ul>
                </div>
            </div>
        </div>
        
    </nav>
</template>

<script>
    import { auth } from '~/services/firebase'
    import Login from "~/components/Login"
    import Signup from "~/components/Signup"
    import Logout from '~/components/Logout'
    export default {
        name: 'Navbar',
        components: {
            Login,
            Signup,
            Logout
        },
        data () {
            return {
                showNav: false,
                loggedIn: false,
                user: null
            }
        },
        beforeCreate(){
            auth.onAuthStateChanged(user => {
                if(user){
                    this.loggedIn = true
                }
            })
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
    color: white;
    padding-right: 32px;
}
.logo{
    display: flex;
}
.proyectos{
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color:  #0D5599;
}
.tec{
    font-family: 'Nunito', sans-serif;
    font-size: 24px;
    font-weight: bold;
    color: white;
}
.nuxt-link-exact-active li{
    color: #0D5599;
}
li{
    display: flex;
    transition: 450ms;
}
li:hover{
    color:#0D5599;
}
@media (max-width: 1024px){
    .navbar{
        padding: 12px 24px;
    }
    .navbar-burger{
        z-index: 3;
        right: -24px;
    }
    .navbar-burger.is-active{
        position: fixed;
        top: 0;
        right: 0;
    }
    .navbar-burger span{
        color:white;
    }
    .navbar-burger.is-active span{
        color:#0D5599;
    }
    .navbar-menu{
        position: fixed;
        top: 0;
        right: 0;
        padding: 24px 48px;
        height: 100vh;
        width: 80%;
        box-shadow: 0 0 0 8px rgba(0, 0, 0, 0.1);
    }
    .cool-link{
        color: #72a1cc;
        margin-top: 24px;
    }
    .organizaciones{
        margin-bottom: 24px;
    }
    svg{
        width: 20px;
        margin-right: 8px;
    }
    .nav-overlay{
        position: fixed;
        top: 0;
        left: 0;
        width: 20%;
        height: 100vh;
        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(2px);
        visibility: hidden;
        opacity: 0;
        z-index: 1;
    }
    .nav-overlay.is-active{
        visibility: visible;
        opacity: 1;
    }
}

</style>