<script lang="ts" setup></script>

<template>
  <div class="smart-park__sidebar smart-park__sidebar--left">
    <div class="pt-[55px] pl-[25px]" style="transform: rotateY(180deg)">
      <!-- 路况 -->
      <div class="smart-park__sidebar-title">
        <h1>实时道路情况</h1>
      </div>

      <!-- 汽车列表 -->
      <ul class="mt-[32px]">
        <li class="smart-park__sidebar--left-item">
          <img alt="car-1" src="../../../../../../assets/images/smart-park/car/car-1.png" />
          <p>入卡口（西北门）</p>
          <span class="dashed-circle c-primary-secondary border-b-primary-secondary">畅通</span>
        </li>
        <li class="smart-park__sidebar--left-item">
          <img alt="car-1" src="../../../../../../assets/images/smart-park/car/car-1.png" />
          <p>入卡口（东北门）</p>
          <span class="dashed-circle c-primary-secondary border-b-primary-secondary">畅通</span>
        </li>
        <li class="smart-park__sidebar--left-item">
          <img alt="car-1" src="../../../../../../assets/images/smart-park/car/car-2.png" />
          <p>入卡口（东北门）</p>
          <span class="dashed-circle c-warning border-b-warning">拥堵</span>
        </li>
        <li class="smart-park__sidebar--left-item">
          <img alt="car-1" src="../../../../../../assets/images/smart-park/car/car-1.png" />
          <p>入卡口（东南门）</p>
          <span class="dashed-circle c-primary-secondary border-b-primary-secondary">畅通</span>
        </li>
      </ul>

      <!-- 建议 -->
      <div class="smart-park__sidebar--left-suggest">
        <h5>车流量建议</h5>
        <p>
          高峰时段大量车流量容易造成拥堵，主要由XXX企业、XXX企业的车辆构成，
          <span>可建议XXX企业向后延迟15min错峰入园。</span>
          高峰时段大量车流量容易造成拥堵， 主要由XXX企业、XXX企业的车辆构成
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.smart-park__sidebar--left {
  margin: 0 20px 0 0;
  transform: rotateY(180deg);

  &-item {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 330px;
    height: 61px;
    margin: 0 0 9px 0;
    background: url('@/assets/images/smart-park/bg/bg-frame.png') no-repeat center;
    background-size: cover;

    img {
      width: 60px;
    }

    p {
      color: #fff;
      font-size: 14px;
    }
  }

  &-suggest {
    margin: 24px 0 0 0;
    padding: 15px 14px 17px 20px;
    width: 330px;
    height: 157px;
    color: #fff;
    font-size: 14px;
    background: url('@/assets/images/smart-park/bg/bg-suggest.png') no-repeat center;
    background-size: cover;

    span {
      color: var(--color-warning-secondary);
    }
  }
}
</style>
