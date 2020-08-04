<template>
    <nav class="navbar is-transparent">
        <div class="navbar-brand">
            <div class="navbar-item">
                <nuxt-child :to="'/'">
                    <div class="has-text-white has-text-weight-bold is-size-4">Proyectos Tec</div>
                </nuxt-child>
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
                <nuxt-child :to="'/'">
                    <p class="cool-link has-text-white is-size-5">Inicio</p>
                </nuxt-child>
                <nuxt-child to='/catalogo'>
                    <p class="cool-link has-text-white is-size-5">Catálogo</p>
                </nuxt-child>
                <nuxt-child :to="''">
                    <li class="cool-link has-text-white is-size-5">Contacto</li>
                </nuxt-child>
                <nuxt-child :to="''">
                    <li class="has-text-white is-size-5">Ayuda</li>
                </nuxt-child>
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
    padding: 28px 0;
}
p::after{
    content:'';
    display:block;
    width: 0;
    height: 2px;
    background: white;
    transition: width .3s;
    border-radius: 1px;
}
p:hover:after{
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