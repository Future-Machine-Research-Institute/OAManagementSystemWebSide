<template>
    <div class="head-container">
        <div class="head-title">OA办公后台管理系统</div>
        <el-button class="head-button">首页</el-button>
        <!-- <el-button class="head-button">应用中心</el-button> -->
    </div>    
</template>

<script setup lang="ts">

</script>

<style scoped>

.head-container {
    width: 100%;
    height: 100%;
    background-color: #2561EF;
    position: relative;
}

.head-title {
    width: 160px;
    height: 16px;
    position: absolute;
    top: 24px;
    left: 20px;
    font-size: 16px;
    font-weight: 500;
    line-height: 16px;
    text-align: center;
    color: white;
}

.head-button {
    width: 120px;
    height: 100%;
    padding: 0px;
    position: absolute;
    top: 0px;
    left: 220px;
    border-radius: 0px;
    border-width: 0px;
    color: white;
    font-size: 14px;
    font-weight: 500;
    background-color: #2561ef;
}

.head-button:hover {
    background-color: #134ade;
    border-bottom: 4px solid white;
}

.head-button:focus {
    background-color: #134ade;
    border-bottom: 4px solid white;
}


</style>