<template>
    <div class="aside-container">
        <el-menu text-color="black" :default-active="props.defaultPath" active-text-color="green" :router="true" @select="handleSelect">
            <unlimited-menus :menu-items="props.menuItems"></unlimited-menus>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
    import UnlimitedMenus from '../../uitls/UnlimitedMenus.vue';

    export interface Props {
        menuItems: any[]
        defaultPath: string
    }

    const props = withDefaults(defineProps<Props>(), {
        menuItems: () => [],
        //默认应该为menuItems能解析到的第一个页面路径
        defaultPath: ''
    })

    const handleSelect = (index: any, indexPath: any) => {
        console.log(index,indexPath)
    }

</script>

<style scoped>

.aside-container {
    width: 100%;
    height: 100%;
}

</style>