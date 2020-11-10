import Vue from 'vue'
import App from './App.vue'
import '@/plugin/element.js'
import store from '@/store/index'
import router from '@/router/index'
import VueVideoPlayer from 'vue-video-player'
import vueAplayer from 'vue-aplayer'
import 'video.js/dist/video-js.css'
import AudioVisual from 'vue-audio-visual'
Vue.use(AudioVisual)
Vue.use(VueVideoPlayer)
Vue.use(vueAplayer)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
