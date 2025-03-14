<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();
</script>

<template>
  <div class="welcome__content">
    <div class="welcome__content-inner">
      <p>
        <img alt="welcome-bg" src="@/assets/images/welcome/icon/welcome.png" />
        <i>xxxx</i>
        你好 欢迎使用xxxxxxxzz
      </p>
    </div>
    <ul class="welcome__content-list">
      <li @click="router.push('/smart-park')">
        <img alt="car" src="@/assets/images/welcome/icon/center/car.png" />
        <span>智慧停车</span>
      </li>
      <li>
        <img alt="distribution" src="@/assets/images/welcome/icon/center/distribution.png" />
        <span>智慧配送</span>
      </li>
      <li>
        <img alt="muck" src="@/assets/images/welcome/icon/center/muck.png" />
        <span>智慧渣土</span>
      </li>
      <li>
        <img alt="clean-city" src="@/assets/images/welcome/icon/center/clean-city.png" />
        <span>智慧洁城</span>
      </li>
      <li>
        <img alt="lamp" src="@/assets/images/welcome/icon/center/lamp.png" />
        <span>智慧路灯</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.welcome__content {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;

  &-inner {
    margin: 156px 0 0 0;
  }

  p {
    color: #fff;
    font-size: 16px;

    i {
      color: var(--color-primary-secondary);
    }
  }

  img {
    width: 239px;
    height: 34px;
  }
}

.welcome__content-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 104px 0 0 0;
  width: 1477px;
  height: 260px;

  li {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
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

    img {
      width: 108px;
      height: 108px;
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
