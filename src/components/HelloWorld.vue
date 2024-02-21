<script setup>
import { ref,onMounted,reactive,inject } from 'vue'
import Logo from '@/assets/vue.svg'
import { Toast } from '@capacitor/toast';
import Tombol from '@/elements/Button.vue';
import axios from 'axios'
const store = inject('store')

const formData = reactive({
  email:'',
  password:''
})
const onSubmit = async () => {
    
    store.authStore.doRegister(formData)
}

const showHelloToast = async () => {
  await Toast.show({
    text: 'Selamat Datang Guest',
    duration: 3000,
    position: 'top'
  });
};

onMounted(()=>{
  
})


</script>

<template>
<section class="h-screen">
  <div class="flex items-start justify-center h-1/3 pt-10 ">
    <main class="text-center">
      <h1 class="text-primary font-extrabold">Kelompok</h1>
      <br>
      <h2 class="font-extralight text-xl text-primary">Arisan Anggur</h2>
    </main>
  
  </div>
  <div class="flex items-center justify-center">
    <main class="text-center">
      <img width="150" class="animate-bounce" :src="Logo" />
    </main>
  </div>
  <form @submit.prevent="onSubmit">
  <!-- <div  class="flex items-center pt-4 justify-center "> -->
    <main class="w-full max-w-md mb-auto rounded-xl p-8">

      <div class="relative">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 pr-4">
          <i class="fas fa-user text-2xl pl-1 text-slate-200 "></i>
        </span>
        <input v-model="formData.email" type="text" class="w-full pl-12 pr-4 py-3 text-sm placeholder-slate-300 text-slate-600 focus:text-center focus:text-utama bg-utama border border-transparent rounded-xl focus:outline-none focus:placeholder-white focus:bg-white focus:ring-2 focus:ring-utama" placeholder="Email atau Nomor HP"/>
      </div>
      <div class="relative mt-5">
        <span class="absolute inset-y-0 left-0 flex items-center pl-3 pr-4">
          <i class="fas fa-key text-2xl pl-1 text-slate-200 "></i>
        </span>
        <input v-model="formData.password" type="password"  class="w-full pl-12 pr-4 py-3 text-sm placeholder-slate-300 text-slate-700 focus:text-center focus:text-utama bg-utama border border-transparent rounded-xl focus:outline-none focus:placeholder-white focus:bg-white focus:ring-2 focus:ring-utama" placeholder="Password"/>
      </div>
    </main>

  <!-- </div> -->
  <!-- <div class="flex items-center h-full pt-10"> -->
    <footer class="fixed h-auto bottom-30 flex justify-around w-full ">
      <Tombol type="submit" text="Daftar" class="w-2/5 d-flex justify-center py-2" color="blue"/>
      <Tombol  text="Login" class="w-2/5 d-flex justify-center py-2" color="green"/>
    </footer>
    </form>
  <!-- </div> -->
</section>
</template>
