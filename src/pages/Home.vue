<template>
    <Navbar/>
    <main class="h-screen w-1/2 my-40 mx-auto items-center justify-center">

        
        <p class="flex">{{getUser.email}}</p>
        <br>
        <Tombol text="Logout" @click.prevent="store.authStore.doLogout()" iconClass="fas fa-right-from-bracket pr-2 pt-1" class="text-white"></Tombol>
    </main>
    
</template>

<script setup>
    import {inject,onMounted} from 'vue'
    import Navbar from '@/components/navbar/navbar.vue'
    import {storeToRefs} from 'pinia'
    import Tombol from '@/elements/Link.vue'
    const store = inject('store')

    const {getUser,getToken} = storeToRefs(store.authStore)

    onMounted(()=>{
        store.authStore.fetchUser();
    })
</script>