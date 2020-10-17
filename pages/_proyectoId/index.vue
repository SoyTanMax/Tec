<template>
    <div class="proyecto">
        <div class="hero">
            <div class="hero-head">
                <Navbar/>
            </div>
        </div>
        <div class="section info" :style="{background:'#edf2f7'}">
            <div class="columns">
                <div class="column is-4">
                    <div class="imagen"></div>
                </div>
                <div class="column">
                    <p class="is-size-2">{{  }}</p>
                    <p class="is-size-5">{{  }}</p>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import Navbar from '~/components/Navbar'
    import Footer from '~/components/Footer'
    export default {
        components:{
            Navbar
        }

    }
</script>

<style scoped>
.proyecto{
    font-family: 'Nunito', sans-serif;
}
.hero {
    background: #137EE9;
    padding-right: 96px;
    padding-left: 96px;
}
.info{
    height: 90vh;
    padding-right: 96px;
    padding-left: 96px;
}
.imagen{
    background-position: center;
    background-size: cover;
    border-radius: 8px 8px 0 0;
    width: 100%;
    height: 256px;
}
</style>