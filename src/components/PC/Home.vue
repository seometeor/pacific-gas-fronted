<template>
  <div class="homePage">
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
      <swiper-slide style="height: 92vh;">
        <Member />
      </swiper-slide>
      <swiper-slide style="height:21vh;">
        <Footer />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup lang="ts">
import FirstPage from "./HomePage/FirstPage.vue";
import Fleet from "./HomePage/Fleet.vue";
import Service from './HomePage/Service.vue';
import DataAxis from './HomePage/DataAxis.vue'
import Member from './HomePage/Member.vue';
import Footer from "./Footer.vue";
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'
import { Mousewheel, Autoplay, Pagination, Navigation, Scrollbar } from 'swiper'
const modules = [Mousewheel, Autoplay, Pagination, Navigation, Scrollbar]
</script>

<style lang="less" scoped>
.homePage {
  width: 100vw;
}

.swiper {
  height: 92vh;
}
</style>
