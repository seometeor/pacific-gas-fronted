<template>
  <div class="fleet-list">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/homePC' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/second/fleetList' }">
          <span style="color: #005782;">{{ $t('menu.fleetList') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="image-style">
      <el-image :src="getImgUrl('fleetList.jpg')" />
      <div class="img-content">{{ $t('fleetList.image') }}</div>
    </div>
    <div class="params-content">
      <span style="font-size: 36px; font-weight: bold; line-height: 100px;">{{ $t('menu.fleetList') }}</span>
      <p>{{ $t('fleetList.params1') }}</p>
      <p>{{ $t('fleetList.params2') }}</p>
      <div class="table">
        <span class="table-title">{{ $t('fleetList.tableTitle1') }}</span>
        <el-table
          :header-cell-style="{ background: 'linear-gradient(#62a399, #5085c3)', color: '#fff', 'text-align': 'center' }"
          :data="tableDataExisting" border stripe :cell-style="{ 'text-align': 'center' }" style="width: 100%;">
          <el-table-column prop="Type" :label="$t('fleetList.tableCol1')" />
          <el-table-column prop="Vessel Name" :label="$t('fleetList.tableCol2')" width="350" />
          <el-table-column prop="Built" :label="$t('fleetList.tableCol3_1')" />
          <el-table-column prop="Shipyard" :label="$t('fleetList.tableCol4')" />
          <el-table-column prop="CBM" :label="$t('fleetList.tableCol6')" />
          <el-table-column prop="DWT" :label="$t('fleetList.tableCol6')" />
          <el-table-column prop="Min. Temp.	" :label="$t('fleetList.tableCol7')" />
          <el-table-column prop="FLAG" :label="$t('fleetList.tableCol8')" />
          <el-table-column prop="CLASS" :label="$t('fleetList.tableCol9')" />
        </el-table>
      </div>
      <div class="table">
        <span class="table-title">{{ $t('fleetList.tableTitle2') }}</span>
        <el-table
          :header-cell-style="{ background: 'linear-gradient(#62a399, #5085c3)', color: '#fff', 'text-align': 'center' }"
          :data="tableDataNewbuilding" border stripe :cell-style="{ 'text-align': 'center' }" style="width: 100%;">
          <el-table-column prop="Type" :label="$t('fleetList.tableCol1')" />
          <el-table-column prop="Vessel Name" :label="$t('fleetList.tableCol2')" width="350" />
          <el-table-column prop="Delivery" :label="$t('fleetList.tableCol3_2')" />
          <el-table-column prop="Shipyard" :label="$t('fleetList.tableCol4')" />
          <el-table-column prop="CBM" :label="$t('fleetList.tableCol6')" />
          <el-table-column prop="DWT" :label="$t('fleetList.tableCol6')" />
          <el-table-column prop="Min. Temp.	" :label="$t('fleetList.tableCol7')" />
          <el-table-column prop="FLAG" :label="$t('fleetList.tableCol8')" />
          <el-table-column prop="CLASS" :label="$t('fleetList.tableCol9')" />
        </el-table>
      </div>
      <div class="table">
        <span class="table-title">{{ $t('fleetList.tableTitle3') }}</span>
        <el-table
          :header-cell-style="{ background: 'linear-gradient(#62a399, #5085c3)', color: '#fff', 'text-align': 'center' }"
          :data="tableDataThirdParty" border stripe :cell-style="{ 'text-align': 'center' }" style="width: 100%;">
          <el-table-column prop="Type" :label="$t('fleetList.tableCol1')" />
          <el-table-column prop="Vessel Name" :label="$t('fleetList.tableCol2')" width="350" />
          <el-table-column prop="Delivery" :label="$t('fleetList.tableCol3_2')" />
          <el-table-column prop="Shipyard" :label="$t('fleetList.tableCol4')" />
          <el-table-column prop="CBM" :label="$t('fleetList.tableCol6')" />
          <el-table-column prop="DWT" :label="$t('fleetList.tableCol6')" />
          <el-table-column prop="Min. Temp.	" :label="$t('fleetList.tableCol7')" />
          <el-table-column prop="FLAG" :label="$t('fleetList.tableCol8')" />
          <el-table-column prop="CLASS" :label="$t('fleetList.tableCol9')" />
        </el-table>
      </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
import { ArrowRight } from '@element-plus/icons-vue'
import { tableDataExisting } from "@/assets/data/tableDataExisting";
import { tableDataNewbuilding } from "@/assets/data/tableDataNewbuilding";
import { tableDataThirdParty } from "@/assets/data/tableDataThirdParty";
import axios from "axios";
import { onMounted, reactive } from "vue";
// const state = reactive({
//   tableData1: [],
//   tableDataNewbuilding: [],
//   tableData3: [],
// })
// onMounted(() => {
//   axios.get("http://localhost:8000/api/student").then(
//     (response: { data: any; }) => {
//       state.tableDataExisting = response.data.data1
//       state.tableDataNewbuilding = response.data.data2
//       state.tableDataThirdParty = response.data.data3
//       console.log(response.data)
//     },
//     (error: { message: any; }) => {
//       console.log(error.message)
//     }
//   );
// })
</script>
  
<style scoped lang="less">
.fleet-list {
  text-align: left;
  letter-spacing: 2px;
}

.el-breadcrumb {
  font-size: 18px;
}

.image-style {
  position: relative;
  width: 64%;
  max-width: 1024px;
}

.img-content {
  overflow: hidden;
  background-color: rgba(37, 52, 80, 0.5);
  color: #fff;
  padding: 10px 10px 10px 10px;
  position: absolute;
  width: -webkit-fill-available;
  bottom: 5px;
  text-align: center;
  font-size: 22px;
}

.table {
  margin-top: 5vh;
}

.table-title {
  font-size: 36px;
  font-weight: bold;
  line-height: 100px;
}

.params-content {
  font-size: 18px;
  line-height: 4vh;
}
</style>
  