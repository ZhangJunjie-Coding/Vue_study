<template>
    <div class="student"> 
        <h2>姓名：{{name}}</h2>

        <h2>性别：{{sex}}</h2>

        <h2>当前求和为：{{number}}</h2>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑zhang事件</button>
        <button @click="death">销毁当前Student组件的实例(vc)</button>
        <button @click="add">点我nubmer++</button>

    </div>

</template>

<script>
export default {
    name:'StudentApp',
    data(){
        return{
            name:'zhang',
            sex:'男' ,
            number: 0
        }
    },
    methods: {
        sendStudentName(){
            //触发Student组件实例身上的zhang事件
            this.$emit('zhang',this.name,1,24,4)
            // this.$emit('demo')
            this.$emit('click')
        },
        unbind(){
            this.$off('zhang')      //解绑一个自定义事件
            // this.$off(['zhang','demo']) //解绑多个自定义事件
            // this.$off() //解绑所有自定义事件
        },
        death(){
            this.$destroy() //销毁了当前Student组件的实例,销毁后所有Student实例自定义事件全都不奏效
        },
        add(){
            console.log('add被调用了')
            this.number++;
        }
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
