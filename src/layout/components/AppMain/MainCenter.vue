<script lang="ts" setup></script>

<template>
  <div class="main-center flex-center">
    <div class="h-[570px] flex-y-between">
      <div class="main-center-title">
        <h1 class="c-white">卡口车辆监控</h1>
      </div>

      <!-- 中间布局 -->
      <div class="main-inner">
        <div class="main-inner-1">智能管控</div>
        <div class="main-inner-2">智能管控</div>
        <div class="main-inner-3">智能管控</div>
        <div class="main-inner-3">智能管控</div>

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
  background: url('@/assets/images/bg/bg-middle.png') no-repeat center;
  background-size: cover;

  .main-center-title {
    height: 61px;
    background: url('@/assets/images/bg/bg-main-title.png');

    h1 {
      font-size: 22px;
      text-align: center;
    }
  }

  // 中间部分四个部分
  .main-inner {
    margin: 28px 0 77px 0;
    width: 666px;
    position: relative;
    height: 400px;
    background: url('@/assets/images/bg/bg-main-1.png') no-repeat center;
    background-size: cover;
  }
}

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
    background: url('@/assets/images/bg/bg-main-center.png');
    background-size: cover;
    animation: rotate 30s linear infinite;
  }

  h1 {
    width: 53px;
    font-size: 19px;
    text-align: center;
    animation: rotate-reverse 30s linear infinite;
  }
}
</style>
