//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue"

//关闭Vue的生产提示
Vue.config.productionTip = false

// window.x={a:1,b:2}

const Demo = Vue.extend({})
const d = new Demo()

// Vue.prototype.x = d

// console.log(Vue.prototype)

//创建vm
new Vue({
    el:"#root",

    render: h =>h(App),

    beforeCreate(){
  
        // Vue.prototype.x = this  
        Vue.prototype.$bus = this       //安装全局事件总线
    }

})