<template>
    <div>
        <h1>{{msg}}</h1>
    
        <h2>姓名：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
        <!-- <h2>年龄：{{age*1+1}}</h2> -->
        <h2>年龄：{{myAge+1}}</h2>
        <button @click="updateAge">点我更改年龄</button>
        

    </div>
</template>

<script>
//配置项props
/* 
功能：让组件接收外部传过来的数据
    (1).传递数据：
        <Demo name="xxx"/>
    (2).接收数据：
        第一种方式（只接收）：
            props:['name']
        第二种方式（限制类型）：
        props:{
            name:String
        }
            
        第三种方式（限制类型、限制必要性、指定默认值）：
        props:{
        name:{
            type:String,    //name的类型是字符串
            required:true   //name是必要的
        },
        age:{
            type:Number,
            default: 99 //默认值
        },
        sex:{
            type:String,
            required:true
        }
    }


    备注：props是只读的，Vue底层会监测你对props的修改，如果进行了修改，就会发出警告，
    若业务需求确实需要修改，那么请复制props的内容到data中一份，然后去修改data中
    的数据。

*/

export default {
    name:'StudentApp',
    data(){
        console.log(this)
        return{
            msg:'我一个学生',
            myAge: this.age
           
        }
    }, 
     // 简单声明接收
    props:['name','sex','age'], 
  
    //接收的同时对数据进行类型限制
/*     props:{
        name:String,
        age:Number,
        sex:String
    } */


    //接收的
/*     props:{
        name:{
            type:String,    //name的类型是字符串
            required:true   //name是必要的
        },
        age:{
            type:Number,
            default: 99 //默认值
        },
        sex:{
            type:String,
            required:true
        }
    }, */
    methods: {
        updateAge(){
            this.myAge ++
        }
    },
}
</script>
