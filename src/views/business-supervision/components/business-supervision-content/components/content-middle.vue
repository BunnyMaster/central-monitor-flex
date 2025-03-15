<script lang="ts" setup>
import { getImage } from '@/utils/image';

const list = [
  {
    img: '../assets/images/business-supervision/bg/content/bg-middle-1.png',
    title: '员工',
    describe: '相关员工',
    amount: 365,
  },
  {
    img: '../assets/images/business-supervision/bg/content/bg-middle-2.png',
    title: '智慧大楼',
    describe: '区域面积/㎡',
    amount: 365,
  },
  {
    img: '../assets/images/business-supervision/bg/content/bg-middle-3.png',
    title: '智慧设备',
    describe: '设备总数',
    amount: 1123,
  },
  {
    img: '../assets/images/business-supervision/bg/content/bg-middle-4.png',
    title: '数据报表',
    describe: '报表下载总数',
    amount: 287,
  },
];
</script>

<template>
  <ul class="business-supervision__middle">
    <li v-for="(item, index) in list" :key="index">
      <img :alt="`bg-middle-${index}`" :src="getImage(item.img)" />
      <h2>{{ item.title }}</h2>
      <div class="business-supervision__middle-detail">
        <strong>{{ item.amount }}</strong>
        <span>{{ item.describe }}</span>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.business-supervision__middle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0 0 0;
  width: 761px;
  height: 407px;
  background: url('@/assets/images/business-supervision/bg/content/bg-middle.png') no-repeat center;
  background-size: cover;

  li {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
      width: 162px;
      height: 183px;
      object-fit: cover;
      animation: shakeY 4s ease-in-out infinite;
    }

    h2 {
      margin: 17px 0 18px 0;
      width: 140px;
      height: 40px;
      font-size: 14px;
      text-align: center;
      line-height: 40px;
      color: var(--color-primary-secondary);
      background: url('@/assets/images/business-supervision/bg/content/bg-middle-tag.png') no-repeat
        center;
      background-size: cover;
    }
  }

  &-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    height: 99px;
    background: url('@/assets/images/business-supervision/bg/content/bg-middle-detail.png')
      no-repeat center;
    background-size: cover;

    strong {
      font-size: 32px;
      color: var(--color-primary-secondary);
    }

    span {
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>
