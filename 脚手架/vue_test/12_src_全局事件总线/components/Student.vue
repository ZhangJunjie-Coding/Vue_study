<template>
    <div class="student"> 
        <h2>姓名：{{name}}</h2>

        <h2>性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给School组件</button>
    </div>

</template>

<script>
export default {
    name:'StudentApp',
    data(){
        return{
            name:'zhang',
            sex:'男' ,
        }
    },
    mounted() {
        // console.log('Student',this.x)
    },
    methods:{
        sendStudentName(){
            this.$bus.$emit('hello',666)
        }
    }

}
</script>

<style lang="less" scoped>

.student{
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
   
}

</style>
