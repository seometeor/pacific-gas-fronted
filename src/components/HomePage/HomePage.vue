<template>
  <swiper :modules="modules" :slidesPerView="'auto'" :mousewheel="true" :direction="'vertical'">
    <swiper-slide style="height: 92vh;">
      <FirstPage />
    </swiper-slide>
    <swiper-slide style="height: 92vh;">
      <Fleet />
    </swiper-slide>
    <swiper-slide style="height: 92vh;">
      <Service />
    </swiper-slide>
    <swiper-slide style="height: 92vh;">
      <DataAxis />
    </swiper-slide>
    <!-- <swiper-slide style="height: 71vh;">
      <Story />
    </swiper-slide> -->
    <swiper-slide style="height: 92vh;">
      <Member />
    </swiper-slide>
    <swiper-slide style="height:51vh;">
      <Footer />
    </swiper-slide>
  </swiper>
</template>

<script setup lang="ts">
import FirstPage from "./components/FirstPage.vue";
import Fleet from "./components/Fleet.vue";
import Service from './components/Service.vue';
import DataAxis from './components/DataAxis.vue'
import Story from './components/Story.vue';
import Member from './components/Member.vue';
import Footer from "../Footer.vue";
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Mousewheel, Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'
const modules = [Mousewheel, Autoplay, Pagination, Navigation, Scrollbar]
</script>

<style lang="less" scoped>
.swiper {
  height: 92vh;
}
</style>
