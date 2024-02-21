<template>
    Selamat Anda Berhasil Login 

    <Tombol text="Logout" @click="store.authStore.doLogout()"/>
    
</template>

<script setup>
    import {inject} from 'vue'
    import Tombol from '@/elements/Button.vue'
    const store = inject('store')
</script>