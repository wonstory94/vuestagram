import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter;


// 자주 쓰는 라이브러리 그런거 있으면 여기다가 다 등록
// ex)
// app.config.globalProperties.axios = axios;
// 그러면 이제 vue파일에서 import axios 해올 필요없이
// this.axios로 사용가능

app.mount('#app')