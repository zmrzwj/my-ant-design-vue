<template>
    <div class="example">
        <a-spin tip="Loading..." size="large"/>
    </div>
</template>


<script>
    export default {
        name: "loading"
    }
</script>

<style scoped>
    .example {
        background: rgba(0,0,0,0);
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>
