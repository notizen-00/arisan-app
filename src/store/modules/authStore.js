import {
    defineStore
} from 'pinia'
import axios from 'axios';
import router from '@/router';
import { Preferences } from '@capacitor/preferences';
import { Toast } from '@capacitor/toast';


export const useAuthStores = defineStore('authStore', {
    state: () => ({
        login: false,
        token: '',
        username: '',
        userId: '',
        apiUrl: import.meta.env.VITE_APP_API_URL,
        nocoUrl: import.meta.env.VITE_APP_NOCO_URL,
        error: '',
        komponen:true,
        user:[]

    }),
    actions: {
        async fetchUser(){
            const response = await axios.get(this.nocoUrl + 'api/v1/auth/user/me', {
                headers: {
                    'xc-auth': this.token
                }
            });

            this.user = response.data
            
        },
        async doLogin(data) {
            try {
                
                const response = await axios.post(this.nocoUrl + 'api/v1/auth/user/signin', {
                    email: data.email,
                    password: data.password,
                });
                if (response.status === 200) {
                    // alert('Berhasil login');

                    await Preferences.set({
                        key: 'token',
                        value: response.data.token,
                    });

                    this.login = true;
                    this.token = response.data.token;
                    await Toast.show({
                        text: 'Anda Berhasil Signup',
                        duration: 3000,
                        position: 'top'
                    });
                    router.push('/')
                } else {
                    await Toast.show({
                        text: 'Gagal Signup',
                        duration: 3000,
                        position: 'top'
                    });
                }
            } catch (error) {
                // alert('Terjadi kesalahan. Periksa kembali email dan password Anda.');
                console.error(error.response.data.msg);

                if(error.response.data.msg == 'Invalid credentials') {
                    await Toast.show({
                        text:'Email dan password anda salah !',
                        duration:1000,
                    });
                }

                this.error = 'Terjadi Kesalahan . Periksa kembali email dan password Anda';

            }
        },
        async doRegister(data) {
            try {
                
                const response = await axios.post(this.nocoUrl + 'api/v1/auth/user/signup', {
                    email: data.email,
                    password: data.password,
                });
                if (response.status === 200) {

                    await Preferences.set({
                        key: 'token',
                        value: response.data.token,
                    });

                    this.login = true;
                    this.token = response.data.token;
                    await Toast.show({
                        text: 'Anda Berhasil Signup',
                        duration: 3000,
                        position: 'top'
                    });
                    router.push('/')
                } else {
                    await Toast.show({
                        text: 'Gagal Signup',
                        duration: 3000,
                        position: 'top'
                    });
                }
            } catch (error) {
                // alert('Terjadi kesalahan. Periksa kembali email dan password Anda.');
                console.error(error.response.data.msg);

                Toast.show({
                    text:error.response.data.msg,
                });

                this.error = 'Terjadi Kesalahan . Periksa kembali email dan password Anda';

            }
        },
        async doLogout() {
            try {
                const response = await axios.post(this.nocoUrl + 'api/v1/auth/user/signout', null, {
                    headers: {
                        'xc-auth': this.token
                    }
                });

                if (response.status === 200) {
                    alert('Berhasil logout');
                    this.login = false;
                    this.token = '';
                    router.push('/login')

                } else {
                    alert('Logout gagal');
                }
            } catch (error) {
                console.error(error);
                alert('Logout gagals')

            }
        },
        toggleKomponen(){
            this.komponen = !this.komponen;
        }


    },
    getters: {
        isLogin() {
            return this.login
        },
        getKomponen(){
            return this.komponen
        },
        getToken() {
            return this.token
        },
        getError() {
            return this.error
        },
        getUser(){
            return this.user
        },
        getUserId() {
            return this.userId
        },
        getUsername() {
            return this.username
        }

    },
    persist: true
})