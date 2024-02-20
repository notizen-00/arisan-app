// src/store/modules/index.js

import {
    useAuthStores
} from './authStore'


// Impor modul-modul lain jika ada

export function useStore() {
    return {
        authStore: useAuthStores(),

        // Masukkan modul-modul lain di sini jika ada
    }
}