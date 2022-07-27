import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'video.js/dist/video-js.css'
import 'tw-elements'
import VuePlyr from 'vue-plyr'
import 'vue-plyr/dist/vue-plyr.css'
import 'media-chrome'

createApp(App)
    .use(VuePlyr, {
        plyr: {}
    })
    .mount('#app')
