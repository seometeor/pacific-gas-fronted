<template>
    <div class="pageFooter-style">
        <el-row>
            <el-col :span="24">
                <el-image :src="getImgUrl('footer.png')" style="width: 80%;" />
            </el-col>
            <el-col :span="24">
                <div style="display: flex; flex-direction: column;align-items: flex-start;margin-left: 10vw;">
                    <p>{{ $t('pageFooter.email') }} : info@pacific-gas.com</p>
                    <p class="param-second">{{ $t('pageFooter.phone') }} : +86 21 6079 1302</p>
                </div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="9">
                <div class="footerc1">
                    <div class="item">
                        <a>股东单位</a>
                        <ul class="first">
                            <li>
                                <a href="http://www.sdme.cn/" target="_blank" rel="noopener noreferrer">山东海洋能源有限公司</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="2"></el-col>
            <el-col :span="9">
                <div class="footerc1">
                    <div class="item">
                        <a>友情链接</a>
                        <ul class="second">
                            <li>
                                <a href="http://gzw.shandong.gov.cn/" target="_blank"
                                    rel="noopener noreferrer">山东省国有资产监督管理委员会</a>
                            </li>
                            <li>
                                <a href="http://www.sdmg.cn/" target="_blank" rel="noopener noreferrer">山东海洋集团有限公司</a>
                            </li>
                            <li>
                                <a href="https://www.sdshipping.cn/" target="_blank"
                                    rel="noopener noreferrer">山东海运股份有限公司</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span="2"></el-col>
        </el-row>
    </div>
</template>
    
<script setup lang="ts">
import { getImgUrl } from "@/utils/getImgUrl";
</script>
    
<style scoped>
.footerc1 .item {
    position: relative;
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
    cursor: pointer;
    border: 1px solid #fff;
    line-height: 30px;
    color: #fff;
    font-size: 14px;
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
    align-items: center;
    padding: 16px 0px;
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
</style>