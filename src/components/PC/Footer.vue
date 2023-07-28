<template>
  <div class="pageFooter-style">
    <el-row>
      <el-col :span="7">
        <div style="display: flex; flex-direction: column;align-items: flex-start; padding-left: 50%;">
          <p>{{ $t('pageFooter.email') }} : info@pacific-gas.com</p>
          <p class="param-second">{{ $t('pageFooter.phone') }} : +86 21 6079 1302</p>
        </div>
      </el-col>
      <el-col :span="10">
        <!-- <el-row>
          <el-col :span="5"></el-col>
          <el-col :span="10">
            <el-image :src="getImgUrl('footer-logo.png')" class="logo-footer" />
          </el-col>
          <el-col :span="1">
            <el-divider direction="vertical" class="logo-divider" />
          </el-col>
          <el-col :span="4">
            <el-image :src="getImgUrl('footer-icon.png')" class="logo-footer" />
          </el-col>
        </el-row> -->
        <el-image :src="getImgUrl('footer.png')" />
      </el-col>
      <el-col :span="7">
        <div class="footerc1">
          <div class="item">
            <a>股东单位</a>
            <ul class="first">
              <li>
                <a href="http://www.sdme.cn/" target="_blank" rel="noopener noreferrer">山东海洋能源有限公司</a>
              </li>
            </ul>
          </div>
          <div class="item">
            <a>友情链接</a>
            <ul class="second">
              <li>
                <a href="http://gzw.shandong.gov.cn/" target="_blank" rel="noopener noreferrer">山东省国有资产监督管理委员会</a>
              </li>
              <li>
                <a href="http://www.sdmg.cn/" target="_blank" rel="noopener noreferrer">山东海洋集团有限公司</a>
              </li>
              <li>
                <a href="https://www.sdshipping.cn/" target="_blank" rel="noopener noreferrer">山东海运股份有限公司</a>
              </li>
            </ul>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
  
<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
</script>
  
<style scoped>
.footerc1 {
  float: left;
  width: 15vw;
}

.footerc1 .item {
  position: relative;
  margin: 1vh 0;
  background-color: #005782;
}

.footerc1 .item:hover {
  background-color: #0b284a;
}

.footerc1 .item>p {
  display: block;
  padding: 0 15px;
  cursor: pointer;
  border: 1px solid #fff;
  line-height: 35px;
  color: #fff;
}

.footerc1 .item:after {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  right: 15px;
  margin-top: -7px;
  width: 8px;
  height: 8px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: rotate(135deg);
  transition: ease .5s;
}

.footerc1 .item:hover:after {
  margin-top: -3px;
  transform: rotate(-45deg);
}

.footerc1 .item>a {
  display: block;
  padding: 0 15px;
  cursor: pointer;
  border: 1px solid #fff;
  line-height: 35px;
  color: #fff;
}

.footerc1 .item .first {
  display: block;
  opacity: 0;
  visibility: hidden;
  padding-top: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  transition: ease .5s;
  z-index: -1;
}

.footerc1 .item .second {
  display: block;
  opacity: 0;
  visibility: hidden;
  padding-top: 0px;
  margin-top: 0px;
  padding-bottom: 0px;
  margin-bottom: 0px;
  transition: ease .5s;
  z-index: -1;
}

.footerc1 ul {
  display: none;
  list-style: none;
  margin: 0;
  padding: 0;
  position: absolute;
  z-index: 3;
  right: 0;
  bottom: 100%;
  left: 0;
  border-right: 1px solid #fff;
  border-left: 1px solid #fff;
  background-color: #0b284a;
}

.footerc1 .item:hover .first {
  opacity: 1;
  visibility: visible;
  z-index: 1;
}

.footerc1 .item:hover .second {
  opacity: 1;
  visibility: visible;
  z-index: 1;
}

.footerc1 li {
  border-top: 1px solid #fff;
  line-height: 1.1;
}

.footerc1 li a {
  display: block;
  color: #999;
  padding: 10px 15px;
  transition: ease .5s;
}

.footerc1 li a:hover {
  background-color: #fff;
  color: #005782;
}

.el-row {
  top: 20%;
  align-items: center;
}

.pageFooter-style {
  background-color: #005782;
  text-align: -webkit-center;
  height: 21vh;
  align-items: center;
  line-height: 50%;
}

.param-second {
  padding-right: 11px;
}

.logo-footer {
  height: 5rem;
}

.logo-divider {
  height: 5em;
  border-left: 2px var(--el-border-color) var(--el-border-style);
}

@media screen and (max-width:1366px) {
  p {
    color: #fff;
    text-align: center;
    font-size: 14px;
  }

  .logo-footer {
    height: 4rem;
  }

  .logo-divider {
    height: 4em;
    border-left: 2px var(--el-border-color) var(--el-border-style);
  }
}

@media screen and (min-width:1367px) {
  p {
    color: #fff;
    text-align: center;
  }
}
</style>