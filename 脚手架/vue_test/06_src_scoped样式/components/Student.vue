<template>
    <div class="demo"> 
        <h2 class="qwe">姓名：{{name}}</h2>
        <h2>性别：{{sex}}</h2>
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

<style lang="less" scoped>

.demo{
    background-color: orange;
    .qwe{
        font-size: 40px;
    }
}

</style>
