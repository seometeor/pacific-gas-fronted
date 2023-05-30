<template>
  <div class="navigation">
    <el-menu mode="horizontal" background-color="#596271" text-color="#fff" active-text-color="#ffd04b">
      <el-sub-menu index="1">
        <template #title>
          <span class="font-18">
            {{ $t('navigation.company') }}
          </span>
        </template>
        <el-menu-item index="1-1">
          <router-link :to="{ path: '/second/aboutUs' }" style="color: #fff;">
            {{ $t('navigation.aboutUs') }}
          </router-link>
        </el-menu-item>
        <el-menu-item index="1-2">
          <router-link :to="{ path: '/second/milestone' }" style="color: #fff;">
            {{ $t('navigation.milestone') }}
          </router-link>
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <span class="font-18">{{ $t('navigation.business') }}</span>
        </template>
        <el-menu-item index="2-1">
          <router-link :to="{ path: '/second/commercial' }" style="color: #fff;">
            {{ $t('navigation.commercial') }}
          </router-link>
        </el-menu-item>
        <el-menu-item index="2-2">
          <router-link :to="{ path: '/second/technical' }" style="color: #fff;">
            {{ $t('navigation.technical') }}
          </router-link>
        </el-menu-item>
        <el-menu-item index="2-3">
          <router-link :to="{ path: '/second/marine' }" style="color: #fff;">
            {{ $t('navigation.marine') }}
          </router-link>
        </el-menu-item>
      </el-sub-menu>
      <el-menu-item index="3">
        <router-link :to="{ path: '/second/fleetList' }">
          {{ $t('navigation.fleetList') }}
        </router-link>
      </el-menu-item>
      <el-menu-item index="4">
        <router-link :to="{ path: '/second/investorRelations' }">
          {{ $t('navigation.investorRelations') }}
        </router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link :to="{ path: '/second/careers' }">
          {{ $t('navigation.careers') }}
        </router-link>
      </el-menu-item>
      <el-menu-item index="6">
        <router-link :to="{ path: '/second/contactUs' }">
          {{ $t('navigation.contactUs') }}
        </router-link>
      </el-menu-item>
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
  font-size: 18px;
}

.font-18 {
  font-size: 18px;
}

.navigation {
  background-color: #596271;
}
</style>