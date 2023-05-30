<template>
    <div class="tencent-map">
        <div id="amp-container">
            <div id="info">
                <el-button type="primary" @click="setShangHai()">{{ $t('contactUs.title2') }}</el-button>
                <el-button type="primary" @click="setHongKong()">{{ $t('contactUs.title3') }}</el-button>
                <el-button type="primary" @click="setSingapore()">{{ $t('contactUs.title4') }}</el-button>
                <el-button type="primary" @click="setMumbai()">{{ $t('contactUs.title5') }}</el-button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
const dataMap = reactive({
    map: '',
    markerLayer: '',
    latitude: '', //纬度
    lngitude: '', //经度
    address: '',
    setShangHai: '',
    setHongKong: '',
    setSingapore: '',
    setMumbai: '',
})
const TMap = (window as any).TMap
let setShangHai: any;
let setHongKong: any;
let setSingapore: any;
let setMumbai: any;

//初始化地图
function init() {
    let center = new TMap.LatLng('31.229872', '121.522659')
    var map = new TMap.Map(document.getElementById('amp-container'), {
        center: center, //设置地图中心点坐标
        zoom: 15, //设置地图缩放级别
        viewMode: '2D'
    })
    function ShangHai() {
        map.setCenter(new TMap.LatLng('31.229872', '121.522659'));
        var infoWindow = new TMap.InfoWindow({
            map: dataMap.map,
            position: new TMap.LatLng('22.27725', '114.180412'),
            offset: { x: 0, y: -32 },
            content: "香港湾仔港湾道26号华润大厦36楼3605室",
        });
        infoWindow.open()
    }
    function HongKong() {
        map.setCenter(new TMap.LatLng('22.27725', '114.180412'));
        var infoWindow = new TMap.InfoWindow({
            map: dataMap.map,
            position: new TMap.LatLng('22.27725', '114.180412'),
            offset: { x: 0, y: -32 },
            content: "香港湾仔港湾道26号华润大厦36楼3605室",
        });
        infoWindow.open()
    }
    function Singapore() {
        map.setCenter(new TMap.LatLng('1.2955759', '103.8589466'));
        var infoWindow = new TMap.InfoWindow({
            map: dataMap.map,
            position: new TMap.LatLng('1.2955759', '103.8589466'),
            offset: { x: 0, y: -32 },
            content: "9 Temasek Boulevard, #32-02A Suntec Tower Two, Singapore 038989",
        });
        infoWindow.open()
    }
    function Mumbai() {
        map.setCenter(new TMap.LatLng('18.98857879638672', '72.83734893798828'));
        var infoWindow = new TMap.InfoWindow({
            map: dataMap.map,
            position: new TMap.LatLng('18.98857879638672', '72.83734893798828'),
            offset: { x: 0, y: -32 },
            content: "Flat-1404 Chavrang CHS, Plot-4.Sector16.Sanpada Mumbai Maharashtra India 400705",
        });
        infoWindow.open()
    }
    dataMap.map = map
    setShangHai = ShangHai
    setHongKong = HongKong
    setSingapore = Singapore
    setMumbai = Mumbai
    //设置地图中心点事件
    markerLayer();
}

//标记地图
const markerLayer = function () {
    var marker = new TMap.MultiMarker({
        map: dataMap.map, //指定地图容器
        //样式定义
        styles: {
            marker: new TMap.MarkerStyle({
                "width": 24,
                "height": 35,
                "anchor": { x: 12, y: 35 },
                "src": '../src/assets/images/markerDefault.png'
            })
        },
        //点标记数据数组
        geometries: [
            {
                "id": 'Shanghai',
                "styleId": 'marker',
                "position": new TMap.LatLng('31.229872', '121.522659'),
                "properties": {
                    "content": "上海市浦东新区世纪大道1168号东方金融广场B座1101-1102室 200122",
                }
            },
            {
                "id": 'HongKong',
                "styleId": 'marker',
                "position": new TMap.LatLng('22.27725', '114.180412'),
                "properties": {
                    "content": "香港湾仔港湾道26号华润大厦36楼3605室",
                }
            },
            {
                "id": 'Singapore',
                "styleId": 'marker',
                "position": new TMap.LatLng('1.2955759', '103.8589466'),
                "properties": {
                    "content": "9 Temasek Boulevard, #32-02A Suntec Tower Two, Singapore 038989",
                }
            },
            {
                "id": 'Mumbai',
                "styleId": 'marker',
                "position": new TMap.LatLng('18.98857879638672', '72.83734893798828'),
                "properties": {
                    "content": "Office No.23, 1st floor, The Affaries, Plot No.9, Sector 17, Sanpada, Navi Mumbai, India",
                }
            },
        ]
    });
    dataMap.markerLayer = marker
    var infoWindow = new TMap.InfoWindow({
        map: dataMap.map,
        position: new TMap.LatLng('31.229872', '121.522659'),
        offset: { x: 0, y: -32 },
        content: "上海市浦东新区世纪大道1168号东方金融广场B座1101-1102室 200122",
    });
    //监听标注点击事件
    marker.on("click", function (evt: any) {
        infoWindow.open(); //打开信息窗
        infoWindow.setPosition(evt.geometry.position);//设置信息窗位置
        infoWindow.setContent(evt.geometry.properties.content.toString());//设置信息窗内容
    })
}
//初始化地图
onMounted(() => {
    init()
})
</script>

<style scoped lang="less">
.tencent-map {
    width: 90%;
    padding: 20px;
    border-radius: 0px;
    border: 1px solid #cccccc;
    position: relative;
}

#info {
    position: absolute;
    background: rgba(0, 0, 0, 0);
    width: 600px;
    height: 25px;
    z-index: 9999;
    top: 30px;
    left: 30px;
}

#setcenter {
    position: absolute;
    left: 110px;
    top: 10px;

}
</style>