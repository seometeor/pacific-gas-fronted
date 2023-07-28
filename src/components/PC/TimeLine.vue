<template>
    <div class="parallax-bg" :style="{ backgroundImage: 'url(' + getImgUrl('line.png') + ')' }">
        <div class="firstChild" @mouseenter="mouseEnterFirst" @mouseleave="mouseLeaveFirst">
            <div v-show="!state.isHoverFirst" :style="{ backgroundImage: 'url(' + getImgUrl('timeLine.png') + ')' }"
                class="point-normal">
                <p class="point-label-first">2013</p>
            </div>
            <div v-show="state.isHoverFirst" class="child-hover-down"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineDownHover.png') + ')' }">
                <p class="point-label-first-hover">2013</p>
                <p class="hover-tip-content-first">购入第一艘75,000立方米VLGC，Gas Jasmine</p>
            </div>
        </div>
        <div class="secondChild" @mouseenter="mouseEnterSecond" @mouseleave="mouseLeaveSecond">
            <div v-show="!state.isHoverSecond" :style="{ backgroundImage: 'url(' + getImgUrl('timeLine.png') + ')' }"
                class="point-normal">
                <div class="point-label-up">
                    <p>2014</p>
                    <p style="line-height: 0;">-</p>
                    <p>2015</p>
                </div>
            </div>
            <div v-show="state.isHoverSecond" class="child-hover-up"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineUpHover.png') + ')' }">
                <div class="point-label-up-hover">
                    <p>2014</p>
                    <p style="line-height: 0;">-</p>
                    <p>2015</p>
                </div>
                <p class="hover-tip-content-up">与韩国大宇造船厂签订8艘VLGC新造船合同</p>
            </div>
        </div>
        <div class="thirdChild" @mouseenter="mouseEnterThird" @mouseleave="mouseLeaveThird">
            <div v-show="!state.isHoverThird" :style="{ backgroundImage: 'url(' + getImgUrl('timeLine.png') + ')' }"
                class="point-normal">
                <div class="point-label-down">
                    <p>2016</p>
                    <p style="line-height: 0;">-</p>
                    <p>2017</p>
                </div>
            </div>
            <div v-show="state.isHoverThird" class="child-hover-down"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineDownHover.png') + ')' }">
                <div class="point-label-down-hover">
                    <p>2016</p>
                    <p style="line-height: 0;">-</p>
                    <p>2017</p>
                </div>
                <p class="hover-tip-content-down">与国际知名客户签订5艘VLGC新造船长期租约合同，获国际市场高度认可</p>
            </div>
        </div>
        <div class="forthChild" @mouseenter="mouseEnterForth" @mouseleave="mouseLeaveForth">
            <div v-show="!state.isHoverForth" :style="{ backgroundImage: 'url(' + getImgUrl('timeLine.png') + ')' }"
                class="point-normal">
                <div class="point-label-up">
                    <p>2018</p>
                    <p style="line-height: 0;">-</p>
                    <p>2019</p>
                </div>
            </div>
            <div v-show="state.isHoverForth" class="child-hover-up"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineUpHover.png') + ')' }">
                <div class="point-label-up-hover">
                    <p>2018</p>
                    <p style="line-height: 0;">-</p>
                    <p>2019</p>
                </div>
                <p class="hover-tip-content-up">完成5艘LEG乙烯船舶购置及融资事项，交付并投入使用</p>
            </div>
        </div>
        <div class="fivthChild" @mouseenter="mouseEnterFivth" @mouseleave="mouseLeaveFivth">
            <div v-show="!state.isHoverFivth" :style="{ backgroundImage: 'url(' + getImgUrl('timeLine.png') + ')' }"
                class="point-normal">
                <div class="point-label-down">
                    <p>2019</p>
                    <p style="line-height: 0;">-</p>
                    <p>2022</p>
                </div>
            </div>
            <div v-show="state.isHoverFivth" class="child-hover-down"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineDownHover.png') + ')' }">
                <div class="point-label-down-hover">
                    <p>2019</p>
                    <p style="line-height: 0;">-</p>
                    <p>2022</p>
                </div>
                <p class="hover-tip-content-down">与英力士达成2艘VLEC乙烷船舶租约， 2条全球首制B型VLEC新造船全部交付运营</p>
            </div>
        </div>
        <div class="sexthChild" @mouseenter="mouseEnterSixth" @mouseleave="mouseLeaveSixth">
            <div v-show="!state.isHoverSixth" :style="{ backgroundImage: 'url(' + getImgUrl('timeLine.png') + ')' }"
                class="point-normal">
                <div class="point-label-up">
                    <p>2022</p>
                    <p style="line-height: 0;">-</p>
                    <p>2023</p>
                </div>
            </div>
            <div v-show="state.isHoverSixth" class="child-hover-up"
                :style="{ backgroundImage: 'url(' + getImgUrl('timeLineUpHover.png') + ')' }">
                <div class="point-label-up-hover">
                    <p>2022</p>
                    <p style="line-height: 0;">-</p>
                    <p>2023</p>
                </div>
                <p class="hover-tip-content-up">继续新增VLEC运力，持续扩张船队</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onBeforeUnmount, onMounted, reactive } from 'vue';
import { getImgUrl } from '@/utils/getImgUrl';

var timer: any = null

const state = reactive({
    isHoverFirst: true,
    isHoverSecond: false,
    isHoverThird: false,
    isHoverForth: false,
    isHoverFivth: false,
    isHoverSixth: false
})

const mouseEnterFirst = () => {
    state.isHoverFirst = true
    state.isHoverSecond = false
    state.isHoverThird = false
    state.isHoverForth = false
    state.isHoverFivth = false
    state.isHoverSixth = false
    clearInterval(timer)
    timer = null
}

const mouseEnterSecond = () => {
    state.isHoverFirst = false
    state.isHoverSecond = true
    state.isHoverThird = false
    state.isHoverForth = false
    state.isHoverFivth = false
    state.isHoverSixth = false
    clearInterval(timer)
    timer = null
}

const mouseEnterThird = () => {
    state.isHoverFirst = false
    state.isHoverSecond = false
    state.isHoverThird = true
    state.isHoverForth = false
    state.isHoverFivth = false
    state.isHoverSixth = false
    clearInterval(timer)
    timer = null
}

const mouseEnterForth = () => {
    state.isHoverFirst = false
    state.isHoverSecond = false
    state.isHoverThird = false
    state.isHoverForth = true
    state.isHoverFivth = false
    state.isHoverSixth = false
    clearInterval(timer)
    timer = null
}

const mouseEnterFivth = () => {
    state.isHoverFirst = false
    state.isHoverSecond = false
    state.isHoverThird = false
    state.isHoverForth = false
    state.isHoverFivth = true
    state.isHoverSixth = false
    clearInterval(timer)
    timer = null
}

const mouseEnterSixth = () => {
    state.isHoverFirst = false
    state.isHoverSecond = false
    state.isHoverThird = false
    state.isHoverForth = false
    state.isHoverFivth = false
    state.isHoverSixth = true
    clearInterval(timer)
    timer = null
}

const mouseLeaveFirst = () => {
    timer = setInterval(circulate, 3000)
}

const mouseLeaveSecond = () => {
    timer = setInterval(circulate, 3000)
}

const mouseLeaveThird = () => {
    timer = setInterval(circulate, 3000)
}

const mouseLeaveForth = () => {
    timer = setInterval(circulate, 3000)
}

const mouseLeaveFivth = () => {
    timer = setInterval(circulate, 3000)
}

const mouseLeaveSixth = () => {
    timer = setInterval(circulate, 3000)
}

const circulate = () => {
    if (state.isHoverFirst) {
        state.isHoverFirst = false
        state.isHoverSecond = true
    } else if (state.isHoverSecond) {
        state.isHoverSecond = false
        state.isHoverThird = true
    } else if (state.isHoverThird) {
        state.isHoverThird = false
        state.isHoverForth = true
    } else if (state.isHoverForth) {
        state.isHoverForth = false
        state.isHoverFivth = true
    } else if (state.isHoverFivth) {
        state.isHoverFivth = false
        state.isHoverSixth = true
    } else if (state.isHoverSixth) {
        state.isHoverSixth = false
        state.isHoverFirst = true
    }
}

onMounted(() => {
    timer = setInterval(circulate, 3000)
})

onBeforeUnmount(() => {
    clearInterval(timer)
})
</script>

<style scoped lang="less">
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

.point-normal {
    width: 24vh;
    height: 24vh;
    background-size: cover;
}

.child-hover-up {
    margin-left: -0.5vh;
    margin-top: -24vh;
    width: 24vh;
    height: 48vh;
    background-size: cover;
}

.child-hover-down {
    margin-left: -0.5vh;
    width: 24vh;
    height: 48vh;
    background-size: cover;
}

.hover-tip-content-first {
    position: absolute;
    left: 5%;
    right: 5%;
    top: 76%;
    font-size: 1.6vh;
    text-align: center;
}

.hover-tip-content-up {
    position: absolute;
    left: 5%;
    right: 5%;
    top: -60%;
    font-size: 1.6vh;
    text-align: center;
}

.hover-tip-content-down {
    position: absolute;
    left: 5%;
    right: 5%;
    top: 74%;
    font-size: 1.6vh;
    text-align: center;
}

.point-label-first {
    position: absolute;
    left: 36%;
    top: 40%;
    font-size: 3vh;
    font-weight: bold;
    color: gray;
}

.point-label-first-hover {
    position: absolute;
    left: 38%;
    top: 20.5%;
    font-size: 2.5vh;
    font-weight: bold;
    color: #fff;
}

.point-label-up {
    position: absolute;
    left: 35.5%;
    top: 31%;
    font-size: 3vh;
    font-weight: bold;
    color: gray;
}

.point-label-up-hover {
    position: absolute;
    left: 38%;
    top: 37%;
    font-size: 2.5vh;
    font-weight: bold;
    color: #fff;
}

.point-label-down {
    position: absolute;
    left: 36%;
    top: 31%;
    font-size: 3vh;
    font-weight: bold;
    color: gray;
}

.point-label-down-hover {
    position: absolute;
    left: 38%;
    top: 17%;
    font-size: 2.5vh;
    font-weight: bold;
    color: #fff;
}

@media screen and (max-width: 1366px) {
    .point-normal {
        width: 30vh;
        height: 30vh;
        background-size: cover;
    }

    .child-hover-up {
        margin-left: -0.5vh;
        margin-top: -30vh;
        width: 30vh;
        height: 60vh;
        background-size: cover;
    }

    .child-hover-down {
        margin-left: -0.5vh;
        width: 30vh;
        height: 60vh;
        background-size: cover;
    }

    .hover-tip-content-first {
        position: absolute;
        left: 5%;
        right: 5%;
        top: 75%;
        font-size: 2vh;
        text-align: center;
    }

    .hover-tip-content-up {
        position: absolute;
        left: 5%;
        right: 5%;
        top: -60%;
        font-size: 2vh;
        text-align: center;
    }

    .hover-tip-content-down {
        position: absolute;
        left: 5%;
        right: 5%;
        top: 74%;
        font-size: 2vh;
        text-align: center;
    }

    .point-label-first {
        position: absolute;
        left: 35%;
        top: 40%;
        font-size: 4vh;
        font-weight: bold;
        color: gray;
    }

    .point-label-first-hover {
        position: absolute;
        left: 37%;
        top: 20.5%;
        font-size: 3.5vh;
        font-weight: bold;
        color: #fff;
    }

    .point-label-up {
        position: absolute;
        left: 35%;
        top: 30%;
        font-size: 4vh;
        font-weight: bold;
        color: gray;
    }

    .point-label-up-hover {
        position: absolute;
        left: 37%;
        top: 36%;
        font-size: 3.5vh;
        font-weight: bold;
        color: #fff;
    }

    .point-label-down {
        position: absolute;
        left: 35%;
        top: 30%;
        font-size: 4vh;
        font-weight: bold;
        color: gray;
    }

    .point-label-down-hover {
        position: absolute;
        left: 37%;
        top: 16%;
        font-size: 3.5vh;
        font-weight: bold;
        color: #fff;
    }

    .firstChild {
        position: absolute;
        top: 34%;
        left: 12.5%;
    }

    .secondChild {
        position: absolute;
        top: 34%;
        left: 25%;
    }

    .thirdChild {
        position: absolute;
        top: 34%;
        left: 37.8%;
    }

    .forthChild {
        position: absolute;
        top: 34%;
        left: 50.4%;
    }

    .fivthChild {
        position: absolute;
        top: 34%;
        left: 63.2%;
    }

    .sexthChild {
        position: absolute;
        top: 34%;
        left: 75.7%;
    }
}

@media screen and (min-width: 1367px) {
    .firstChild {
        position: absolute;
        top: 37%;
        left: 12.5%;
    }

    .secondChild {
        position: absolute;
        top: 37%;
        left: 25.3%;
    }

    .thirdChild {
        position: absolute;
        top: 37%;
        left: 38%;
    }

    .forthChild {
        position: absolute;
        top: 37%;
        left: 50.6%;
    }

    .fivthChild {
        position: absolute;
        top: 37%;
        left: 63.3%;
    }

    .sexthChild {
        position: absolute;
        top: 37%;
        left: 75.9%;
    }
}

@media screen and (min-width: 1921px) {
    .firstChild {
        position: absolute;
        top: 37%;
        left: 5.2%;
    }

    .secondChild {
        position: absolute;
        top: 37%;
        left: 20%;
    }

    .thirdChild {
        position: absolute;
        top: 37%;
        left: 35.1%;
    }

    .forthChild {
        position: absolute;
        top: 37%;
        left: 50%;
    }

    .fivthChild {
        position: absolute;
        top: 37%;
        left: 65%;
    }

    .sexthChild {
        position: absolute;
        top: 37%;
        left: 80%;
    }
}

@media screen and (min-width: 2151px) {
    .firstChild {
        position: absolute;
        top: 37%;
        left: 12.5%;
    }

    .secondChild {
        position: absolute;
        top: 37%;
        left: 25.3%;
    }

    .thirdChild {
        position: absolute;
        top: 37%;
        left: 38%;
    }

    .forthChild {
        position: absolute;
        top: 37%;
        left: 50.6%;
    }

    .fivthChild {
        position: absolute;
        top: 37%;
        left: 63.3%;
    }

    .sexthChild {
        position: absolute;
        top: 37%;
        left: 75.9%;
    }
}

@media screen and (min-width: 3071px) {
    .firstChild {
        position: absolute;
        top: 37%;
        left: 5.5%;
    }

    .secondChild {
        position: absolute;
        top: 37%;
        left: 20.3%;
    }

    .thirdChild {
        position: absolute;
        top: 37%;
        left: 35.3%;
    }

    .forthChild {
        position: absolute;
        top: 37%;
        left: 50%;
    }

    .fivthChild {
        position: absolute;
        top: 37%;
        left: 65%;
    }

    .sexthChild {
        position: absolute;
        top: 37%;
        left: 79.9%;
    }
}
</style>