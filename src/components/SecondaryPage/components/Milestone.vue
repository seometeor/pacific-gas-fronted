<template>
  <div class="milestone">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">{{ $t('menu.company') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/second/milestone' }">
          <span style="color: #005782;">{{ $t('menu.milestone') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-image :class="{ 'img-En': state.isChActive }" :src="getImgUrl('mileStone-en.png')" />
    <el-image :class="{ 'img-Ch': !state.isChActive }" :src="getImgUrl('mileStone-ch.png')" />
  </div>
</template>
  
<script setup lang="ts">
import { bus } from "@/utils/eventbus";
import { getImgUrl } from "@/utils/getImgUrl";
import { ArrowRight } from '@element-plus/icons-vue'
import { onBeforeUnmount, onMounted, reactive } from "vue";
const state = reactive({
  isChActive: false,
})
state.isChActive = Boolean(localStorage.getItem('isChActive'))
onMounted(() => {
  bus.on('isChActive', (info: any) => {
    state.isChActive = info
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
  