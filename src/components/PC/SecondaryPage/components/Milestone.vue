<template>
  <div class="milestone">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/homePC' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/homePC' }">{{ $t('menu.company') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/second/milestone' }">
          <span style="color: #005782;">{{ $t('menu.milestone') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-image :class="{ 'img-En': isChActive }" :src="getImgUrl('mileStone-en.png')" />
    <el-image :class="{ 'img-Ch': !isChActive }" :src="getImgUrl('mileStone-ch.png')" />
  </div>
</template>
  
<script setup lang="ts">
import { bus } from "@/utils/eventbus";
import { getImgUrl } from "@/utils/getImgUrl";
import { ArrowRight } from '@element-plus/icons-vue'
import { onBeforeUnmount, onMounted, ref } from "vue";
const isChActive = ref(false)
onMounted(() => {
  if (sessionStorage.getItem("isChActive") == 'true') {
    isChActive.value = true
  } else {
    isChActive.value = false
  }
  bus.on('isChActive', (info: any) => {
    isChActive.value = info
  })
})
onBeforeUnmount(() => {
  bus.off('isChActive')
})
</script>
  
<style scoped lang="less">
.milestone {
  text-align: left;
  letter-spacing: 2px;
}

.el-breadcrumb {
  font-size: 18px;
}

.params-content {
  font-size: 18px;
  line-height: 4vh;
}

.img-En {
  display: none;
}

.img-Ch {
  display: none;
}
</style>
  