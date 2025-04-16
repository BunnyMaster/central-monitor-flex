<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const list = [
  { title: '智慧停车', image: '/images/welcome/car.png', target: '/smart-park' },
  { title: '智慧配送', image: '/images/welcome/distribution.png', target: '/data-analyse' },
  { title: '智慧渣土', image: '/images/welcome/muck.png', target: '/smart-park' },
  { title: '智慧洁城', image: '/images/welcome/clean-city.png', target: '/smart-park' },
  { title: '智慧路灯', image: '/images/welcome/lamp.png', target: '/smart-park' },
];
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
      <li v-for="(item, index) in list" :key="index" @click="router.push(item.target)">
        <img :src="item.image" alt="distribution" />
        <span>{{ item.title }}</span>
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
    animation: flipInY 0.6s 0.4s;
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
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 280px;
    height: 260px;
    cursor: pointer;
    transition: all 1s;

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

    &:nth-child(n):hover {
      background: linear-gradient(to bottom, #164ec2c9, #1fa3dec9);
    }

    img {
      width: 108px;
      height: 108px;
      animation: headShake 2s ease-out alternate infinite;
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
