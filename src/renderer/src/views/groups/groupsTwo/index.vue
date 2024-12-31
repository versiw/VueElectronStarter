<script setup lang="ts">
definePage({
  meta: {
    title: '三级子选项1',
    enUSTitle: 'Tertiary sub-option 1',
    isHide: false,
    icon: '',
    iconAction: ''
  }
})
</script>

<template>
  <n-result status="warning" :title="$t('message.warning')" :description="$t('system.tip2')">
  </n-result>
</template>
