<template>
    <div class="section is-medium">
        <p class="has-text-centered has-text-white">Footer</p>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.section{
    position: relative;
    background: #06325E;
    padding-right: 96px;
    padding-left: 96px;
}
@media screen and (max-width: 769px) {
    .section{
      padding-right: 24px;
      padding-left: 24px;
    }
}
</style>