<template>
    <div class="common-layout">
      <el-container class="common-layout">
        <el-header class="header">
          <home-head @click-on-app-item="clickOnAppItem"></home-head>
        </el-header>
        <el-container class="content">
            <el-aside class="aside" width="200px">
              <home-aside :menu-items="testArray" :default-path="'/home/index/work-bench'"></home-aside>
            </el-aside>
            <el-main>
              <router-view></router-view>
            </el-main>
        </el-container>
      </el-container>
    </div>
</template>

<script setup lang="ts">
  import HomeHead from './head/HomeHead.vue';
  import HomeAside from './aside/HomeAside.vue'
  import { useRouter } from 'vue-router';
  import {Monitor, Document} from '@element-plus/icons-vue'
  import {reactive } from 'vue'

  let testArray = [
    {
      icon: Monitor,
      text: '工作台',
      path: '/home/index/work-bench',
      children: []
    },
    {
      icon: Document,
      text: '日程待办',
      path: '/home/index/schedule',
      children: []
    }
  ]

  const router = useRouter()

  router.replace('/home/index/work-bench')

  const clickOnAppItem = (menus: any[]) => {
    console.log(menus)
    // testArray.value = menus
    // testArray.push(...menus)
  }

</script>

<style scoped>

@media (min-width: 1024px) {
  .aside {
    display: block;
  }
}

@media (max-width: 1023px) {
  .aside {
    display: none;
  }
}

.common-layout {
    width: 100%;
    height: 100%;
    overflow: auto;
}

.header {
    width: 100%;
    min-width: 280px;
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