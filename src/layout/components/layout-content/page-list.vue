<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <ul class="page-list flex-x-between">
    <li class="flex-y-center" @click="router.push('/smart-parking')">
      <img alt="car" src="@/assets/images/icon/smart/car.png" />
      <span>智慧停车</span>
    </li>
    <li class="flex-y-center">
      <img alt="distribution" src="@/assets/images/icon/smart/distribution.png" />
      <span>智慧配送</span>
    </li>
    <li class="flex-y-center">
      <img alt="muck" src="@/assets/images/icon/smart/muck.png" />
      <span>智慧渣土</span>
    </li>
    <li class="flex-y-center">
      <img alt="clean-city" src="@/assets/images/icon/smart/clean-city.png" />
      <span>智慧洁城</span>
    </li>
    <li class="flex-y-center">
      <img alt="lamp" src="@/assets/images/icon/smart/lamp.png" />
      <span>智慧路灯</span>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.page-list {
  margin: 104px 0 0 0;
  width: 1477px;
  height: 260px;

  li {
    position: relative;
    width: 280px;
    height: 260px;
    cursor: pointer;

    &:nth-child(n):hover {
      background: linear-gradient(to bottom, #164ec2c9, #1fa3dec9);
    }

    &:nth-child(1) {
      background: linear-gradient(to bottom, #006efec9, #494affc9);
    }

    &:nth-child(2) {
      background: linear-gradient(to bottom, #2ad3acc9, #037a9cc9);
    }

    &:nth-child(3) {
      background: linear-gradient(to bottom, #4c09bec9, #870effc9);
    }

    &:nth-child(4) {
      background: linear-gradient(to bottom, #00b9ffc9, #034f7ec9);
    }

    &:nth-child(5) {
      background: linear-gradient(to bottom, #0ad1d1c9, #10607cc9);
    }

    span {
      position: relative;
      display: block;
      margin: 38px 0 0 0;
      font-size: 28px;
      color: #ffffff;

      &::after {
        content: '';
        position: absolute;
        bottom: -9px;
        left: 50%;
        transform: translateX(-50%);
        width: 37px;
        height: 5px;
        background: #fff;
        border-radius: 3px;
        box-shadow: inset #707070 0 0 3px 1px;
      }
    }
  }
}
</style>
