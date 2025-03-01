<script lang="ts" setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const list = [
  { icon: 'material-symbols:home-and-garden', name: '园区', target: '/' },
  { icon: 'fa:building', name: '园区', target: '/' },
  { icon: 'fa-solid:chart-line', name: '经营', target: '/manage-forms' },
  { icon: 'ri:community-fill', name: '园区', target: '/' },
];
</script>

<template>
  <footer class="flex-y-around">
    <ul class="flex-x-between">
      <li v-for="(item, index) in list" :key="index" @click="router.push(item.target)">
        <i :class="`i-${item.icon}`" />
        <span class="hover">{{ item.name }}</span>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin: 190px 0 0 0;

  ul {
    width: 431px;
    height: 90px;

    li {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      width: 90px;
      height: 90px;
      color: #7cc1ff;
      background: url('@/assets/images/bg/bg-main-2.png') no-repeat center;
      background-size: cover;

      i {
        width: 26px;
        height: 26px;
        font-size: 26px;
      }

      img {
        width: 26px;
        height: 26px;
      }

      span {
        margin: 4px 0 0 0;
        font-size: 13px;
        cursor: pointer;
      }
    }
  }
}
</style>
