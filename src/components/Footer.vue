<template>
  <div class="pageFooter-style">
    <el-row>
      <el-col :span="4"></el-col>
      <el-col :span="16">
        <el-image :src="getImgUrl('footer-logo.png')" />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <p>{{ $t('pageFooter.email') }} : photytw@gmail.com</p>
        <p class="param-second">{{ $t('pageFooter.phone') }} : (+00) 012 045 223</p>
      </el-col>
    </el-row>
  </div>
</template>
  
<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
</script>
  
<style scoped>
.el-row {
  width: 33%;
  top: 20%;
}

.el-col {
  line-height: 1rem;
}

.pageFooter-style {
  background-color: #005782;
  text-align: -webkit-center;
  height: 51vh;
  align-items: center;
  line-height: 50%;
}

.param-second {
  padding-right: 11px;
}

@media screen and (max-width:1366px) {
  p {
    color: #fff;
    text-align: center;
    font-size: 14px;
  }
}

@media screen and (min-width:1367px) {
  p {
    color: #fff;
    text-align: center;
  }
}
</style>