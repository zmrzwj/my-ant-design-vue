<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<style>
    *{
        margin: 0;
    }
    html,body{
        width: 100%;
        height: 100%;
        position: relative;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #666666;
        width: 100%;
        height: 100%;
        position: relative;
    }
</style>

<script>
    // import MyNav from "./components/MyNav/MyNav"
    // export default {
    //     components: {
    //         MyNav:MyNav
    //     }
    // }
</script>
