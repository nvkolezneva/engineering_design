<template>
<div class="v-main-wrapper">
    <v-header></v-header>
    <keep-alive> <router-view></router-view></keep-alive>

</div>

</template>
<script>
import vHeader from './v-header'

    export default {
        name:'v-main-wrapper',
        comments:{

        },
        components:{
            vHeader
        },
        props:{},
        data(){
         return{
             title:'Main wrapper'
         }
        },
        computed:{},
        methods:{},
        watch:{},
        mounted() {}
    }

</script>
<style>
.v-main-wrapper{

    margin: 0 auto;
}

</style>