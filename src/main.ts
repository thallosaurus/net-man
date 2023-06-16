import { createApp } from 'vue'
import { key, store } from './store'
import './style.css'
import App from './App.vue'

const app = createApp(App)
// App.use(store);
// let store = useStore();
app.use(store, key);
app.mount('#app')
