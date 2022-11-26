<template>
    <div class="head-container">
        <div class="head-title">OA办公后台管理系统</div>
        <vertical-button class="index-button" text="首页" :icon="HomeFilled"></vertical-button>
        <vertical-button class="app-center-button" text="应用中心" :icon="Menu"></vertical-button>
        <!-- <el-button class="head-button">应用中心</el-button> -->
    </div>    
</template>

<script setup lang="ts">
    import {HomeFilled, Menu} from '@element-plus/icons-vue'
    import VerticalButton from '../../uitls/VerticalButton.vue';

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

.index-button {
    width: 120px;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 220px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background-color: #2561ef;
}

.index-button:hover {
    background-color: #134ade;
    border-bottom: 4px solid white;
}

.index-button:focus {
    background-color: #134ade;
    border-bottom: 4px solid white;
}

.app-center-button {
    width: 120px;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 370px;
    font-size: 14px;
    font-weight: 500;
    color: white;
    background-color: #2561ef;
}

.app-center-button:hover {
    background-color: #134ade;
    border-bottom: 4px solid white;
}

.app-center-button:focus {
    background-color: #134ade;
    border-bottom: 4px solid white;
}

</style>