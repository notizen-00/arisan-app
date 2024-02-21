<script setup>
import { ref,onMounted,reactive,inject } from 'vue'
import Logo from '@/assets/vue.svg'
import FormLogin from '@/components/form/Login.vue'
import FormDaftar from '@/components/form/Daftar.vue'
import { storeToRefs } from 'pinia';
const store = inject('store')

const {getKomponen,getToken} = storeToRefs(store.authStore)


onMounted(()=>{
  
})


</script>

<template>
<div class="h-screen overflow-auto"  style="background:url('./src/assets/bg.png'); background-position: center;">
  <div class="flex items-start justify-center pt-10 ">
    <main class="text-center">
      <h1 class="text-primary text-2xl font-extrabold">Kelompok</h1>
      <br>
      <h2 class="font-extralight text-2xl text-primary">Arisan Anggur</h2>
    </main>
  
  </div>
  <div class="flex items-start justify-center pt-10">
    <main class="text-center">
      <img width="150" class="animate-bounce" :src="Logo" />
    </main>
  </div>
  <component :is="getKomponen ? FormLogin : FormDaftar"/>

</div>
</template>
