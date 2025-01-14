<route lang="json" v-if="__USE_AUTO_ROUTES__">
{
  "meta": {
    "title": "二级子选项1",
    "enUSTitle": "Secondary sub-option 1",
    "isHide": false,
    "icon": "",
    "iconAction": ""
  }
}
</route>

<script setup lang="ts"></script>

<template>
  <div class="h-full w-full flex items-center justify-center">
    <n-result status="info" :title="$t('message.info')" :description="$t('system.tip2')">
    </n-result>
  </div>
</template>
