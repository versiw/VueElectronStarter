<route lang="json" v-if="__USE_AUTO_ROUTES__">
{
  "meta": {
    "title": "二级子选项2",
    "enUSTitle": "Secondary sub-option 2",
    "isHide": true,
    "icon": "",
    "iconAction": ""
  }
}
</route>

<script setup lang="ts"></script>

<template>
  <div class="h-full w-full flex items-center justify-center">
    <n-result status="success" :title="$t('message.success')" :description="$t('system.tip2')">
    </n-result>
  </div>
</template>
