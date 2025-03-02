<script lang="ts" setup>
import TruckMonitorCenterItem from '@/views/smart-parking/components/parking-content/truck-monitor-center-item.vue';
import TruckMonitorCenterPercent from '@/views/smart-parking/components/parking-content/truck-monitor-center-percent.vue';
</script>

<template>
  <div class="main-center flex-center">
    <div class="h-[570px] flex-y-between">
      <div class="main-center-title">
        <h1 class="c-white">卡口车辆监控</h1>
      </div>

      <!-- 中间布局 -->
      <div class="main-inner">
        <div class="pos-relative">
          <truck-monitor-center-item
            :count="45"
            class="top-[37px] left-[40px] w-[175px]"
            door="西北门"
          />
          <truck-monitor-center-percent :percent="44" class="top-[73px] left-[193px]" />
        </div>
        <div class="pos-relative">
          <truck-monitor-center-item
            :count="67"
            class="top-[37px] left-[120px] w-[175px]"
            door="东北门"
          />
          <truck-monitor-center-percent :percent="25" class="top-[73px] right-[192px]" />
        </div>
        <div class="pos-relative">
          <truck-monitor-center-item
            :count="345"
            class="top-[45px] left-[34px] w-[175px]"
            door="西南门"
          />
          <truck-monitor-center-percent :percent="25" class="top-[40px] left-[193px]" />
        </div>
        <div class="pos-relative">
          <truck-monitor-center-item
            :count="145"
            class="top-[45px] left-[130px] w-[175px]"
            door="东南门"
          />
          <truck-monitor-center-percent :percent="44" class="top-[40px] left-[66px]" />
        </div>

        <div class="main-inner-center">
          <div class="main-inner-middle flex-center">
            <h1 class="c-primary-secondary">智能管控</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-center {
  width: 824px;
  height: 650px;
  background: url('@/assets/images/smart-parking/bg/bg-middle.png') no-repeat center;
  background-size: cover;
}

// 中间部分标题
.main-center-title {
  height: 61px;
  background: url('@/assets/images/smart-parking/bg/bg-main-title.png') no-repeat center;
  background-size: cover;

  h1 {
    font-size: 22px;
    text-align: center;
  }
}

// 中间部分四个部分
.main-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  position: relative;
  margin: 28px 0 77px 0;
  width: 666px;
  height: 400px;
  background: url('@/assets/images/smart-parking/bg/bg-main-1.png') no-repeat center;
  background-size: cover;

  // 中心智能管控
  .main-inner-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 138px;
    height: 138px;

    .main-inner-middle {
      width: 100%;
      height: 100%;
      background: url('@/assets/images/smart-parking/bg/bg-main-center.png');
      background-size: cover;
      font-size: 19px;
      animation: rotate 30s linear infinite;
    }

    h1 {
      width: 53px;
      text-align: center;
      animation: rotate-reverse 30s linear infinite;
    }
  }
}
</style>
