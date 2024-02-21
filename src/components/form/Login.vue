<script setup>
    import {
        ref,
        onMounted,
        reactive,
        inject
    } from 'vue'
    import Logo from '@/assets/vue.svg'
    import {
        Toast
    } from '@capacitor/toast';
    import Tombol from '@/elements/Button.vue';
    import Field from '@/elements/Field.vue';
    const store = inject('store')

    const formData = reactive({
        email: '',
        password: ''
    })
    const onSubmit = async () => {

        store.authStore.doLogin(formData)
    }

    onMounted(() => {

    })
</script>

<template>

    <form @submit.prevent="onSubmit" class="mt-15">
        <main class="relative w-4/5 max-w-md mx-auto mb-auto rounded-xl pt-10 pb-15 px-5 bg-white">
            
            <Field v-model="formData.email" tipe="email" iconClass="fas fa-user text-2xl pl-1 text-slate-200 "
                placeholder="Masukan Email atau Nomor Hp" />
            <Field v-model="formData.password" tipe="password" class="pt-5" iconClass="fas fa-key text-2xl pl-1 pt-5 text-slate-200" 
                placeholder="Password"/>

            <div @click="store.authStore.toggleKomponen()" class="absolute mx-auto text-sm bottom-2 animate-bounce text-slate-400">
                Daftar akun ? 
            </div>
        </main>

        <footer class="sticky bottom-2  flex justify-center w-full mt-10">
            <!-- <Tombol type="submit" text="Daftar"
                class="w-2/5 d-flex mr-2 justify-center py-2 disabled:bg-opacity-20 disabled:text-gray" color="blue" /> -->
            <Tombol text="Login" class="w-full mx-4 d-flex justify-center py-2 active:ring-4 active:ring-green-100 shadow-xl ring-4 ring-green-400 shadow-teal-300" color="green" />
        </footer>
    </form>

</template>