<template>
    <div>
        <h1>{{msg}}</h1>
    
        <h2 @click="showName">姓名：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
        <h2>{{x}}</h2>
        <h2>{{y}}</h2>
   

    </div>
</template>
<!-- 
    mixin(混入)
        功能：可以把多个组件共用的配置提取成一个混入对象
        使用方式：
            第一步定义混合，例如：
                {
                    data(){....},
                    methods:{....}
                    .....
                }
            第二步使用混入，例如：
                （1）.全局混入：Vue.mixin(xxx)
                (2).局部混入：mixins:['xxx']



 -->
<script>

import {hunhe,hunhe2} from '../mixin.js'
export default {
    name:'StudentApp',
    data(){
        return{
            msg:'我一个学生',
            name:'zhang',
            sex:'男'
         
           
        }
    }, 
    mixins:[hunhe,hunhe2]

}
</script>
