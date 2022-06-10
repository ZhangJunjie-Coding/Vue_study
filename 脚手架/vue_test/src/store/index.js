//该文件用于创建Vuex中最为核心的store

//引入Vuex
import Vuex from 'vuex'

//引入Vue
import Vue from 'vue'

//应用Vuex插件
Vue.use(Vuex)
//准备actions--用于响应组件中的动作
const actions = {
/*     jia:function(context,value){
        // console.log('actions中的jia被调用了',context,value)
        //这里jia可大写可小写，建议大写
        context.commit('JIA',value)
    },
    jian:function(context,value){
        context.commit('JIAN',value)
    }, */
    jiaOdd:function(context,value){
        if(context.state.sum%2)
            context.commit('JIA',value)
    },
    jiaWait:function(context,value){
        
        setTimeout(function(){
            context.commit('JIA',value)
        },500)

    }




}

//准备mutations--用于操作数据（state）
const mutations = {

    JIA:function(state,value){
        // console.log('mutations中的JIA被调用了',state,value)
        state.sum += value;
    },
    JIAN:function(state,value){
        state.sum-=value
    }

}

//准备state--用于存储数据
const state = {
    sum:0,  //当前的和
}

//创建并暴露store
export default new Vuex.Store({
    actions: actions,   //或者直接写actions也行（仅适用于对象中属性和值重名的情况才能简写）
    mutations: mutations,
    state: state,

})

