<script lang="ts" setup></script>

<template>
  <div class="right ml-[20px]">
    <div class="pt-[55px] pl-[25px]">
      <!-- 路况 -->
      <div class="road-condition w-[218px] h-[59px]">
        <h1 class="c-white">近7天车流量概览</h1>
      </div>

      <!-- 汽车列表 -->
      <ul class="car-list mt-[32px]">
        <li class="flex-x-around w-[330px] h-[60px]">
          <img alt="car-1" src="@/assets/images/layout/car/car-1.png" />
          <p class="c-white">入卡口（西北门）</p>
          <span class="dashed-circle c-[#66FFFF] border-b-[#66FFFF]">畅通</span>
        </li>
        <li class="flex-x-around w-[330px] h-[60px]">
          <img alt="car-1" src="@/assets/images/layout/car/car-1.png" />
          <p class="c-white">入卡口（东北门）</p>
          <span class="dashed-circle c-[#66FFFF] border-b-[#66FFFF]">畅通</span>
        </li>
        <li class="flex-x-around w-[330px] h-[60px]">
          <img alt="car-1" src="@/assets/images/layout/car/car-2.png" />
          <p class="c-white">入卡口（东北门）</p>
          <span class="dashed-circle c-[#FFBE44] border-b-[#FFBE44]">拥堵</span>
        </li>
        <li class="flex-x-around w-[330px] h-[60px]">
          <img alt="car-1" src="@/assets/images/layout/car/car-1.png" />
          <p class="c-white">入卡口（东南门）</p>
          <span class="dashed-circle c-[#66FFFF] border-b-[#66FFFF]">畅通</span>
        </li>
      </ul>

      <!-- 建议 -->
      <div class="suggest">
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

<style lang="scss" scoped></style>
