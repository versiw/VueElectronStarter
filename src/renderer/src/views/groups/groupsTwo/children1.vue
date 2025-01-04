<script setup lang="ts">
definePage({
  meta: {
    title: '三级子选项2',
    enUSTitle: 'Tertiary sub-option 2',
    isHide: false,
    icon: '',
    iconAction: ''
  }
})
</script>

<template>
  <div class="h-full w-full flex items-center justify-center">
    <n-result status="warning" :title="$t('message.warning')" :description="$t('system.tip2')">
    </n-result>
  </div>
</template>
