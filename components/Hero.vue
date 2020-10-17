<template>
    <div class="hero">
      <div class="hero-body">
            <div class="layer"></div>
            <p class="is-size-2 has-text-weight-bold has-text-centered has-text-white">Hay mil maneras de ayudar.</p>
            <SearchBar />
      </div>
    </div>
</template>

<script>
    import SearchBar from "~/components/SearchBar"
    export default {
        name: 'Hero',
        components: {
            SearchBar
        }
    }
</script>

<style scoped>
.hero{
  position: relative;
  padding-right: 96px;
  padding-left: 96px;
  background:
    url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
    background-size: cover;
    background-position: center;
  font-family: 'Nunito', sans-serif;
  height: 590px;
}
.hero-body{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.layer{
    position: absolute;
    background-color:#74a6d8;
    width: 100%;
    height: 100%;
    opacity: 0.4;
}
.is-size-2 {
  position: relative;
  margin-bottom: 42px;
}
.tec{
  position: absolute;
  opacity: 0.4;
  bottom: 24px;
  left: -5%;
  z-index: 0;
}
</style>