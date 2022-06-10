
<template>
    <div class="container">

      <Category title="美食">
        <img src="https://v5.ax1x.com/imgchr.404.png"/>
      </Category>
      <Category title="游戏">
        <ul>
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
      </Category>
      <Category title="电影">
        <video controls src="https://www.bilibili.com/video/BV1CT411V79S?share_source=copy_web" 
        scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </video>
      </Category>

    </div>
</template>


<script>
import Category from './components/Category.vue'

export default {
    name: "App",
    components:{
      Category
    },
    data() {
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色警戒','穿越火线','劲团舞','超级玛丽'],
        films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']
      }
    },
};
</script>

<style scoped>
    .container{
      display: flex;
      justify-content: space-around;
    }

    
</style>

