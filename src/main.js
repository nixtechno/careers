import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

const savedTheme = document.cookie
  .split('; ')
  .find((row) => row.startsWith('casec_theme='))
  ?.split('=')[1]

if (savedTheme === 'dark') {
  document.documentElement.classList.add('dark')
}

createApp(App).mount('#app')
