<script setup lang="ts">
definePage({
  meta: {
    title: '信息页',
    isHide: false,
    icon: '',
    iconAlt: ''
  }
})
</script>

<template>
  <div class="w-full h-full flex items-center justify-center">
    <n-result
      status="info"
      title="信息"
      description="我们今天的选择，在当时看可能是深思熟虑的，但放宽过去的眼界，回头看，都是命中注定"
    >
    </n-result>
  </div>
</template>
