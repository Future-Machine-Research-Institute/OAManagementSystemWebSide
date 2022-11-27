<template>
    <el-button class="button-container">
        <el-icon :color="props.iconColor" :size="props.iconSize">
            <component :is="props.icon"></component>
        </el-icon>
        <div :style="{marginTop: props.textIconPadding + 'px'}">{{props.text}}</div>
    </el-button>
</template>

<script setup lang="ts">
    import { defineComponent, DefineComponent } from 'vue';

    export interface Props {
        text?: string
        icon?: DefineComponent<{}, {}, any>
        iconColor?: string
        iconSize?: number
        textIconPadding?: number
    }

    const props = withDefaults(defineProps<Props>(), {
        text: '',
        icon: defineComponent(() => {}),
        iconColor: 'white',
        iconSize: 20,
        textIconPadding: 5
    })

</script>

<style scoped>

.button-container {
    padding: 0px;
    border-radius: 0px;
    border-width: 0px;
    margin: 0 auto;
}

.button-container :deep(span) {
    flex-direction: column;
}

.el-button {
    background-color: transparent;
}

</style>