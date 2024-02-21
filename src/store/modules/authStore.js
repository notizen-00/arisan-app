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
        error: ''

    }),
    actions: {
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

                await Toast.show({
                    text:error.response.data.msg,
                });

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
        }


    },
    getters: {
        isLogin() {
            return this.login
        },
        getToken() {
            return this.token
        },
        getError() {
            return this.error
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