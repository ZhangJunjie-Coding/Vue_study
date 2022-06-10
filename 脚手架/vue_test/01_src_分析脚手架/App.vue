<template>
    <div>
        
        <SchoolApp></SchoolApp>
        <StudentApp></StudentApp>

    </div>
</template>

<script>
import SchoolApp from './components/SchoolApp.vue';

import StudentApp from './components/StudentApp.vue';

export default {
    name: 'App',

    components: { SchoolApp, StudentApp },

    data(){
       return {

       } 
    },
   
}
        
</script>
