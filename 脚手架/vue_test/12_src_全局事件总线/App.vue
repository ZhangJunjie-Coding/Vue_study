<template>

<div class="app">
  
    <h1>{{msg}}</h1>
    <SchoolApp></SchoolApp>
    <studentApp></studentApp>

</div>

</template>

<script>

import SchoolApp from './components/School.vue'
import StudentApp from './components/Student.vue'

export default {

    name: 'App',

    components:{

    SchoolApp,
    StudentApp

},
    data(){
        return {
            msg: '你好啊！',
        }
    },
} 
</script>

<style scoped>

    .app{
        background-color: gray;
        padding: 5px;
    }

</style>
