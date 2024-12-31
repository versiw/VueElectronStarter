<script setup lang="ts">
definePage({
  meta: {
    title: '二级子选项1',
    enUSTitle: 'Secondary sub-option 1',
    isHide: false,
    icon: '',
    iconAction: ''
  }
})
</script>

<template>
  <n-result status="info" :title="$t('message.info')" :description="$t('system.tip2')"> </n-result>
</template>
