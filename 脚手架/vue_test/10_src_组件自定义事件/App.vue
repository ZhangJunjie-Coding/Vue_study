<template>
<div class="app">
    <!-- 
        





     -->
    <h1>{{msg}},学生的姓名是:{{studentName}}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据  -->
    <SchoolApp :getSchoolName="getSchoolName"></SchoolApp>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
    <!-- <StudentApp v-on:zhang="getStudentName"></StudentApp> -->
    <!-- <StudentApp @zhang="getStudentName" @demo="m1"></StudentApp> -->



    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref) -->
    <StudentApp ref="student" @click.native="show"/>
    

</div>
    
</template>

<script>

import SchoolApp from './components/School.vue'
import StudentApp from './components/Student.vue'
import Student from './components/Student.vue'
export default {

    name: 'App',
    components:{
    SchoolApp,
    StudentApp,
    Student
},
    data(){
        return {
            msg: '你好啊！',
            studentName: ''
        }
    },
    methods: {
        getSchoolName(name){
            console.log("App收到了学校名：",name)
            
        },
     /*     getStudentName(value,...params){
            console.log('App收到了学生名',value,params)
            this.studentName = value
        },  */
        m1(){
            console.log('demo事件被触发了！')
        },
        show(){
            alert(123)
        }
    },
    mounted() {
        /* setTimeout(()=>{
        this.$refs.student.$on('zhang',this.getStudentName)

        },3000) */

        // this.$refs.student.$on('zhang',this.getStudentName)  //绑定自定义事件

        
        this.$refs.student.$on('zhang',(name,...params)=>{
            console.log('App收到了学生名: ',name,params)
            console.log(this)
            this.studentName = name;
        }) 


        //只生效一次
        // this.$refs.student.$once('zhang',this.getStudentName)    //绑定自定义事件（一次性）

        
    },

} 
</script>

<style scoped>

    .app{
        background-color: gray;
        padding: 5px;
    }

</style>
