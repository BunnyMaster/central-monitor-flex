<script lang="ts" setup>
import BarOp from '@/components/Common/BarOp.vue';
</script>

<template>
  <header>
    <div class="title">
      <h1 class="c-white">后台管理系统大标题</h1>
      <BarOp />
    </div>
  </header>
</template>

<style lang="scss" scoped>
.title {
  width: 100%;
  height: 108px;
  background: url('@/assets/images/header/bg-layout-header.png') no-repeat center;
  background-size: cover;

  h1 {
    text-align: center;
    line-height: 108px;
    font-size: 42px;
  }
}
</style>
