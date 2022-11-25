<template>
    <div class="common-layout">
      <el-container class="common-layout">
      <el-header class="header">
        <home-head></home-head>
      </el-header>
      <el-container class="content">
        <el-aside class="aside" width="200px"></el-aside>
        <el-main></el-main>
      </el-container>
    </el-container>
    </div>
</template>

<script setup lang="ts">
  import HomeHead from './head/HomeHead.vue';

</script>

<style scoped>

.common-layout {
    width: 100%;
    height: 100%;
}

.header {
    width: 100%;
    height: 64px;
    padding: 0px;
}

.content {
  width: 100%;
  height: calc(100% - 64px);
}

.aside {
  width: 200px;
  height: 100%;
  background-color: white;
}

</style>