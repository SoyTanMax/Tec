<template>
    <button class="button logout-button" @click="logout">
        <svg class="w-6 h-6" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
        Cerrar sesión
    </button>
</template>

<script>
    import { auth } from '~/services/firebase'
    export default {
        name: 'Logout',
        methods: {
            logout(){
                auth.signOut().then(()=>{
                    this.$router.push('/')
                })
            }
        }
    }
</script>

<style scoped>
.logout-button{
    border: none;
    background: hsl(209, 75%, 45%);
    font-family: 'Manrope', sans-serif;
    border-radius: 8px;
    font-size: 14px;
    color: white;
    padding: 18px;
    font-weight: 700;
}
svg{
    width: 20px;
    margin-right: 8px;
}
</style>