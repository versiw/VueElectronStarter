<script setup lang="ts">
import NHeader from '@renderer/layouts/NHeader.vue'
import NSider from '@renderer/layouts/NSider.vue'
import NFooter from '@renderer/layouts/NFooter.vue'
import NContent from '@renderer/layouts/NContent.vue'
import { useMessage } from 'naive-ui'
import { useThemeConfig } from '@renderer/layouts/hooks/useThemeConfig'

window.$message = useMessage()

const { themeConfig } = useThemeConfig()
</script>
<template>
  <!-- <div class="h-full w-full relative">
    <NLayout position="absolute" class="h-full w-full">
      <NHeader />
      <NLayout has-sider position="absolute" class="w-full top-9 bottom-9">
        <NSider />
        <NContent />
      </NLayout>
      <div v-if="themeConfig.layoutScheme === 'default'"><NFooter /></div>
    </NLayout>
  </div> -->

  <div class="h-full w-full relative">
    <NLayout position="absolute" class="h-full w-full">
      <NHeader />
      <NLayout position="absolute" class="top-9" has-sider>
        <NSider />
        <NLayout :native-scrollbar="false" class="">
          <NContent />
          <div v-if="themeConfig.layoutScheme === 'default'"><NFooter /></div>
        </NLayout>
      </NLayout>
    </NLayout>
  </div>
</template>
