<template>
    <div class="menus-container">
        <template v-for="(item, index) in props.menuItems">
            <el-sub-menu v-if="item.children !== null && item.children.length > 0" :key="index" :index="item.path">
                <template #title>
                    <el-icon><component :is="item.icon"></component></el-icon>
                    <span>{{ item.text }}</span>
                </template>
                <unlimited-menus :menuItems="item.children"></unlimited-menus>
            </el-sub-menu>
            <el-menu-item v-else :key="index + '/' + item.path" :index="item.path">
                <template #title>
                    <el-icon><component :is="item.icon"></component></el-icon>
                    <span>{{ item.text }}</span>
                </template>
            </el-menu-item>
        </template>
    </div>
</template>

<script setup lang="ts">

export interface Props {
    menuItems: any[]
}

const props = withDefaults(defineProps<Props>(), {
    menuItems: () => [],
})

</script>

<style scoped>
.menus-container {
    width: 100%;
    height: 100%;
}

.menus-container :deep(.el-sub-menu__title) {
    height: 35px;
    line-height: 35px;
    margin-top: 10px;
    border-radius: 5px;
}

.menus-container :deep(.el-menu-item) {
    min-width: 160px;
    height: 35px;
    line-height: 35px;
    margin-top: 10px;
    padding-left: 20px !important;
    border-radius: 5px;
}

.menus-container :deep(.el-menu-item.is-active) {
    color: white;
    background-color: #2561EF;
}
</style>