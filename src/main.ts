import '@jsonforms/vue-vanilla/vanilla.css';
import "vue3-json-viewer/dist/index.css";


import App from './App.vue'
import { createApp } from 'vue'

const app = createApp(App);
//app.use(JsonViewer);
createApp(App).mount('#app')
