/*
    功能：用于增强Vue
    本质：包含install方法的一个对象，install的第一个参数是Vue,第二个以后的参数是插件使用者传递的数据
    定义插件：
        对象.install = function(Vue,options){
            // 1.添加全局过滤器
            Vue.filter(.....)

            // 2.添加全局指令
            Vue.directive(....)

            //3.配置全局混入（合）
            Vue.mixin(....)
            
            //4.添加实例方法
            Vue.prototype.$myMethod = function(){...}
            Vue.prototype.$myProperty = xxxxx
        }
        使用插件：Vue.use()
*/

export default{
    install(Vue,x,y,z,a){
        console.log(x,y,z,a)

        //全局过滤器
        Vue.filter('mySlice',function(value){
            return value.slice(0,4)
        })

        //定义全局指令
        Vue.directive('fbind',{
            //指令与元素成功绑定时（一上来）
            bind(element,binding){

                element.value = binding.value

            },
            //指令所在元素被插入页面时
            inserted(element,binding){

                element.focus()

            },
            //指令所在的模块被重新解析时
            update(element,binding){
                element.value = binding.value
            }
        })

        //定义混入
        Vue.mixin({
            data(){
                return {
                    x: 100,
                    y: 200
                }
            }
        })

        //给Vue原型上添加一个方法
        Vue.prototype.hello = ()=>{
            alert('你好啊')
        }



    }
}