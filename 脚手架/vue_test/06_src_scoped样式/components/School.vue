<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
export default {
    name:'SchoolApp',
    data(){
        return{
            name:'蚌埠学院aaaa',
            address:'曹山路'
        }
    },
}
</script>
<!-- 
    scoped样式
        作用：让样式在局部生效，防止冲突
        写法：<style scoped>
 -->
<style scoped>
    .demo{
        background-color: skyblue;
    }
</style>