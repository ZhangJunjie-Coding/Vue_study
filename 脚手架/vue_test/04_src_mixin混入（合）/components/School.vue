<template>
    <div>
        <h1>{{msg}}</h1>
    
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <h2>{{x}}</h2>
        <h2>{{y}}</h2>
   

    </div>
</template>

<script>
import {hunhe,hunhe2} from '../mixin.js'

export default {
    name:'SchoolApp',
    data(){
        return{
            msg:'我一个学生',
            name:'蚌埠学院',
            address:'曹山路'
         
           
        }
    }, 
    mixins:[hunhe,hunhe2]


}
</script>
