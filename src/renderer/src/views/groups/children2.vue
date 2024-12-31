<script setup lang="ts">
definePage({
  meta: {
    title: '二级子选项3',
    enUSTitle: 'Secondary sub-option 3',
    isHide: true,
    icon: '',
    iconAction: ''
  }
})
</script>

<template>
  <n-result status="success" :title="$t('message.success')" :description="$t('system.tip2')">
  </n-result>
</template>
