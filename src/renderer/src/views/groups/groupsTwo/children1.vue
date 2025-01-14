<route lang="json" v-if="__USE_AUTO_ROUTES__">
{
  "meta": {
    "title": "三级子选项2",
    "enUSTitle": "Tertiary sub-option 2",
    "isHide": false,
    "icon": "",
    "iconAction": ""
  }
}
</route>

<script setup lang="ts"></script>

<template>
  <div class="h-full w-full flex items-center justify-center">
    <n-result status="warning" :title="$t('message.warning')" :description="$t('system.tip2')">
    </n-result>
  </div>
</template>
