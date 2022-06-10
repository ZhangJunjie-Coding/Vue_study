<template>
  <ul class="todo-main">
    <!-- 这里todo前不写 : 那么"todoObj"就是字符串 写了 : Vue自动把"todoObj"转换为表达式-->
    <MyItem v-for="todoObj in todos" 
    :key="todoObj.id" 
    :todo="todoObj"
    ></MyItem>
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {

  name: "MyList",

  components: {
    MyItem,
  },

  props:['todos'],
  
  
  }

</script>


<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}


</style>