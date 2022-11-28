<template>
    <div class="aside-container">
        <el-menu :router="true">
            <template v-for="v in props.menuItems" :key="">
                <el-sub-menu></el-sub-menu>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">

    export interface Props {
        menuItems: object[]
    }

    const props = withDefaults(defineProps<Props>(), {
        menuItems: () => [],
    })

</script>

<style scoped>

.aside-container {
    width: 100%;
    height: 100%;
}

</style>