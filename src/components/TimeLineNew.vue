<template>
    <div class="parallax-bg" :style="{ backgroundImage: 'url(' + getImgUrl('line.png') + ')' }">
        <div class="firstChild" @mouseenter="state.isHoverFirst = true" @mouseleave="state.isHoverFirst = false">
            <div v-show="!state.isHoverFirst" :style="{ backgroundImage: 'url(' + getImgUrl('timeLineDown.png') + ')' }"
                style="width: 20vh;height: 20vh;background-size: cover;">
                <p class="point-label-first">2013</p>
            </div>
            <div v-show="state.isHoverFirst" class="child-hover-down"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineDownHover.png') + ')' }"
                style="width: 22vh;height: 40vh;background-size: cover;">
                <p class="point-label-first-hover">2013</p>
                <p class="hover-tip-title-down">03 运营</p>
                <p class="hover-tip-content-down">购入第一艘75,000立方米VLGC，Gas Jasmine </p>
            </div>
        </div>
        <div class="secondChild" @mouseenter="state.isHoverSecond = true" @mouseleave="state.isHoverSecond = false">
            <div v-show="!state.isHoverSecond" :style="{ backgroundImage: 'url(' + getImgUrl('timeLineUp.png') + ')' }"
                style="width: 20vh;height: 20vh;background-size: cover;">
                <div class="point-label-up">
                    <p>2014</p>
                    <p style="line-height: 0;">-</p>
                    <p>2015</p>
                </div>
            </div>
            <div v-show="state.isHoverSecond" class="child-hover-up"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineUpHover.png') + ')' }"
                style="width: 22vh;height: 40vh;background-size: cover;">
                <div class="point-label-up-hover">
                    <p>2014</p>
                    <p style="line-height: 0;">-</p>
                    <p>2015</p>
                </div>
                <p class="hover-tip-title-up">03 运营</p>
                <p class="hover-tip-content-up">与韩国大宇造船厂签订8艘VLGC新造船合同</p>
            </div>
        </div>
        <div class="thirdChild" @mouseenter="state.isHoverThird = true" @mouseleave="state.isHoverThird = false">
            <div v-show="!state.isHoverThird" :style="{ backgroundImage: 'url(' + getImgUrl('timeLineDown.png') + ')' }"
                style="width: 20vh;height: 20vh;background-size: cover;">
                <div class="point-label-down">
                    <p>2016</p>
                    <p style="line-height: 0;">-</p>
                    <p>2017</p>
                </div>
            </div>
            <div v-show="state.isHoverThird" class="child-hover-down"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineDownHover.png') + ')' }"
                style="width: 22vh;height: 40vh;background-size: cover;">
                <div class="point-label-down-hover">
                    <p>2016</p>
                    <p style="line-height: 0;">-</p>
                    <p>2017</p>
                </div>
                <p class="hover-tip-title-down">03 运营</p>
                <p class="hover-tip-content-down">与国际知名客户签订5艘VLGC新造船长期租约合同，获国际市场高度认可</p>
            </div>
        </div>
        <div class="forthChild" @mouseenter="state.isHoverForth = true" @mouseleave="state.isHoverForth = false">
            <div v-show="!state.isHoverForth" :style="{ backgroundImage: 'url(' + getImgUrl('timeLineUp.png') + ')' }"
                style="width: 20vh;height: 20vh;background-size: cover;">
                <div class="point-label-up">
                    <p>2018</p>
                    <p style="line-height: 0;">-</p>
                    <p>2019</p>
                </div>
            </div>
            <div v-show="state.isHoverForth" class="child-hover-up"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineUpHover.png') + ')' }"
                style="width: 22vh;height: 40vh;background-size: cover;">
                <div class="point-label-up-hover">
                    <p>2018</p>
                    <p style="line-height: 0;">-</p>
                    <p>2019</p>
                </div>
                <p class="hover-tip-title-up">03 运营</p>
                <p class="hover-tip-content-up">完成5艘LEG乙烯船舶购置及融资事项，交付并投入使用</p>
            </div>
        </div>
        <div class="fivthChild" @mouseenter="state.isHoverFivth = true" @mouseleave="state.isHoverFivth = false">
            <div v-show="!state.isHoverFivth" :style="{ backgroundImage: 'url(' + getImgUrl('timeLineDown.png') + ')' }"
                style="width: 20vh;height: 20vh;background-size: cover;">
                <div class="point-label-down">
                    <p>2019</p>
                    <p style="line-height: 0;">-</p>
                    <p>2022</p>
                </div>
            </div>
            <div v-show="state.isHoverFivth" class="child-hover-down"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineDownHover.png') + ')' }"
                style="width: 22vh;height: 40vh;background-size: cover;">
                <div class="point-label-down-hover">
                    <p>2019</p>
                    <p style="line-height: 0;">-</p>
                    <p>2022</p>
                </div>
                <p class="hover-tip-title-down">03 运营</p>
                <p class="hover-tip-content-down">与英力士达成2艘VLEC乙烷船舶租约， 2条全球首制B型VLEC新造船全部交付运营</p>
            </div>
        </div>
        <div class="sexthChild" @mouseenter="state.isHoverSixth = true" @mouseleave="state.isHoverSixth = false">
            <div v-show="!state.isHoverSixth" :style="{ backgroundImage: 'url(' + getImgUrl('timeLineUp.png') + ')' }"
                style="width: 20vh;height: 20vh;background-size: cover;">
                <div class="point-label-up">
                    <p>2022</p>
                    <p style="line-height: 0;">-</p>
                    <p>2023</p>
                </div>
            </div>
            <div v-show="state.isHoverSixth" class="child-hover-up"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineUpHover.png') + ')' }"
                style="width: 22vh;height: 40vh;background-size: cover;">
                <div class="point-label-up-hover">
                    <p>2022</p>
                    <p style="line-height: 0;">-</p>
                    <p>2023</p>
                </div>
                <p class="hover-tip-title-up">03 运营</p>
                <p class="hover-tip-content-up">继续新增VLEC运力，持续扩张船队</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { getImgUrl } from '@/utils/getImgUrl';

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
// @media screen and (max-width:1366px) {
//     .image {
//         width: 12vw;
//     }

//     .image-hover {
//         width: 16vw;
//     }

//     p {
//         margin: 0;
//         padding: 0;
//     }

//     .timeLine {
//         background: no-repeat;
//         background-size: contain;
//         position: absolute;
//         height: 100%;
//         display: flex;
//         padding-top: 250px;
//     }

//     .parallax-bg {
//         position: absolute;
//         width: 100vw;
//         height: 92vh;
//         background-size: cover;
//         background-position: center;
//     }

//     .child-hover-up {
//         margin-left: -35px;
//         margin-top: -70px;
//     }

//     .child-hover-down {
//         margin-left: -31px;
//     }

//     .hover-tip-up {
//         position: absolute;
//         left: -13%;
//         top: -132%;
//     }

//     .hover-tip-down {
//         position: absolute;
//         left: -18%;
//         top: 95%;
//     }

//     .hover-tip-title {
//         position: absolute;
//         left: 38%;
//         top: 5%;
//         max-width: 12rem;
//         font-size: 1.5rem;
//         text-align: left;
//         color: #fff;
//     }

//     .hover-tip-content {
//         position: absolute;
//         left: 7%;
//         top: 30%;
//         max-width: 12rem;
//         font-size: 15px;
//         text-align: left;
//     }

//     .point-label-first {
//         position: absolute;
//         left: 34%;
//         top: 32%;
//         font-size: 24px;
//         font-weight: bold;
//         color: gray;
//     }

//     .point-label-first-hover {
//         position: absolute;
//         left: 27%;
//         top: 25%;
//         font-size: 24px;
//         font-weight: bold;
//         color: #fff;
//     }

//     .point-label-up {
//         position: absolute;
//         left: 34%;
//         top: 35%;
//         font-size: 24px;
//         font-weight: bold;
//         color: gray;
//     }

//     .point-label-up-hover {
//         position: absolute;
//         left: 28%;
//         top: 32%;
//         font-size: 20px;
//         font-weight: bold;
//         color: #fff;
//     }

//     .point-label-down {
//         position: absolute;
//         left: 34%;
//         top: 21%;
//         font-size: 24px;
//         font-weight: bold;
//         color: gray;
//     }

//     .point-label-down-hover {
//         position: absolute;
//         left: 28%;
//         top: 20%;
//         font-size: 20px;
//         font-weight: bold;
//         color: #fff;
//     }

//     .firstChild {
//         position: absolute;
//         top: 42%;
//         left: 13%;
//     }

//     .secondChild {
//         position: absolute;
//         top: 39%;
//         left: 26%;
//     }

//     .thirdChild {
//         position: absolute;
//         top: 42%;
//         left: 39%;
//     }

//     .forthChild {
//         position: absolute;
//         top: 39%;
//         left: 52%;
//     }

//     .fivthChild {
//         position: absolute;
//         top: 40%;
//         left: 65%;
//     }

//     .sexthChild {
//         position: absolute;
//         top: 39%;
//         left: 78%;
//     }
// }


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
    width: 100vw;
    height: 92vh;
    background-size: cover;
    background-position: center;
    min-width: 1920px;
}

.child-hover-up {
    margin-left: -2vh;
    margin-top: -21vh;
}

.child-hover-down {
    margin-left: -1rem;
}

.hover-tip-title-up {
    position: absolute;
    left: 35%;
    top: -109%;
    font-size: 2.8vh;
    text-align: left;
    color: #fff;
}

.hover-tip-content-up {
    position: absolute;
    left: -2%;
    top: -83%;
    font-size: 1.6vh;
    text-align: left;
}

.hover-tip-title-down {
    position: absolute;
    left: 34%;
    top: 57%;
    font-size: 2.8vh;
    text-align: left;
    color: #fff;
}

.hover-tip-content-down {
    position: absolute;
    left: 0%;
    top: 70%;
    font-size: 1.6vh;
    text-align: left;
}

.point-label-first {
    position: absolute;
    left: 32%;
    top: 32%;
    font-size: 3vh;
    font-weight: bold;
    color: gray;
}

.point-label-first-hover {
    position: absolute;
    left: 29%;
    top: 14%;
    font-size: 3vh;
    font-weight: bold;
    color: #fff;
}

.point-label-up {
    position: absolute;
    left: 33%;
    top: 35%;
    font-size: 3vh;
    font-weight: bold;
    color: gray;
}

.point-label-up-hover {
    position: absolute;
    left: 33%;
    top: 37%;
    font-size: 2.8vh;
    font-weight: bold;
    color: #fff;
}

.point-label-down {
    position: absolute;
    left: 31%;
    top: 21%;
    font-size: 3vh;
    font-weight: bold;
    color: gray;
}

.point-label-down-hover {
    position: absolute;
    left: 32%;
    top: 9%;
    font-size: 2.8vh;
    font-weight: bold;
    color: #fff;
}

.firstChild {
    position: absolute;
    top: 42%;
    left: 13%;
}

.secondChild {
    position: absolute;
    top: 39%;
    left: 26%;
}

.thirdChild {
    position: absolute;
    top: 42%;
    left: 39%;
}

.forthChild {
    position: absolute;
    top: 39%;
    left: 52%;
}

.fivthChild {
    position: absolute;
    top: 40%;
    left: 65%;
}

.sexthChild {
    position: absolute;
    top: 39%;
    left: 78%;
}
</style>