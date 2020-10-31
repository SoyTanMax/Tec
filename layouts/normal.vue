<template>
    <div>
        <Navbar />
        <Nuxt class="nuxt"/>
        <Footer/>
    </div>
</template>

<script>
    import Navbar from '~/components/Navbar2'
    import Footer from '~/components/Footer'
    export default {
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style scoped>
</style>