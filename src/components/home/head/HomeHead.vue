<template>
    <div class="head-container">
        <div class="head-title">OA办公后台管理系统</div>
        <vertical-button class="index-button" text="首页" :icon="HomeFilled"></vertical-button>
        <vertical-button class="app-center-button" text="应用中心" :icon="Grid"></vertical-button>
        <el-input class="search-input" placeholder="请输入关键字">
            <template #prefix>
                <el-icon size="20"><search /></el-icon>
            </template>
        </el-input>
        <div class="information-menu">
            <el-badge is-dot class="message-button">
                <vertical-button :icon="BellFilled" :text-icon-padding="0"></vertical-button>
            </el-badge>
            <el-avatar class="avatar" shape="square" :size="40"/>
            <el-button class="name-button">
                <div class="name-text">Arrose</div>
                <el-icon class="name-arrow"><CaretBottom /></el-icon>
            </el-button>
        </div>
    </div>    
</template>

<script setup lang="ts">
    import {HomeFilled, Grid, Search, BellFilled, CaretBottom} from '@element-plus/icons-vue'
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
    width: 100px;
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
    width: 100px;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 340px;
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

.search-input {
    width: 25%;
    height: 40px;
    min-width: 300px;
    position: absolute;
    top: 12px;
    left: 480px;
}

.search-input :deep(.el-input__wrapper) {
    /* border: 0.2px solid transparent; */
    border-radius: 10px;
}

.search-input :deep(.el-input__inner)::placeholder {
    color: #CCCCCC;
}

.information-menu {
    width: 200px;
    height: 64px;
    position: absolute;
    top: 0px;
    right: 0px;
    background-color: transparent;
}

.name-button {
    width: 100px;
    height: 64px;
    position: absolute;
    top: 0px;
    right: 20px;
    color: white;
    padding: 10px;
    border-radius: 0px;
    border-width: 0px;
    background-color: transparent;
}

.name-arrow {
    width: 20px;
    height: 20px;
    padding-left: 5px;
}

.avatar {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 12px;
    right: 120px;
}

.message-button {
    width: 20px;
    height: 32px;
    position: absolute;
    top: 16px;
    right: 180px;
}

</style>