<template>
    <div class="student"> 
        <h2>姓名：{{name}}</h2>

        <h2>性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>

</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'StudentApp',
    data(){
        return{
            name:'zhang',
            sex:'男' ,
        }
    },
    methods:{
        sendStudentName(){
            pubsub.publish('hello','zhangjunjie')
        }
    },
    mounted() {
        
    },

}
</script>

<style lang="less" scoped>

.student{
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
   
}

</style>
