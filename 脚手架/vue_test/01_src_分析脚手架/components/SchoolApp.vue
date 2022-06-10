<template>

<!-- //组件的结构 -->
<div class="demo">
    <h2>学校名称:{{SchoolName}}</h2>
    <h2>学校地址:{{Address}}</h2>
    <button @click="ShowName">点我提示学校名</button>
</div>
    

</template>

<script>
    // 组件交互相关的代码（数据、方法等等）
    export default {
        name: 'SchoolApp',
        data(){
            return {
                SchoolName: "蚌埠学院",
                Address: "龙子湖区"
            }
        },methods: {
            ShowName(){
                alert(this.SchoolName)
            }
        },
    }

</script>

<style>
    /* 组件的样式 */
   .demo{
      background-color: orange; 
   } 
</style>