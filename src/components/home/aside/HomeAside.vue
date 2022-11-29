<template>
    <div class="aside-container">
        <el-menu text-color="black" ref="asideMenu" :default-active="router.currentRoute.value.path" active-text-color="green" :router="true" @select="handleSelect">
            <unlimited-menus :menu-items="props.menuItems"></unlimited-menus>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
    import UnlimitedMenus from '../../uitls/UnlimitedMenus.vue';
    import {ref} from 'vue'
    import { useRouter } from 'vue-router';

    export interface Props {
        menuItems: any[]
    }

    const asideMenu = ref()
    const router = useRouter()

    const props = withDefaults(defineProps<Props>(), {
        menuItems: () => []
    })

    const handleSelect = (index: any, indexPath: any, item: any, routeResult: any) => {
        // console.log("index: ", index)
        // console.log("indexPath: ", indexPath)
        // console.log("item: ", item)
        // console.log("routeResult: ", routeResult)
    }

</script>

<style scoped>

.aside-container {
    width: 100%;
    height: 100%;
}

</style>