<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolName">点我获取学校名称</button>
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
    props:['getSchoolName'],
    methods: {
        sendSchoolName(){
            this.getSchoolName(this.name);
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
    .school{
        background-color: skyblue;
        padding: 5px;
        margin-top: 30px;
    }
</style>