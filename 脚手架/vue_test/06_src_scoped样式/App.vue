<template>
<div>

    <StudentApp></StudentApp>
    <SchoolApp></SchoolApp>

</div>
    
</template>

<script>

import SchoolApp from './components/School.vue'
import StudentApp from './components/Student.vue'
export default {
    name: 'App',

    components:{SchoolApp,StudentApp}

} 
</script>
