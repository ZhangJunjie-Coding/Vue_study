
<template>
    <div class="container">

      <Category title="美食">
        <img slot="center" src="https://v5.ax1x.com/imgchr.404.png"/>
        <a slot="footer" href="http://project.zhangjunjiejie.xyz">更多美食</a>
      </Category>
      <Category title="游戏">
        <ul slot="center">
          <li v-for="(item,index) in games" :key="index">{{item}}</li>
        </ul>
        
        <a slot="footer" href="http://project.zhangjunjiejie.xyz">单击游戏</a>
        <a slot="footer" href="http://project.zhangjunjiejie.xyz">网络游戏</a>
      </Category>
      <Category  title="电影">
        <video slot="center" controls src="https://www.bilibili.com/video/BV1CT411V79S?share_source=copy_web"> </video>
        <!-- <template slot="footer"> -->
          <template v-slot:footer>
        <div class="foot">
          <a href="http://project.zhangjunjiejie.xyz">经典</a>
          <a href="http://project.zhangjunjiejie.xyz">热门</a>
          <a href="http://project.zhangjunjiejie.xyz">推荐</a>
        </div>
        <h4>欢迎前来观影</h4>
        </template>
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
    .container,.foot{
      display: flex;
      justify-content: space-around;
    }
    a{
      margin-left: 8px;
    }
    h4{
      text-align: center;
    }
    
</style>

