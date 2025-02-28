<script lang="ts" setup></script>

<template>
  <header class="h-[105px]">
    <div class="time c-primary">2025年2月25日22:45:14</div>

    <div class="title">
      <h1 class="c-white">智慧智能监管中心</h1>
      <h2 class="c-primary-secondary">车辆监控中心</h2>
    </div>

    <div class="bar-op">
      <ul class="flex-x-around">
        <li><img alt="icon-1" src="@/assets/images/icon/icon-1.png" /></li>
        <li><img alt="icon-2" src="@/assets/images/icon/icon-2.png" /></li>
        <li><img alt="icon-3" src="@/assets/images/icon/icon-3.png" /></li>
      </ul>
      <span class="c-primary">王菠萝</span>
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
  margin: 0 0 0 41px;
  line-height: 60px;
  font-size: 14px;
}

.title {
  text-align: center;

  h1 {
    font-size: 42px;
    line-height: 60px;
  }

  h2 {
    font-size: 24px;
    line-height: 45px;
    font-weight: lighter;
  }
}

.bar-op {
  display: flex;
  align-items: center;
  position: absolute;
  top: 11px;
  right: 20px;
  height: 36px;

  ul {
    float: left;
    width: 148px;

    img {
      width: 36px;
    }
  }

  span {
    float: left;
    font-size: 12px;
  }
}
</style>
