<template>
  <div class="navigation">
    <el-menu mode="horizontal" background-color="#596271" text-color="#fff" active-text-color="#ffd04b">
      <el-sub-menu index="1">
        <template #title>
          <span class="font-16">
            {{ $t('navigation.company') }}
          </span>
        </template>
        <router-link :to="{ path: '/second/aboutUs' }" style="color: #fff;">
          <el-menu-item index="1-1">
            {{ $t('navigation.aboutUs') }}
          </el-menu-item>
        </router-link>
        <router-link :to="{ path: '/second/milestone' }" style="color: #fff;">
          <el-menu-item index="1-2">
            {{ $t('navigation.milestone') }}
          </el-menu-item>
        </router-link>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <span class="font-16">{{ $t('navigation.business') }}</span>
        </template>
        <router-link :to="{ path: '/second/commercial' }" style="color: #fff;">
          <el-menu-item index="2-1">
            {{ $t('navigation.commercial') }}
          </el-menu-item>
        </router-link>
        <router-link :to="{ path: '/second/technical' }" style="color: #fff;">
          <el-menu-item index="2-2">
            {{ $t('navigation.technical') }}
          </el-menu-item>
        </router-link>
        <router-link :to="{ path: '/second/marine' }" style="color: #fff;">
          <el-menu-item index="2-3">
            {{ $t('navigation.marine') }}
          </el-menu-item>
        </router-link>
      </el-sub-menu>
      <router-link :to="{ path: '/second/fleetList' }">
        <el-menu-item index="3">
          {{ $t('navigation.fleetList') }}
        </el-menu-item>
      </router-link>
      <router-link :to="{ path: '/second/sustainability' }">
        <el-menu-item index="4">
          {{ $t('navigation.sustainability') }}
        </el-menu-item>
      </router-link>
      <router-link :to="{ path: '/second/careers' }">
        <el-menu-item index="5">
          {{ $t('navigation.careers') }}
        </el-menu-item>
      </router-link>
      <router-link :to="{ path: '/second/contactUs' }">
        <el-menu-item index="6">
          {{ $t('navigation.contactUs') }}
        </el-menu-item>
      </router-link>
      <router-link :to="{ path: '/second/infoAnnouncement' }">
        <el-menu-item index="7">
          {{ $t('navigation.infoAnnouncement') }}
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>
  
<script setup lang="ts">

</script>
  
<style scoped>
.navigation {
  color: #fff;
  width: 100%;
}

.el-menu {
  justify-content: center;
}

.el-menu-item {
  font-size: 16px;
}

.font-16 {
  font-size: 16px;
}

.navigation {
  background-color: #596271;
}
</style>