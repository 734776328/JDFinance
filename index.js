import vue from 'vue'
import app from './src/app.vue'
import router from './src/router/router'
import './src/static/css/iconfont.css'

/*样式*/
import './src/styles/index.css'
import './src/styles/index.less'

/*工具类*/
import './src/utils/rem.js'

new vue({
  el: '#app',
  router,
  render: h => h(app)
})