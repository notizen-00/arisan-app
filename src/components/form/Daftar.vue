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
        nama:'',
        alamat:'',
        no_hp:'',
        email: '',
        password: '',
        
    })
    const onSubmit = async () => {

        store.authStore.doRegister(formData)
    }
    onMounted(() => {

    })
</script>

<template>

    <form @submit.prevent="onSubmit">
        <main class="relative w-4/5 max-w-md mx-auto mb-auto rounded-xl pt-10 pb-15 px-5 bg-white">
            {{ formData.email }}
            <Field v-model="formData.nama" tipe="text" iconClass="fas fa-user text-2xl pl-1 text-slate-200 "
                placeholder="Nama Lengkap Anda" />
            <Field v-model="formData.alamat" tipe="text" class="mt-2" iconClass="fas fa-location text-2xl pl-1 text-slate-200 "
                placeholder="Alamat rumah Anda" />
                <Field v-model="formData.no_hp" tipe="number" class="mt-2" iconClass="fas fa-phone text-2xl pl-1 text-slate-200 "
                placeholder="Nomor HP Anda/Whatsapp" />
            <Field v-model="formData.email" tipe="email" required class="mt-2" iconClass="fas fa-envelope text-2xl pl-1 text-slate-200 "
                placeholder="Masukan Email yang valid" />
            <Field v-model="formData.password" tipe="password" class="mt-2"
                iconClass="fas fa-key text-2xl pl-1  text-slate-200" placeholder="Isikan Password" />

                <div @click="store.authStore.toggleKomponen()" class="absolute mx-auto text-sm bottom-2 animate-bounce text-slate-400">
                    Sudah punya akun ? 
                </div>
        </main>

        <footer class="sticky bottom-2 overflow-visible flex justify-center w-full mt-5">
            <Tombol type="submit" text="Daftar"
                class="w-full  bottom-0 mx-4 d-flex justify-center py-2 active:ring-4 active:ring-green-100 shadow-xl ring-4 ring-blue-400 shadow-indigo-300" color="blue" />
            <!-- <Tombol text="Login" class="w-2/5 d-flex justify-center py-2" color="green" /> -->
        </footer>
    </form>

</template>