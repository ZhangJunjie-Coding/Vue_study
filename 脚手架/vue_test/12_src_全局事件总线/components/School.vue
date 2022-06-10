<template>
    <div class="school">
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
    mounted() {
        // console.log('school',this)
        this.$bus.$on('hello',(data)=>{
            console.log('我是School组件，收到了数据',data) 
        })
    },
    beforeDestroy() {
        this.$bus.$off('hello')
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