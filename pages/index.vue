<template>
  <div class="Home">
    <Hero class="hero"/>
    <Projects />
    <Register />
    <Orgs />
    <Footer />
  </div>
</template>

<script>
import Hero from '~/components/Hero'
import How from '~/components/HowItWorks'
import Projects from '~/components/Projects'
import Register from '~/components/Register'
import Orgs from '~/components/Orgs'
import Footer from "~/components/Footer"

export default {
  components: {
    Hero,
    How,
    Projects,
    Register,
    Orgs,
    Footer
  }
}
</script>

<style scoped>
</style>

