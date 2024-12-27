<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import { useMenu } from '@renderer/hooks/layout/menu'
import NHeader from '@renderer/layouts/NHeader.vue'
import { useMessage } from 'naive-ui'
import { useThemeConfig } from '@renderer/hooks/common/useThemeConfig'

window.$message = useMessage()

const isCollapsed = ref(false)

const { activeKey, menuOptions, handleMenuClick } = useMenu()

const { themeConfig } = useThemeConfig()
</script>
<template>
  <n-layout class="h-full">
    <NHeader />
    <n-layout position="absolute" class="top-9 bottom-0 select-none" has-sider>
      <n-layout-sider
        :native-scrollbar="false"
        bordered
        collapse-mode="width"
        :collapsed-width="64"
        :width="200"
        :collapsed="isCollapsed"
        show-trigger="arrow-circle"
        @collapse="isCollapsed = true"
        @expand="isCollapsed = false"
      >
        <n-menu
          v-model:value="activeKey"
          :options="menuOptions"
          :collapsed="isCollapsed"
          :collapsed-width="64"
          :collapsed-icon-size="24"
          @update:value="handleMenuClick"
        />
      </n-layout-sider>
      <n-layout :native-scrollbar="false">
        <n-layout
          position="absolute"
          content-style="padding: 24px;"
          class="absolute top-0 bottom-16 select-text"
          :native-scrollbar="false"
        >
          <div v-if="themeConfig.animation">
            <RouterView v-slot="{ Component }">
              <transition
                name="custom"
                mode="out-in"
                appear
                :enter-active-class="`animate__animated ${themeConfig.animationScheme.enter} animate__faster`"
                :leave-active-class="`animate__animated ${themeConfig.animationScheme.leave} animate__faster`"
                :appear-active-class="`animate__animated ${themeConfig.animationScheme.enter} animate__faster`"
              >
                <keep-alive>
                  <component :is="Component" />
                </keep-alive>
              </transition>
            </RouterView>

            <!-- <transition
              :duration="{ enter: 1000, leave: 600 }"
              mode="out-in"
              appear
              :leave-active-class="`animate__animated ${themeConfig.animationScheme.leave}`"
              :enter-active-class="`animate__animated ${themeConfig.animationScheme.enter}`"
              :appear-active-class="`animate__animated ${themeConfig.animationScheme.enter}`"
            >
              <RouterView />
            </transition> -->
          </div>
          <div v-else>
            <RouterView />
          </div>
        </n-layout>
        <div v-if="themeConfig.layoutScheme === 'default'">
          <n-layout-footer position="absolute" class="h-9 p-1" bordered> 底部布局 </n-layout-footer>
        </div>
      </n-layout>
    </n-layout>
  </n-layout>
</template>

<style scoped>
.animate__animated.animate__slideOutDown {
  opacity: 0;
  transition: opacity 600ms ease;
}
</style>
