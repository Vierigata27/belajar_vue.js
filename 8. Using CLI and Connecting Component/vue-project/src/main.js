import { createApp } from 'vue'
import App from './App.vue'
import Header from './components/Generals/appHeader.vue'
import Footer from './components/Generals/appFooter.vue'

const app = createApp(App)
app.component('app-header', Header)
app.component('app-footer', Footer)
app.mount('#app')
