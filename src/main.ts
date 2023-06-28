import '@jsonforms/vue-vanilla/vanilla.css';
import "vue3-json-viewer/dist/index.css";

//import { JsonViewer } from "vue3-json-viewer"
//const JsonViewer = require("vue3-json-viewer");

//import *  as JsonViewer from './src/index'

import App from './App.vue'
import { createApp } from 'vue'

//const app = createApp(App);
//app.use(JsonViewer);
createApp(App).mount('#app')
