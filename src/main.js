import {
    createApp
} from 'vue'
import './style.css'
import App from '@/App.vue'
import router from '@/router';
import {
    pinia
} from './store/pinia'
import {
    useStore
} from '@/store/modules'

import 'vuetify/styles'
import {
    createVuetify
} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);


const vuetify = createVuetify({
    components,
    directives,
})

createApp(App)

    .use(vuetify)
    .use(router)
    .use(pinia)

    .provide('store', useStore())
    .mount('#app')
