
<template>
  <div class="container">
    <Category title="游戏">
      <template scope="data">
        <ul>
          <li v-for="(item, index) in data.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>

    <Category title="游戏">
      <!-- <template scope="data"> -->
        <!-- 还可以使用解构赋值的方式 -->
      <template scope="{games}">
      <ol >
        <li style="color: red;" v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ol>
      </template>
    </Category>

    <Category title="游戏">
      <!-- slot-scope是新的API，功能和scope一样 -->
      <template slot-scope="{games}">
      
      <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>


<script>
import Category from "./components/Category.vue";

export default {
  name: "App",
  components: {
    Category,
  },
};
</script>

<style scoped>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
a {
  margin-left: 8px;
}
h4 {
  text-align: center;
}
</style>

