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
  <div class="h-full w-full flex items-center justify-center">
    <n-result status="success" :title="$t('message.success')" :description="$t('system.tip2')">
    </n-result>
  </div>
</template>
