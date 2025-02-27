<script lang="ts" setup>
import AppMain from '@/layout/components/AppMain/index.vue';
import Footer from '@/layout/components/Footer/index.vue';
import NavBar from '@/layout/components/NavBar/index.vue';
</script>

<template>
  <div class="layout">
    <div class="arrow left-[38px]">
      <img alt="左箭头" src="@/assets/images/arrow/arrow-left.png" />
    </div>
    <NavBar />
    <AppMain />
    <Footer />
    <div class="arrow right-[38px]">
      <img alt="左箭头" src="@/assets/images/arrow/arrow-right.png" />
    </div>
  </div>
</template>

<style scoped>
.layout {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/bg/bg.png') no-repeat center;
  background-size: cover;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  img {
    width: 65px;
  }
}
</style>
