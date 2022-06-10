//引入Vue
import Vue from "vue";
//引入App
import App from "./App.vue"
//引入插件,用来发送ajax请求
import vueResource from 'vue-resource'

//引入store
import store from './store/index'



//关闭Vue的生产提示
Vue.config.productionTip = false
Vue.use(vueResource)


//创建vm
new Vue({
    el:"#root",
    store:store,
    render: h =>h(App),
    beforeCreate(){
        Vue.prototype.$bus = this
    }
})
