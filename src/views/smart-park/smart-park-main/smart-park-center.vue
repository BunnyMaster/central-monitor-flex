<script lang="ts" setup>
import CentralItem from '@/views/smart-park/smart-park-main/components/central-item.vue';
import CentralPercent from '@/views/smart-park/smart-park-main/components/central-percent.vue';
</script>

<template>
  <div class="smart-park__center">
    <div class="h-[570px] flex-y-between">
      <div class="smart-park__center-title">
        <h1>卡口车辆监控</h1>
      </div>

      <!-- 中间布局 -->
      <div class="smart-park__center-inner">
        <div class="pos-relative">
          <central-item :count="45" class="top-[37px] left-[40px] w-[175px]" door="西北门" />
          <central-percent :percent="44" class="top-[73px] left-[193px]" />
        </div>
        <div class="pos-relative">
          <central-item :count="67" class="top-[37px] left-[120px] w-[175px]" door="东北门" />
          <central-percent :percent="25" class="top-[73px] right-[192px]" />
        </div>
        <div class="pos-relative">
          <central-item :count="345" class="top-[45px] left-[34px] w-[175px]" door="西南门" />
          <central-percent :percent="25" class="top-[40px] left-[193px]" />
        </div>
        <div class="pos-relative">
          <central-item :count="145" class="top-[45px] left-[130px] w-[175px]" door="东南门" />
          <central-percent :percent="44" class="top-[40px] left-[66px]" />
        </div>

        <div class="smart-park__center-content">
          <div class="smart-park__center-content-headline flex-center">
            <h1>智能管控</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.smart-park__center {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 824px;
  height: 650px;
  background: url('@/assets/images/smart-park/bg/bg-middle.png') no-repeat center;
  background-size: cover;

  // 中间部分标题
  &-title {
    height: 61px;
    background: url('@/assets/images/smart-park/bg/bg-main-title.png') no-repeat center;
    background-size: cover;

    h1 {
      color: #fff;
      font-size: 22px;
      text-align: center;
    }
  }

  // 中间部分四个部分
  &-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    position: relative;
    margin: 28px 0 77px 0;
    width: 666px;
    height: 400px;
    background: url('@/assets/images/smart-park/bg/bg-main-1.png') no-repeat center;
    background-size: cover;
  }

  // 中心智能管控
  &-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 138px;
    height: 138px;

    &-headline {
      width: 100%;
      height: 100%;
      background: url('@/assets/images/smart-park/bg/bg-main-center.png');
      background-size: cover;
      font-size: 19px;
      animation: rotate 30s linear infinite;

      h1 {
        width: 53px;
        color: var(--color-primary-secondary);
        text-align: center;
        animation: rotate-reverse 30s linear infinite;
      }
    }
  }
}
</style>
