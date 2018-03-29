import Vue from 'vue'


import App from './App' //根组件
import router from './router'//路由对象


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  //等价于render
  components: {
  	App:App//声明子组件
  },
  //作为Vue实例的模板，模板会替换在el作用的标签
  template: '<App/>'
})
