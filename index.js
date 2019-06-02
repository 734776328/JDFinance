import vue from 'vue'
import app from './src/app.vue'
new vue({
  el: '#app',
  render: h => h(app)
})