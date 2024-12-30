<script setup lang="ts">
import { useThemeConfig } from '@renderer/layouts/hooks/useThemeConfig'

defineComponent({
  name: 'NContent'
})

const { themeConfig } = useThemeConfig()
</script>

<template>
  <NLayoutContent class="p-6 mb-9" :native-scrollbar="false">
    <div v-if="themeConfig.animation">
      <RouterView v-slot="{ Component }">
        <transition
          name="custom"
          mode="out-in"
          appear
          :enter-active-class="`animate__animated ${themeConfig.animationScheme.transition.enter} animate__faster`"
          :leave-active-class="`animate__animated ${themeConfig.animationScheme.transition.leave} animate__faster`"
          :appear-active-class="`animate__animated ${themeConfig.animationScheme.transition.enter} animate__faster`"
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
  </NLayoutContent>
</template>

<style scoped>
.animate__animated.animate__slideOutDown {
  opacity: 0;
  transition: opacity 600ms ease;
}
</style>
