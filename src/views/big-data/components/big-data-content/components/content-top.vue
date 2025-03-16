<script lang="ts" setup>
import { getImage } from '@/utils/image';

const list = [
  { title: '员工', img: '/images/big-data/bg-content-top-1.png' },
  { title: '智慧大楼', img: '/images/big-data/bg-content-top-2.png' },
  { title: '智慧设备', img: '/images/big-data/bg-content-top-3.png' },
  { title: '数据报表', img: '/images/big-data/bg-content-top-4.png' },
];
</script>

<template>
  <ul>
    <li v-for="(item, index) in list" :key="index">
      <img :src="getImage(item.img)" alt="" />
      <h2>{{ item.title }}</h2>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: space-between;
  margin: 39px 0 0 0;
  width: 748px;
  height: 351px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 171px;
    height: 283px;

    img {
      width: 171px;
      height: 191px;
      animation: shakeY 4s linear infinite;
    }

    h2 {
      width: 130px;
      height: 52px;
      font-size: 16px;
      line-height: 54px;
      text-align: center;
      color: var(--color-primary-secondary);
      background: url('@/assets/images/big-data/bg/bg-content-top-item.png') no-repeat center;
      background-size: cover;
    }
  }

  li:nth-child(1) {
    transform: translateY(68px);
  }

  li:nth-child(4) {
    transform: translateY(68px);
  }
}
</style>
