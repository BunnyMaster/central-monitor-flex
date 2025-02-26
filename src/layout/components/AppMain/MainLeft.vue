<script lang="ts" setup></script>

<template>
  <div class="left mr-[20px]">
    <div class="pt-[55px] pl-[25px]" style="transform: rotateY(180deg)">
      <!-- 路况 -->
      <div class="road-condition w-[218px] h-[59px]">
        <h1 class="c-white">实时道路情况</h1>
      </div>

      <!-- 汽车列表 -->
      <ul class="car-list mt-[32px]">
        <li class="flex-x-around w-[330px] h-[60px]">
          <img alt="car-1" src="@/assets/images/layout/car/car-1.png" />
          <p class="c-white">入卡口（西北门）</p>
          <span class="dashed-circle c-primary-secondary border-b-primary-secondary">畅通</span>
        </li>
        <li class="flex-x-around w-[330px] h-[60px]">
          <img alt="car-1" src="@/assets/images/layout/car/car-1.png" />
          <p class="c-white">入卡口（东北门）</p>
          <span class="dashed-circle c-primary-secondary border-b-primary-secondary">畅通</span>
        </li>
        <li class="flex-x-around w-[330px] h-[60px]">
          <img alt="car-1" src="@/assets/images/layout/car/car-2.png" />
          <p class="c-white">入卡口（东北门）</p>
          <span class="dashed-circle c-warning border-b-warning">拥堵</span>
        </li>
        <li class="flex-x-around w-[330px] h-[60px]">
          <img alt="car-1" src="@/assets/images/layout/car/car-1.png" />
          <p class="c-white">入卡口（东南门）</p>
          <span class="dashed-circle c-primary-secondary border-b-primary-secondary">畅通</span>
        </li>
      </ul>

      <!-- 建议 -->
      <div class="suggest c-white">
        <h5>车流量建议</h5>
        <p>
          高峰时段大量车流量容易造成拥堵，主要由XXX企业、XXX企业的车辆构成，
          <span class="c-warning-secondary">可建议XXX企业向后延迟15min错峰入园。</span>
          高峰时段大量车流量容易造成拥堵， 主要由XXX企业、XXX企业的车辆构成
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.left {
  transform: rotateY(180deg);

  .car-list {
    li {
      width: 330px;
      height: 60px;
      margin: 0 0 9px 0;
      background: url('@/assets/images/bg/bg-frame.png') no-repeat center;
      background-size: cover;
    }
  }

  .suggest {
    margin: 24px 0 0 0;
    padding: 15px 14px 17px 20px;
    width: 330px;
    height: 157px;
    font-size: 14px;
    background: url('@/assets/images/bg/bg-suggest.png') no-repeat center;
    background-size: cover;
  }
}
</style>
