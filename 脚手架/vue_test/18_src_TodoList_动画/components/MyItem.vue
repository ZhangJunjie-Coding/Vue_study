<template>
<transition name="todo" appear>
  <li>
    <label>

      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
      <!-- 如下代码也能实现功能，但是不推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input v-show="todo.isEdit"
       type="text" 
       :value="todo.title" 
       @blur="handleBlur(todo,$event)"
       ref="inputTitle"
       >

    </label>

    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>

  </li>
</transition>

</template>

<script>
import PubSub from 'pubsub-js';
export default {
  name: "MyItem",
  //声明接收todo对象
  props:['todo'],
  mounted() {
    console.log(this.todo)
  },
  methods: {

    //勾选
    handleCheck(id){
     //通知App组件将对应的todo对象的done的值取反
      // this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },

    //删除
    handleDelete(id){
      if(confirm("确定删除吗?"))
      // this.deleteTodo(id)
      // this.$bus.$emit('deleteTodo',id)
      PubSub.publish('deleteTodo',id)
    },

    //编辑
    handleEdit(todo){
      // todo.isEdit = true
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit = true
      }else{
        console.log('todo没有isEdit')
        this.$set(todo,'isEdit',true)
      }
      //不能直接这样写，不会生效，因为此时input框还没有被渲染，只有此回调函数
      //的语句执行完，Vue才会重新解析模板生成DOM，在Vue重新生成DOM时，下面已经被执行过了
      // this.$refs.inputTitle.focus()

      //nextTick指定的回调函数会在DOM节点更新完毕之后再执行
      this.$nextTick(()=>{
        this.$refs.inputTitle.focus()
      })
      

    },
    handleBlur(todo,e){
      todo.isEdit = false
      if(!e.target.value.trim())return alert('输入不能为空')
     
      this.$bus.$emit('updateTodo',todo.id,e.target.value)

    }
  
    
  },
};
</script>


<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #ddd ;
}

li:hover button{
  display: block;
}

.todo-enter-active{
  animation: zhang 0.5s linear;
}
.todo-leave-active{
  animation: zhang 0.5s linear reverse;
}
@keyframes zhang {
  from{
    transform: translateX(-100%);
  }
  to{
    transform: translateX(0px);
  }
  
}
</style>