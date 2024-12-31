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
  <n-result status="warning" :title="$t('message.warning')" :description="$t('system.tip2')">
  </n-result>
</template>
