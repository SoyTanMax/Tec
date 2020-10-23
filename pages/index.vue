<template>
  <div class="Home">
    <Hero />
    <How />
    <Projects />
    <Register />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import How from '~/components/HowItWorks'
import Projects from '~/components/Projects'
import Register from '~/components/Register'
import Footer from "~/components/Footer"

export default {
  components: {
    Hero,
    How,
    Projects,
    Register,
    Footer
  }
}
</script>

<style scoped>

</style>

