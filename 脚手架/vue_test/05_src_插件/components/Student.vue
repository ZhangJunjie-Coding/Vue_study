<template>
    <div> 
        <h2>姓名：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
        <input type="text" v-fbind:value="name">
    </div>
</template>

<script>
export default {
    name:'StudentApp',
    data(){
        return{
            name:'zhang',
            sex:'男' 
        }
    }
}
</script>
