<script setup lang="ts">
import { ref, computed } from 'vue'
import { darkTheme } from 'naive-ui'
import { RouterView } from 'vue-router'
import { useRoute, useRouter } from 'vue-router'

import type { MenuOption } from 'naive-ui'

// 获取路由实例
const router = useRouter()
const routes = router.getRoutes() // 获取所有路由
console.log(router)
console.log(routes)

// 获取当前激活的路由
const route = useRoute()
const activeKey = ref(route.path)
console.log(activeKey)

// 根据路由数据生成菜单选项
// const menuOptions = computed(() => {
//   return (
//     routes
//       // TODO :: 处理完自动路由的元数据添加以及根据元数据决定是否在菜单显示，下一步处理层级菜单和类型关系
//       .filter((route) => !route.meta?.isHide)
//       .map((route) => {
//         return {
//           label: route.name,
//           key: route.path,
//           icon: route.meta.icon // 假设您在路由元数据中定义了图标
//         }
//       })
//   )
// })

const menuOptions = computed(() => {
  return router.options.routes.map((route) => {
    if (route.children) {
      return {
        label: route.name,
        key: route.path,
        children: route.children.map((child) => ({
          label: child.name,
          key: child.path
        }))
      }
    } else {
      return {
        label: route.name,
        key: route.path
      }
    }
  })
})

// 菜单项点击事件处理函数
const handleMenuClick = (key) => {
  activeKey.value = key
  router.push(key)
}
</script>
<template>
  <n-config-provider :theme="darkTheme">
    <n-layout style="height: 100vh">
      <n-layout-header style="height: 64px; padding: 24px" bordered> 颐和园路 </n-layout-header>
      <n-layout position="absolute" style="top: 64px; bottom: 0px" has-sider>
        <n-layout-sider content-style="padding: 24px;" :native-scrollbar="false" bordered>
          <n-menu
            v-model:value="activeKey"
            :options="menuOptions"
            @update:value="handleMenuClick"
          />
        </n-layout-sider>
        <n-layout :native-scrollbar="false">
          <n-layout
            position="absolute"
            content-style="padding: 24px;"
            style="top: 0px; bottom: 64px"
            :native-scrollbar="false"
          >
            <RouterView />
          </n-layout>
          <n-layout-footer position="absolute" style="height: 64px; padding: 24px" bordered>
            城府路
          </n-layout-footer>
        </n-layout>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>
