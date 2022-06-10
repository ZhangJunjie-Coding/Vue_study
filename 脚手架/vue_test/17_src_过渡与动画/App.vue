<!-- 
  总结ToList案例
  1.组件化编码流程：
    （1）。拆分静态组件：组件要按照功能点拆分，命名不要与html元素冲突
    （2）。实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用
        1）一个组件在用：放在组件自身即可
        2）一些组件在用：放在它们共同的父组件上（状态提升）
    （3）实现交互：从绑定事件开始。

  2.props适用于：
      （1）父组件===>子组件 通信
      （2）子组件===>父组件 通信（要求父先给子一个函数）
 3.使用v-model时要切记：v-model绑定的值不能是props传过来的值，因为props是不可修改的！

 4.props传过来的若是对象类型的值，修改对象中的属性时Vue不会报错，但不推荐这样做



 -->
<template>
  <div id="root">
      <Test></Test>
      <Test2></Test2>
      <Test3></Test3>
  </div>
</template>

<script>

import Test from './components/Test'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
export default {
  name: "App",

  components: {
    Test,
    Test2,
    Test3
  },

};
</script>

<style>

body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: skyblue;
  border: 1px solid skyblue;
  margin-right: 5px;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>