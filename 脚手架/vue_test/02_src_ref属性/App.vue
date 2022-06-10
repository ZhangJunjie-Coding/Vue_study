<template>

<div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
<SchoolApp ref="school"></SchoolApp>
<SchoolApp></SchoolApp>
<SchoolApp></SchoolApp>
</div>
    
</template>

<script>
import SchoolApp from './components/School.vue'
export default {
    name: 'App',
    components:{
    SchoolApp,
},
    data(){
        return{
            msg:"Vue"
        }
    },
    methods: {
        showDOM(){
            console.log(this.$refs.title)       //真实DOM元素
            console.log(this.$refs.btn)     //真实DOM元素
            console.log(this.$refs.school)      //School组件的实例对象（vc)
        }
    },

}

</script>
