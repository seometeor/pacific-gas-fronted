<template>
  <div class="fleet-list">
    <div style="display: flex;align-items: center;">
      <span style="font-size: 18px;">{{ $t('menu.position') }}：</span>
      <el-breadcrumb :separator-icon="ArrowRight">
        <el-breadcrumb-item :to="{ path: '/' }">{{ $t('menu.home') }}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/second/fleetList' }">
          <span style="color: #005782;">{{ $t('menu.fleetList') }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div style="position: relative; width: 64%;">
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
          :data="tableData1" border stripe :cell-style="{ 'text-align': 'center' }" style="width: 100%;">
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
          :data="tableData2" border stripe :cell-style="{ 'text-align': 'center' }" style="width: 100%;">
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
          :data="tableData3" border stripe :cell-style="{ 'text-align': 'center' }" style="width: 100%;">
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
import axios from "axios";
import { onMounted, reactive } from "vue";
const state = reactive({
  tableData1: [],
  tableData2: [],
  tableData3: [],
})
// onMounted(() => {
//   axios.get("http://localhost:8080/api/student").then(
//     (response: { data: any; }) => {
//       state.tableData1 = response.data.data1
//       state.tableData2 = response.data.data2
//       state.tableData3 = response.data.data3
//       console.log(response.data)
//     },
//     (error: { message: any; }) => {
//       console.log(error.message)
//     }
//   );
// })

const tableData1 = [
  {
    Type: 'VLEC',
    'Vessel Name': 'PACIFIC INEOS GRENADIER',
    Built: '2022',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
  {
    Type: 'VLEC',
    'Vessel Name': 'PACIFIC INEOS BELSTAFF',
    Built: '2021',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
  {
    Type: 'VLGC',
    'Vessel Name': 'PACIFIC SHANGHAI',
    Built: '2017',
    Shipyard: 'DSME',
    CBM: '84,000',
    DWT: '54,450',
    'Min. Temp.	': '-48 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
  {
    Type: 'VLGC',
    'Vessel Name': 'PACIFIC HONG KONG',
    Built: '2017',
    Shipyard: 'DSME',
    CBM: '84,000',
    DWT: '54,450',
    'Min. Temp.	': '-48 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
  {
    Type: 'VLGC',
    'Vessel Name': 'PACIFIC BINZHOU',
    Built: '2016',
    Shipyard: 'DSME',
    CBM: '84,000',
    DWT: '54,450',
    'Min. Temp.	': '-48 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
  {
    Type: 'VLGC',
    'Vessel Name': 'PACIFIC DONGYING',
    Built: '2016',
    Shipyard: 'DSME',
    CBM: '84,000',
    DWT: '54,450',
    'Min. Temp.	': '-48 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
  {
    Type: 'VLGC',
    'Vessel Name': 'PACIFIC YANTAI',
    Built: '2016',
    Shipyard: 'DSME',
    CBM: '84,000',
    DWT: '54,450',
    'Min. Temp.	': '-48 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'CCS',
  },
  {
    Type: 'VLGC',
    'Vessel Name': 'PACIFIC QINGDAO',
    Built: '2016',
    Shipyard: 'DSME',
    CBM: '84,000',
    DWT: '54,450',
    'Min. Temp.	': '-48 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
  {
    Type: 'VLGC',
    'Vessel Name': 'PACIFIC RIZHAO',
    Built: '2016',
    Shipyard: 'DSME',
    CBM: '84,000',
    DWT: '54,450',
    'Min. Temp.	': '-48 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'CCS',
  },
  {
    Type: 'VLGC',
    'Vessel Name': 'PACIFIC WEIHAI',
    Built: '2016',
    Shipyard: 'DSME',
    CBM: '84,000',
    DWT: '54,450',
    'Min. Temp.	': '-48 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
]
const tableData2 = [
  {
    Type: 'VLEC',
    'Vessel Name': 'PACIFIC SP MINERVA',
    Delivery: 'Q2 2024',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
  {
    Type: 'VLEC',
    'Vessel Name': 'H2646',
    Delivery: 'Q3 2025',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
  {
    Type: 'VLEC',
    'Vessel Name': 'H2647',
    Delivery: 'Q4 2025',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
  {
    Type: 'VLEC',
    'Vessel Name': 'H2648',
    Delivery: 'Q1 2026	',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
  {
    Type: 'VLEC',
    'Vessel Name': 'H2649',
    Delivery: 'Q2 2026',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Hong Kong',
    CLASS: 'ABS',
  },
]
const tableData3 = [
  {
    Type: 'LEG',
    'Vessel Name': 'NAVIGATOR LUNA',
    Delivery: '2018',
    Shipyard: 'CIMC SOE',
    CBM: '17,000',
    DWT: '18,900',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Liberia',
    CLASS: 'DNV',
  },
  {
    Type: 'LEG',
    'Vessel Name': 'NAVIGATOR SOLAR',
    Delivery: '2018',
    Shipyard: 'CIMC SOE',
    CBM: '17,000',
    DWT: '18,900',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Liberia',
    CLASS: 'DNV',
  },
  {
    Type: 'LEG',
    'Vessel Name': 'NAVIGATOR CASTOR',
    Delivery: '2019',
    Shipyard: 'CIMC SOE',
    CBM: '22,000',
    DWT: '24,600',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Liberia',
    CLASS: 'DNV',
  },
  {
    Type: 'LEG',
    'Vessel Name': 'NAVIGATOR EQUATOR',
    Delivery: '2019',
    Shipyard: 'CIMC SOE',
    CBM: '22,000',
    DWT: '24,600',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Liberia',
    CLASS: 'DNV',
  },
  {
    Type: 'LEG',
    'Vessel Name': 'NAVIGATOR VEGA',
    Delivery: '2019',
    Shipyard: 'CIMC SOE',
    CBM: '22,000',
    DWT: '24,600',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Liberia',
    CLASS: 'DNV',
  },
  {
    Type: 'VLGC',
    'Vessel Name': 'H2638',
    Delivery: 'Q4 2023',
    Shipyard: 'JIANGNAN',
    CBM: '93,000',
    DWT: '54,000',
    'Min. Temp.	': '-52 ℃',
    FLAG: 'Singapore',
    CLASS: 'DNV',
  },
  {
    Type: 'VLEC',
    'Vessel Name': 'H2781',
    Delivery: 'Q2 2024',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Singapore',
    CLASS: 'ABS',
  },
  {
    Type: 'VLEC',
    'Vessel Name': 'H2782',
    Delivery: 'Q3 2024',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Singapore',
    CLASS: 'ABS',
  },
  {
    Type: 'VLEC',
    'Vessel Name': 'H2783',
    Delivery: 'Q4 2024',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Singapore',
    CLASS: 'ABS',
  },
  {
    Type: 'VLEC',
    'Vessel Name': 'H2724',
    Delivery: 'Q4 2025',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Singapore',
    CLASS: 'ABS',
  },
  {
    Type: 'VLEC',
    'Vessel Name': 'H2725',
    Delivery: 'Q1 2026',
    Shipyard: 'JIANGNAN',
    CBM: '99,000',
    DWT: '59,000',
    'Min. Temp.	': '-104 ℃',
    FLAG: 'Singapore',
    CLASS: 'ABS',
  },
]
</script>
  
<style scoped lang="less">
.fleet-list {
  text-align: left;
  letter-spacing: 2px;
}

.el-breadcrumb {
  font-size: 18px;
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
  