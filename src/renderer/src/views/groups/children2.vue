<script setup lang="ts">
definePage({
  meta: {
    title: '警告页',
    isHide: true,
    icon: '',
    iconAlt: ''
  }
})
</script>

<template>
  <n-result status="warning" title="警告" description="在它变成错误以前一般不会有人管它">
  </n-result>
</template>
