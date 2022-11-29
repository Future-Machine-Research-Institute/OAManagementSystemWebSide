<template>
    <div class="common-layout">
      <el-container class="common-layout">
        <el-header class="header">
          <home-head ref="homeHead" @click-on-app-item="clickOnAppItem"></home-head>
        </el-header>
        <el-container class="content">
            <el-aside class="aside" width="200px">
              <home-aside ref="homeAside" :menu-items="defaultMenus"></home-aside>
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
  import {onMounted, shallowRef, ref} from 'vue'

  let defaultMenus = shallowRef([{
    icon: null,
    text: '',
    path: '',
    children: []
  }])

  // let defaultPath = ref('')

  const homeHead = ref()
  const homeAside = ref()

  const router = useRouter()

  const clickOnAppItem = (menus: any[]) => {
    defaultMenus.value = menus
    console.log('menus: ', defaultMenus.value)
    // defaultPath.value = findFirstPath(menus)
    // console.log('path: ', defaultPath.value)
    router.replace(findFirstPath(menus))
  }

  onMounted(() => {
    console.log('onMounted')
    homeHead.value.indexItemClick()
  })

  const findFirstPath = (menus: any[]): string => {
    let firstMenu = menus[0]
    if(firstMenu.children.length === 0) {
      return firstMenu.path
    } else {
      return findFirstPath(firstMenu.children)
    }
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