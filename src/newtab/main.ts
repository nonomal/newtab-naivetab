import '../styles/index.ts'
import { createApp } from 'vue'
import i18n from '@/lib/i18n'
import lazyImage from '@/directive/lazyImage'
import App from './App.vue'
import 'dayjs/locale/zh-cn.js'

const app = createApp(App)

app.use(i18n)
app.use(lazyImage)
app.mount('#app')
