<template>
    <nav class="flex bg-primary z-50 justify-around h-16 w-full sticky top-0">
      <div class="w-1/4">
  
      </div>
      <ul class="w-1/2 flex items-center pl-0 mr-auto lg:flex-row text-utama">
        <li class="pr-2">Test</li>
        <li>Test</li>
      </ul>
      <div class="w-auto flex item-center p-3">
        <v-switch
        v-model="themes"
        class="mr-3 "
        color="white"
        
        @change="toggleTheme"
        ></v-switch>

        <v-avatar :image="Foto" />
      </div>
    </nav>
  </template>
  
  <script setup>
  import Tombol from '@/elements/Link.vue'
  import { useTheme } from 'vuetify'
  import Foto from '@/assets/agung.png'
  import {ref} from 'vue'
  const theme = useTheme()
  const themes = ref(false)
  function toggleTheme() {
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
  }
  </script>
  