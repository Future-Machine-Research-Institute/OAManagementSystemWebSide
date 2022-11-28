<template>
    <div class="head-container">
        <vertical-button class="menu-button" :icon="Menu" :text-icon-padding="0"></vertical-button>
        <div class="head-title">OA办公后台管理系统</div>
        <vertical-button class="index-button" text="首页" :icon="HomeFilled"></vertical-button>
        <vertical-button class="app-center-button" ref="appCenterButtonRef" text="应用中心" :icon="Grid"></vertical-button>
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
            <el-button class="name-button" ref="nameButtonRef">
                <div class="name-text">Arrose</div>
                <el-icon class="name-arrow"><CaretBottom /></el-icon>
            </el-button>
        </div>
        <el-popover class="set-popover" ref="setPopoverRef" :virtual-ref="nameButtonRef" trigger="click" virtual-triggering :show-arrow="false">
            <el-button class="set-button">重置密码</el-button>
            <el-button class="set-button">退出系统</el-button>
        </el-popover>
        <el-popover class="app-center-popover" ref="appCenterPopoverRef" :virtual-ref="appCenterButtonRef" trigger="click" virtual-triggering :show-arrow="false" width="546px">
            <el-space class="app-center-space" :size="10"  wrap>
                <vertical-button class="app-item-button" v-for="item in appItemArray" @click="emit('clickOnAppItem', item.menus)" :text="item.text" :icon="item.icon" :icon-color="item.iconColor" :icon-size="25" :text-icon-padding="20"></vertical-button>
            </el-space>
        </el-popover>
    </div>    
</template>

<script setup lang="ts">
    import {Menu, HomeFilled, Grid, Search, BellFilled, CaretBottom, Share, UserFilled, Checked, WalletFilled, Coin, List, PhoneFilled, Promotion, Platform, Van, Tickets, Memo, DocumentCopy, Management, Money, Tools} from '@element-plus/icons-vue'
    import VerticalButton from '../../uitls/VerticalButton.vue';
    import { ref } from 'vue';

    const emit = defineEmits<{
        (e: 'clickOnAppItem', menus: any[]): void
    }>()

    const nameButtonRef = ref()
    const setPopoverRef = ref()

    const appCenterButtonRef = ref()
    const appCenterPopoverRef = ref()

    const appItemArray = [
        {
            icon: Share,
            iconColor: "#6c76f4",
            text: "组织",
            menus: []
        },
        {
            icon: UserFilled,
            iconColor: "#28d094",
            text: "员工",
            menus: [
                
            ]
        },
        {
            icon: Checked,
            iconColor: "#2561ef",
            text: "考勤",
            menus: [
                
            ]
        },
        {
            icon: WalletFilled,
            iconColor: "#fa746b",
            text: "薪酬",
            menus: [
                
            ]
        },
        {
            icon: Coin,
            iconColor: "#fddb78",
            text: "社保公积金",
            menus: [
                
            ]
        },
        {
            icon: List,
            iconColor: "#fddb78",
            text: "绩效",
            menus: [
                
            ]
        },
        {
            icon: PhoneFilled,
            iconColor: "#fa746b",
            text: "招聘",
            menus: [
                
            ]
        },
        {
            icon: Promotion,
            iconColor: "#28d094",
            text: "审批",
            menus: [
                
            ]
        },
        {
            icon: Platform,
            iconColor: "#6c76f4",
            text: "会议室预定",
            menus: [
                
            ]
        },
        {
            icon: Van,
            iconColor: "#2561ef",
            text: "车辆",
            menus: [
                
            ]
        },
        {
            icon: Tickets,
            iconColor: "#28d094",
            text: "新闻",
            menus: [
                
            ]
        },
        {
            icon: Memo,
            iconColor: "#2561ef",
            text: "公告",
            menus: [
                
            ]
        },
        {
            icon: DocumentCopy,
            iconColor: "#fa746b",
            text: "合同库",
            menus: [
                
            ]
        },
        {
            icon: Management,
            iconColor: "#fddb78",
            text: "文档库",
            menus: [
                
            ]
        },
        {
            icon: Money,
            iconColor: "#6c76f4",
            text: "资产",
            menus: [
                
            ]
        },
        {
            icon: Tools,
            iconColor: "#fddb78",
            text: "系统设置",
            menus: [
                
            ]
        }
    ]

</script>

<style scoped>

@media (min-width: 1024px) {
  .head-title {
    display: block;
  }
  .index-button {
    display: block;
  }
  .app-center-button {
    display: block;
  }
  .search-input {
    display: inline-flex;
  }
  .menu-button {
    display: none;
  }
}

@media (max-width: 1023px) {
  .head-title {
    display: none;
  }
  .index-button {
    display: none;
  }
  .app-center-button {
    display: none;
  }
  .search-input {
    display: none;
  }
  .menu-button {
    display: block;
  }
}

.head-container {
    width: 100%;
    height: 100%;
    background-color: #2561EF;
    position: relative;
}

.menu-button {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 12px;
    left: 20px;
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
    border-radius: 10px;
}

.search-input :deep(.el-input__inner)::placeholder {
    color: #CCCCCC;
}

.information-menu {
    width: 220px;
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

.name-text {
    font-weight: bold;
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
    right: 200px;
}

.set-button {
    width: 100%;
    border-radius: 0px;
    border-width: 0px;
    margin: 0 auto;
    background-color: transparent;
}

.set-button:hover {
    color: #2561EF;
}

.app-center-space :deep(.el-space__item) {
    margin-left: 10px;
}

.app-item-button {
    width: 84px;
    height: 84px;
    font-size: 14px;
    color: black;
}

.app-item-button:hover {
    background-color: #eef3fe;
    border-radius: 8px;
}

</style>