<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'SchoolApp',
    data(){
        return{
            name:'蚌埠学院aaaa',
            address:'曹山路'
        }
    },
    mounted() {
     /*   this.pubId = pubsub.subscribe('hello',function(messageName,data){
            //这里的this是undefined 
            console.log(this)
            console.log('有人发布了hello消息，hello消息的回调执行了',data)
        }) */

        this.pubId = pubsub.subscribe('hello',(messageName,data)=>{
            console.log(this)
            console.log('有人发布了hello消息，hello消息的回调执行了',data)

        })

        
    },
    beforeDestroy() {
      pubsub.unsubscribe(this.pubId) 
    }
   

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