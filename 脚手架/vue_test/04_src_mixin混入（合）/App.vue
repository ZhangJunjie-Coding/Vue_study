<template>
<div>

    <StudentApp></StudentApp>
    <hr>
    <SchoolApp></SchoolApp>

</div>
    
</template>

<script>
import StudentApp from './components/Student.vue'
import SchoolApp from './components/School.vue'

export default {
    name: 'App',

    components:{
    SchoolApp,
    StudentApp
}

} 
</script>
