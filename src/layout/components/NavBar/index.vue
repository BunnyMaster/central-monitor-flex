<script lang="ts" setup></script>

<template>
  <header class="h-[105px]">
    <div class="time ml-[41px] c-primary">2025年2月25日22:45:14</div>

    <div class="title">
      <h1 class="c-white text-align-center">智慧智能监管中心</h1>
      <h2 class="text-align-center c-primary-secondary">车辆监控中心</h2>
    </div>

    <div class="bar-op flex items-center h-[36px]">
      <ul class="float-left flex-x-around w-[148px]">
        <li><img alt="icon-1" src="@/assets/images/layout/icon-1.png" /></li>
        <li><img alt="icon-2" src="@/assets/images/layout/icon-2.png" /></li>
        <li><img alt="icon-3" src="@/assets/images/layout/icon-3.png" /></li>
      </ul>
      <span class="float-left c-primary">王菠萝</span>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  background: url('@/assets/images/bg/bg-header.png') no-repeat center;
  background-size: cover;
}

.time {
  position: absolute;
  line-height: 60px;
  font-size: 14px;
}

.title {
  h1 {
    font-size: 42px;
    line-height: 60px;
  }

  h2 {
    font-size: 24px;
    line-height: 45px;
    color: var();
  }
}

.bar-op {
  position: absolute;
  top: 11px;
  right: 20px;
}
</style>
