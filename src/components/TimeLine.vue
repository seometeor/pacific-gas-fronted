<template>
    <div class="">
        <swiper style=" height:100%;" :grabCursor="true" :speed="600" :parallax="true" :freeMode="true" :modules="modules"
            :slidesPerView="4" class="timeLine">
            <div slot="container-start" class="parallax-bg"
                :style="{ backgroundImage: 'url(' + getImgUrl('line.png') + ')' }" data-swiper-parallax="-29.5%"></div>
            <swiper-slide>
                <div class="firstChild" @mouseenter="state.isHoverFirst = true" @mouseleave="state.isHoverFirst = false">
                    <div v-show="!state.isHoverFirst">
                        <el-image :src="getImgUrl('timeLineDown.png')" class="image" />
                        <div class="point-label-first">
                            <p>2013</p>
                        </div>
                    </div>
                    <div v-show="state.isHoverFirst" class="child-hover-down">
                        <el-image :src="getImgUrl('timeLineDownHover.png')" class="image-hover" />
                        <div class="point-label-first-hover">
                            <p>2013</p>
                        </div>
                        <div class="hover-tip-down">
                            <el-image :src="getImgUrl('timeLine-tip.png')" />
                            <p class="hover-tip-title">03 运营</p>
                            <p class="hover-tip-content">购入第一艘75,000立方米VLGC，Gas Jasmine </p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="secondChild" @mouseenter="state.isHoverSecond = true" @mouseleave="state.isHoverSecond = false">
                    <div v-show="!state.isHoverSecond">
                        <el-image :src="getImgUrl('timeLineUp.png')" class="image" />
                        <div class="point-label-up">
                            <p>2014</p>
                            <p style="line-height: 0;">-</p>
                            <p>2015</p>
                        </div>
                    </div>
                    <div v-show="state.isHoverSecond" class="child-hover-up">
                        <el-image :src="getImgUrl('timeLineUpHover.png')" class="image-hover" />
                        <div class="point-label-up-hover">
                            <p>2014</p>
                            <p style="line-height: 0;">-</p>
                            <p>2015</p>
                        </div>
                        <div class="hover-tip-up">
                            <el-image :src="getImgUrl('timeLine-tip.png')" />
                            <p class="hover-tip-title">03 运营</p>
                            <p class="hover-tip-content">与韩国大宇造船厂签订8艘VLGC新造船合同</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="thirdChild" @mouseenter="state.isHoverThird = true" @mouseleave="state.isHoverThird = false">
                    <div v-show="!state.isHoverThird">
                        <el-image :src="getImgUrl('timeLineDown.png')" class="image" />
                        <div class="point-label-down">
                            <p>2016</p>
                            <p style="line-height: 0;">-</p>
                            <p>2017</p>
                        </div>
                    </div>
                    <div v-show="state.isHoverThird" class="child-hover-down">
                        <el-image :src="getImgUrl('timeLineDownHover.png')" class="image-hover" />
                        <div class="point-label-down-hover">
                            <p>2016</p>
                            <p style="line-height: 0;">-</p>
                            <p>2017</p>
                        </div>
                        <div class="hover-tip-down">
                            <el-image :src="getImgUrl('timeLine-tip.png')" />
                            <p class="hover-tip-title">03 运营</p>
                            <p class="hover-tip-content">与国际知名客户签订5艘VLGC新造船长期租约合同，获国际市场高度认可</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="forthChild" @mouseenter="state.isHoverForth = true" @mouseleave="state.isHoverForth = false">
                    <div v-show="!state.isHoverForth">
                        <el-image :src="getImgUrl('timeLineUp.png')" class="image" />
                        <div class="point-label-up">
                            <p>2018</p>
                            <p style="line-height: 0;">-</p>
                            <p>2019</p>
                        </div>
                    </div>
                    <div v-show="state.isHoverForth" class="child-hover-up">
                        <el-image :src="getImgUrl('timeLineUpHover.png')" class="image-hover" />
                        <div class="point-label-up-hover">
                            <p>2018</p>
                            <p style="line-height: 0;">-</p>
                            <p>2019</p>
                        </div>
                        <div class="hover-tip-up">
                            <el-image :src="getImgUrl('timeLine-tip.png')" />
                            <p class="hover-tip-title">03 运营</p>
                            <p class="hover-tip-content">完成5艘LEG乙烯船舶购置及融资事项，交付并投入使用</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="fivthChild" @mouseenter="state.isHoverFivth = true" @mouseleave="state.isHoverFivth = false">
                    <div v-show="!state.isHoverFivth">
                        <el-image :src="getImgUrl('timeLineDown.png')" class="image" />
                        <div class="point-label-down">
                            <p>2019</p>
                            <p style="line-height: 0;">-</p>
                            <p>2022</p>
                        </div>
                    </div>
                    <div v-show="state.isHoverFivth" class="child-hover-down">
                        <el-image :src="getImgUrl('timeLineDownHover.png')" class="image-hover" />
                        <div class="point-label-down-hover">
                            <p>2019</p>
                            <p style="line-height: 0;">-</p>
                            <p>2022</p>
                        </div>
                        <div class="hover-tip-down">
                            <el-image :src="getImgUrl('timeLine-tip.png')" />
                            <p class="hover-tip-title">03 运营</p>
                            <p class="hover-tip-content">与英力士达成2艘VLEC乙烷船舶租约， 2条全球首制B型VLEC新造船全部交付运营</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="sexthChild" @mouseenter="state.isHoverSixth = true" @mouseleave="state.isHoverSixth = false">
                    <div v-show="!state.isHoverSixth">
                        <el-image :src="getImgUrl('timeLineUp.png')" class="image" />
                        <div class="point-label-up">
                            <p>2022</p>
                            <p style="line-height: 0;">-</p>
                            <p>2023</p>
                        </div>
                    </div>
                    <div v-show="state.isHoverSixth" class="child-hover-up">
                        <el-image :src="getImgUrl('timeLineUpHover.png')" class="image-hover" />
                        <div class="point-label-up-hover">
                            <p>2022</p>
                            <p style="line-height: 0;">-</p>
                            <p>2023</p>
                        </div>
                        <div class="hover-tip-up">
                            <el-image :src="getImgUrl('timeLine-tip.png')" />
                            <p class="hover-tip-title">03 运营</p>
                            <p class="hover-tip-content">继续新增VLEC运力，持续扩张船队</p>
                        </div>
                    </div>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { getImgUrl } from '@/utils/getImgUrl';
import { Swiper, SwiperSlide } from "swiper/vue";
import { Parallax, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const modules = [Parallax]
const state = reactive({
    isHoverFirst: false,
    isHoverSecond: false,
    isHoverThird: false,
    isHoverForth: false,
    isHoverFivth: false,
    isHoverSixth: false
})
</script>

<style scoped lang="less">
@media screen and (max-width:1366px) {
    .image {
        width: 12vw;
    }

    .image-hover {
        width: 16vw;
    }

    p {
        margin: 0;
        padding: 0;
    }

    .timeLine {
        background: no-repeat;
        background-size: contain;
        position: absolute;
        height: 100%;
        display: flex;
        padding-top: 250px;
    }

    .parallax-bg {
        position: absolute;
        left: 0;
        width: 170%;
        height: 100%;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
        background: no-repeat;
    }

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;
        width: 310px !important;
        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .child-hover-up {
        margin-left: -35px;
        margin-top: -70px;
    }

    .child-hover-down {
        margin-left: -31px;
    }

    .hover-tip-up {
        position: absolute;
        left: -13%;
        top: -132%;
    }

    .hover-tip-down {
        position: absolute;
        left: -18%;
        top: 95%;
    }

    .hover-tip-title {
        position: absolute;
        left: 38%;
        top: 5%;
        max-width: 12rem;
        font-size: 1.5rem;
        text-align: left;
        color: #fff;
    }

    .hover-tip-content {
        position: absolute;
        left: 7%;
        top: 30%;
        max-width: 12rem;
        font-size: 15px;
        text-align: left;
    }

    .point-label-first {
        position: absolute;
        left: 34%;
        top: 32%;
        font-size: 24px;
        font-weight: bold;
        color: gray;
    }

    .point-label-first-hover {
        position: absolute;
        left: 27%;
        top: 25%;
        font-size: 24px;
        font-weight: bold;
        color: #fff;
    }

    .point-label-up {
        position: absolute;
        left: 34%;
        top: 35%;
        font-size: 24px;
        font-weight: bold;
        color: gray;
    }

    .point-label-up-hover {
        position: absolute;
        left: 28%;
        top: 32%;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
    }

    .point-label-down {
        position: absolute;
        left: 34%;
        top: 21%;
        font-size: 24px;
        font-weight: bold;
        color: gray;
    }

    .point-label-down-hover {
        position: absolute;
        left: 28%;
        top: 20%;
        font-size: 20px;
        font-weight: bold;
        color: #fff;
    }

    .firstChild {
        position: absolute;
        top: 7%;
        left: 27%;
    }

    .secondChild {
        position: absolute;
        top: 1%;
        left: 6%;
    }

    .thirdChild {
        position: absolute;
        top: 7%;
        left: -12%;
    }

    .forthChild {
        position: absolute;
        top: 1%;
        left: -33%;
    }

    .fivthChild {
        position: absolute;
        top: 7%;
        left: -50%;
    }

    .sexthChild {
        position: absolute;
        top: 1%;
        left: -70%;
    }
}

@media screen and (min-width:1367px) {
    p {
        margin: 0;
        padding: 0;
    }

    .timeLine {
        background: no-repeat;
        background-size: contain;
        position: absolute;
        height: 100%;
        left: 11%;
        display: flex;
        padding-top: 300px;
    }

    .parallax-bg {
        position: absolute;
        left: 0;
        width: 170%;
        height: 100%;
        -webkit-background-size: cover;
        background-size: cover;
        background-position: center;
        background: no-repeat;
    }

    .swiper {
        width: 100%;
        height: 100%;
    }

    .swiper-slide {
        text-align: center;
        font-size: 18px;

        /* Center slide text vertically */
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .child-hover-up {
        margin-left: -35px;
        margin-top: -70px;
    }

    .child-hover-down {
        margin-left: -31px;
    }

    .hover-tip-up {
        position: absolute;
        left: -13%;
        top: -132%;
    }

    .hover-tip-down {
        position: absolute;
        left: -18%;
        top: 95%;
    }

    .hover-tip-title {
        position: absolute;
        left: 38%;
        top: 5%;
        max-width: 12rem;
        font-size: 1.5rem;
        text-align: left;
        color: #fff;
    }

    .hover-tip-content {
        position: absolute;
        left: 11%;
        top: 30%;
        max-width: 12rem;
        font-size: 1rem;
        text-align: left;
    }

    .point-label-first {
        position: absolute;
        left: 30%;
        top: 32%;
        font-size: 30px;
        font-weight: bold;
        color: gray;
    }

    .point-label-first-hover {
        position: absolute;
        left: 27%;
        top: 25%;
        font-size: 30px;
        font-weight: bold;
        color: #fff;
    }

    .point-label-up {
        position: absolute;
        left: 30%;
        top: 35%;
        font-size: 30px;
        font-weight: bold;
        color: gray;
    }

    .point-label-up-hover {
        position: absolute;
        left: 28%;
        top: 32%;
        font-size: 26px;
        font-weight: bold;
        color: #fff;
    }

    .point-label-down {
        position: absolute;
        left: 30%;
        top: 21%;
        font-size: 30px;
        font-weight: bold;
        color: gray;
    }

    .point-label-down-hover {
        position: absolute;
        left: 30%;
        top: 18%;
        font-size: 26px;
        font-weight: bold;
        color: #fff;
    }

    .firstChild {
        position: absolute;
        top: 7%;
        left: 15%;
    }

    .secondChild {
        position: absolute;
        top: -1%;
        left: -33%;
    }

    .thirdChild {
        position: absolute;
        top: 7%;
        left: -81%;
    }

    .forthChild {
        position: absolute;
        top: -1%;
        left: -130%;
    }

    .fivthChild {
        position: absolute;
        top: 7%;
        left: -177%;
    }

    .sexthChild {
        position: absolute;
        top: -1%;
        left: -225%;
    }
}
</style>