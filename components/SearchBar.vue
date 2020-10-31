<template>
    <form class="searchBar" @submit.prevent="">
        <div class="field">
            <div class="control">
                <input v-model="text" type="text" placeholder="Buscar proyectos por nombre, categoría..." class="input"/>
                <button class="button">
                    <i class="fas fa-search is-size-4"></i>
                    <p class="is-size-5">Buscar</p>
                </button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'SearchBar',
    data() {
        return {
            text: ''
        }
    },
    head() {
        return{
            script: [
                {
                    src:'https://use.fontawesome.com/releases/v5.3.1/js/all.js'
                }
            ]
        }
    }
}
</script>

<style scoped>

.input{
    height: 64px;
    padding: 24px;
    min-width: 360px;
    margin-right: 0;
    border-radius: 12px 0px 0px 12px;
    font-family: 'Manrope', sans-serif;
    box-shadow: none;
    margin-top: 24px;
    background: #f4fbff;
}
.button{
    height: 64px;
    min-width: 142px;
    border: none;
    color: white;
    background: #084F95;
    border-radius: 0px 12px 12px 0px;
    margin-left: 0;
    font-weight: bold;
    padding: 16px 32px;
    font-family: 'Manrope', sans-serif;
    margin-top: 24px;
}
.control{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
p{
    margin-left: 8px;
}
@media screen and (max-width: 1024px) {
    .input{
        height: 24px;
        padding: 24px;
        min-width: 160px;
        border-radius: 12px 0px 0px 12px;
    }
    .button{
        height: 48px;
        border: none;
        color: white;
        background: #084F95;
        border-radius: 0px 12px 12px 0px;
        padding: 8px 16px;
        font-family: 'Nunito', sans-serif;
    }
}
</style>